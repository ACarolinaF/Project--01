import React from "react";
import { useSelector } from "react-redux";
import User from "../User/User";

export default function Users (){

    let allUsers = useSelector(state => state.users)

    return(
        <div>
            {
                allUsers && allUsers.map(user=><div>
                    <User key={user.id} user={user}/>
                </div>)
            }
        </div>
    )
}