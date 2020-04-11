const qs = require('querystring')

export const userSignupRequest = (userData) => {
    // thunk
    return dispatch => {
        return fetch("/api/users",{
            method:"POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                "Accept":"application/json,text/plain,*/*"
            },
            body:qs.stringify(userData)
        }).then(res => {
            res.json()
        })
    }
}