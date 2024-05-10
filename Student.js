import React,{component} from "react";
const students=[{id:'1267',Sname:'Deevena',favsub:}
{id:'1269',Sname:'vandana'}]
class StudentList extends Component{
    constructor()
    {
        super(props)
    }
    render()
    {
        return(
            students.map((n)=>(
                <Student1item
                id={n.id}
                name={n.Sname}
                favsub={n.favsub} />
            )
            )
        )
    }
}
export default StudentList