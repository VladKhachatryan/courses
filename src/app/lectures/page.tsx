import Link from "next/link"

export default function Page(){
    return <>
    <div className="is-vcentered">
        <Link href={`/lectures/edit`}>EDIT LECTURE</Link>
        <br />
        <Link href={`/lectures/add`}>ADD LECTURE</Link>
        
    </div>
   
    </>
}