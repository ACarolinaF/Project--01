import React from "react";


export default function User ({user}){

    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.lastName}</h2>
            <h2>{user.age}</h2>
            <h2>{user.city}</h2>
        </div>
    )
}