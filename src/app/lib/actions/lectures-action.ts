"use server"
 import { addLectureDB, inputLecture } from "../api"


 export const addLecture =async(data:FormData)=>{
    let lecture:inputLecture={
        name:data.get('name') as string,
        suraname:data.get("suraname") as string,
        language:data.get("language") as string
    }
    addLectureDB(lecture)
 }