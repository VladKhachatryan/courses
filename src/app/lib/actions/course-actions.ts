"use server"
import { createWriteStream } from "fs"
import { CourseWithout, InputCourse, UpdateCourseById, addCourse, addModuleDb, inputModule } from "../api"
import { redirect } from "next/navigation"
import { log } from "console"
export const handleAdd = async (prev:unknown,data:FormData) => {
   if(!data.get("name")){
      return{
         message:"PLease fill "
      }
   }




   const photo = data.get('cover') as File
   if(photo){
     let extension = photo.type.split("/").at(-1)
     const filename =  Date.now() + "." + extension
     const stream = createWriteStream("public/images/" + filename)
     const bufferedImage = await photo.arrayBuffer()
     stream.write(Buffer.from(bufferedImage))
     let course:InputCourse = {
        name: data.get('name') as string,
        price: +(data.get('price') as string),
        duration: +(data.get('duration') as string),
        cover: 'images/' + filename
     }
     addCourse(course)
     redirect("/")
   }
}


export const handleUpdate=async (data:FormData)=>{
let course:CourseWithout={
    name:data.get("name")as string,
    price:+(data.get("price")as string),
    duration:+(data.get("duration") as string)
}
let id= +(data.get("id")as string)   
UpdateCourseById(id,course)
redirect("/courses")
}

export const addModule=async (data:FormData)=>{
let obj:inputModule={
   name:data.get("name")as string,
   duration:+(data.get("duration")as string),
   courseId:+(data.get("courseId") as string)
} 
let result=addModuleDb(obj)
redirect("/courses")
}