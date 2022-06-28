import Human from '../human.class'

export default class Teacher extends Human {
  constructor(name: string, age: number) {
    super(name, age)
  }
  public sayHello(): void {
    console.log(`im teacher ${this.name} and ${this.age} years old`)
  }

  public work(): void {
    console.log('im gonna teach you babe')
  }
}
