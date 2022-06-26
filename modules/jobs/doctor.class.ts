import Human from '../person.class'

export default class doctor extends Human {
	constructor(name: string, age: number) {
		super(name, age)
	}
	public sayHello(): void {
		console.log(`im doctor ${this.name} ${this.age} year's old`)
	}

	public work(): void {
		console.log(`doctor is working....`)
	}
}
