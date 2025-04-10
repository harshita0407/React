import { useState } from "react";

const Accordion = ({title ,content}) => {
    const[IsOpen , SetIsOpen] = useState(false)

    return (

        <div>

            <button onClick={()=>SetIsOpen(!IsOpen)}>{title} {IsOpen ? "▲" : " ▼"}</button>
            {IsOpen && <p>{content}</p>}
        </div>
    )
}

export default Accordion;