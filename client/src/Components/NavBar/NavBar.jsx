import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar (){
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/home'>
                    <button>Home</button>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/users'>
                    <button>Users</button>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/create'>
                    <button>Create Users</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                    <button>About</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}