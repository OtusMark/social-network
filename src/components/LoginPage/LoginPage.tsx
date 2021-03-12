import React from 'react'
import {LoginForm} from "./LoginForm/LoginForm";

export const LoginPage = () => {

    const onSubmitHandler = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}