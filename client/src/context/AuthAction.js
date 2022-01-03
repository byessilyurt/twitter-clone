export const  LOGIN_START = (userCredentials) =>  {
    type:"LOGIN_START"
}

export const  LOGIN_SUCCESS = (user) =>  ({
    type:"LOGIN_SUCCESS",
    payload:user
})

export const  LOGIN_FAILURE = (err) =>  ({
    type:"LOGIN_FAILURE",
    payload:err
})