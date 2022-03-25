import React, { useState } from "react";



import NavBar from "../NavBar/NavBar.jsx";


export default function Home ({name}){

    //defino um ESTADO LOCAL!

    let[input, setInput] = useState({name:'', lastName:' '})

    return (
        <div>
            This is HOME and:
            This will renderize the NavBar first:
            <NavBar/>
            Then all the home:
            this is home
             - {name}
        </div>
    )
}