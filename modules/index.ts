/* eslint-disable @typescript-eslint/no-var-requires */
import { readdirSync } from "fs"
import { join } from "path"
import Human from "./person.class"

export default (name:string,age:number,job:string):void=>{
    const {default:Module}:Loader=loader(job)
    const person:Human=new Module(name,age)
    person.sayHello()
    person.work()
}

const loader=(job:string)=>{
    const map:Record<string,Loader>={}
    readdirSync(join(__dirname,'jobs')).forEach((file_name:string)=>{
        const job_name:string=file_name.split('.')[0]
        const module:Loader=require(join(__dirname,`jobs/${file_name}`))
        map[job_name]=module
    })
    return map[job]
}

type Loader={
    default:new(name:string,age:number)=>Human
}