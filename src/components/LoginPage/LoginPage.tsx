import React from 'react'
import {LoginForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {AppRootStateType, DispatchType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type LoginPagePropsType = any & {
    login: (email: string, password: string, rememberMe: boolean) => { dispatch: DispatchType }
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginPage = (props: LoginPagePropsType) => {

    const onSubmitHandler = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm authError={props.authError} onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError
})

export default connect(mapStateToProps, {login})(LoginPage)