import React, { useState } from "react";


import NavBar from "../NavBar/NavBar";


export default function CreateUser() {

    let [input, setInput] = useState({
        name:'',
        lastName:'',
        age:'',
        city:''
    })

    let handleChange = (e) =>{
        e.preventDefault();
        setInput((prev)=>({
            ...prev, 
            [e.target.name]: e.target.value})
        )
    }

    let handleSubmit = (e) =>{
        e.preventDefault();
        //dispatch de uma ação que me encha o estado global dessa informação
        setInput({
            name:'',
            lastName:'',
            age:'',
            city:''
        });
    }

    return (
        <div>
            <NavBar />
            <br />
            CREATE USER
            <br />
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type='text' id='name' value={input.name} onChange={(e)=>handleChange(e)}/>
                </div>

                <div>
                    <label>Last Name</label>
                    <input type='text' id='lastName' value={input.lastName} onChange={(e)=>handleChange(e)}/>
                </div>

                <div>
                    <label>Age</label>
                    <input type='text' id='age' value={input.age} onChange={(e)=>handleChange(e)}/>
                </div>

                <div>
                    <label>City</label>
                    <input type='text' id='city' value={input.city} onChange={(e)=>handleChange(e)}/>
                </div>

                <input type='submit' value='CREATE'/>
                {/* outra opção para o input seria um botão que quando se faz onClick ele ativa 
                exatamente a mesma ação - handleSubmit */}

            </form>


        </div>
    )
}