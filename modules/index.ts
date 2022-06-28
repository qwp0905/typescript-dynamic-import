import { readdirSync } from 'fs'
import { join } from 'path'
import { Loader } from '../interface/interface'
import Human from './human.class'

export default async (
  name: string,
  age: number,
  job: string
): Promise<void> => {
  try {
    const { default: Module }: Loader = await loader(job)
    const person: Human = new Module(name, age)
    person.sayHello()
    person.work()
  } catch (err: unknown) {
    console.log('그런 직업은 없어')
  }
}

const loader = async (job: string): Promise<Loader> => {
  const map: Record<string, Loader> = {}
  await Promise.all(
    readdirSync(join(__dirname, 'jobs')).map(async (file_name: string) => {
      const job_name: string = file_name.split('.')[0]
      const module: Loader = await import(join(__dirname, `jobs/${file_name}`))
      map[job_name] = module
    })
  )
  return map[job]
}
