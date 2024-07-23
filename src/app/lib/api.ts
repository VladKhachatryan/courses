import Database from "better-sqlite3"


export interface ICourse{
    id:number
    name:string
    price:number
    cover:string
    duration:number
    modules?:IModule[]
}

export type InputCourse=Omit<ICourse,"id">
export type CourseWithout=Omit<InputCourse,"cover">

const db=new Database("courses.db")

export const addCourse=(course:InputCourse)=>{
  db.prepare(`
        INSERT INTO courses(name,price,cover,duration)
        VALUES(@name,@price,@cover,@duration)
    
    `).run(course)
}

export const getAllCourses=():ICourse[]=>{
    const result= (db.prepare(`
        SELECT * FROM courses
        `).all() as ICourse[]
    ).map(course=>({
        ...course,
        modules:db.prepare("SELECT * FROM modules where courseId=?")
        .all(course.id)as IModule[]
    }))
return result


}

export const getCourseById=(id:number):ICourse=>{
    return db
    .prepare("SELECT * FROM courses where id=?")
    .get(id) as ICourse

}

export const UpdateCourseById=(id:number,course:CourseWithout)=>{
    return db
    .prepare("UPDATE courses set name=?,duration=?,price=?  WHERE id = ?")
    .run(course.name,course.duration,course.price,id)

}

export interface IModule{
    id:number
    name:string
    duration:number
    courseId:number
}

export type inputModule=Omit<IModule,"id">

export const addModuleDb=(obj:inputModule):Database.RunResult=>{
   return db.prepare(`
        INSERT  INTO modules(name,duration,courseId)
        values(@name,@duration,@courseId) 
        `).run(obj)
}


export interface ILecture{
    id:number
    name:string
    suraname:string
    language:string
}

export type inputLecture=Omit<ILecture,"id">

export const addLectureDB=(lectures:inputLecture)=>{
    return db.prepare(`
       INSERT INTO lectures(name,suraname,language) 
       values(@name,@suraname,@language)
        `).run(lectures)
}