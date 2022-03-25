import { CREATE_USERS } from "./actions";

let index = 1;

const initialState ={
    users: []
};


export default function rootReducer ( state = initialState, action) {
    switch (action.type) {
        case CREATE_USERS:
            return{
                ...state,
                users: [...state.users, {...action.payload, id: index++}]
                //seria exatamente igual se fizesse:
                //users: state.users.concat(action.payload)
            }
    
        default:
            return{
                ...state
            }
    }
}