import Human from '../modules/human.class'

type Loader = {
  default: new (name: string, age: number) => Human
}

interface Person {
  name?: string
  age?: number
  job?: string
}
