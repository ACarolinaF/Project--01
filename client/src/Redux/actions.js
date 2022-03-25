

export const CREATE_USERS = 'CREATE_USER';




export function createUser (data){
    return({
        type: CREATE_USERS,
        payload: data
    })
}