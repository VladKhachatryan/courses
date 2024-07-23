import { addLecture } from "@/app/lib/actions/lectures-action";

export default function Page(){
    return<>
       <h1 className="is-size-3">Add Lecture</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form action={addLecture}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            className="input is-dark"
                            placeholder="please enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-dark"
                            name="suraname"
                            placeholder="please enter a suraname"
                        />
                    </div>
                    <div className="field my-4">
                    <input
                            type="text"
                            className="input is-dark"
                            name="language"
                            placeholder="please enter a language"
                        />
                    
                    </div>
                    <button className="button is-dark">ADD Lecture</button>
                </form>
            </div>
        </div>    
        </>

}