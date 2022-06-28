import { createInterface, Interface } from 'readline'
import { Person } from './interface/interface'
import modules from './modules'

const rl: Interface = createInterface({
  input: process.stdin,
  output: process.stdout
})

const data: Person = {}

const nameCheck = () => {
  rl.question('아룸은? ', (answer) => {
    data.name = answer
    return ageCheck()
  })
}

const ageCheck = () => {
  rl.question('나이는? ', (answer) => {
    const age = +answer
    if (typeof age !== 'number') {
      return ageCheck()
    } else {
      data.age = age
      return jobCheck()
    }
  })
}

const jobCheck = () => {
  rl.question('직업은? ', (answer) => {
    data.job = answer
    return last()
  })
}

const last = async () => {
  const { job, age, name } = data
  if (!name || !age || !job) return nameCheck()
  await modules(name, age, job)
  process.exit()
}

nameCheck()
