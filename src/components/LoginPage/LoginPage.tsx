import React from 'react'
import {LoginReduxForm} from "./LoginForm/LoginForm";

// type FormDataType = {
//     login: string
//     password: string
//     rememberMe: boolean
// }

export const LoginPage = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}