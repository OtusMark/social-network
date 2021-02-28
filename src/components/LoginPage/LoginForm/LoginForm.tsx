import React, {FormEventHandler} from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

// I have no idea how to type the redux-form
type PropsType = InjectedFormProps & {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const LoginForm: React.FC<PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
                <span>Remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    // Unique name for the form
    form: 'login'
})(LoginForm)