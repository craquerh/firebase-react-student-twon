import { useState } from "react";
import { saveTitle } from "../firebase/Firebase";

export default function BeticoForm() {
    const [itsTitlie, setItsTitle] = useState("");
    const handleValueState = (event) => {
        setItsTitle(event.target.value)
        
    }
    const handleSumit = (event) =>{
event.preventDefault();
saveTitle(itsTitlie);
    }
    return <>
    <form onSubmit={handleSumit}>
        <input className="h" type="text" placeholder="Que tarea vas a guardar hoy?"
        value={itsTitlie}  onChange={handleValueState}/>
        <input className="bt" type="submit" value="Guardar" />
     <h2></h2>
    </form>
    {itsTitlie}
    </>
     
   
}