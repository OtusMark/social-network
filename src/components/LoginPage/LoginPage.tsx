import React from 'react'
import {LoginForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {AppRootStateType, DispatchType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type LoginPagePropsType = any & {
    login: (email: string, password: string, rememberMe: boolean) => { dispatch: DispatchType }
    isAuth: boolean
    authError: {
        status: boolean
        messages: Array<string>
    }
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginPage: React.FC<LoginPagePropsType> = ({login, isAuth, authError}) => {

    const onSubmitHandler = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm authError={authError} onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError
})

export default connect(mapStateToProps, {login})(LoginPage)