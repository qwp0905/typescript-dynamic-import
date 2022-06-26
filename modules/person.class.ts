export default abstract class Human {
    readonly name: string
    readonly age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    public abstract sayHello(): void

    public abstract work(): void
}