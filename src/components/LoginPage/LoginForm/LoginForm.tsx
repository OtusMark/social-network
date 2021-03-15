import React from "react";
import {Form, Field} from 'react-final-form'

type PropsType = {
    authError: {status: boolean, messages: Array<string>}
    onSubmitHandler: (formData: any) => void
}

export const LoginForm: React.FC<PropsType> = ({onSubmitHandler, authError}) => {
    return (
        <Form
            onSubmit={values => onSubmitHandler(values)}
            render={({handleSubmit, form}) => (
                <form onSubmit={async event => {
                        await handleSubmit(event)
                        form.reset()
                }}>
                    <div>
                        <Field placeholder={'Email'} name={'email'} component={'input'}/>
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
                        <span>Remember me</span>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <div>{authError.messages}</div>
                </form>
            )}
        >
        </Form>
    )
}

// React final form notes. (https://final-form.org/react)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Field is replacing the standard input. component={'input'} must be added as an attribute.
// onSubmit returns the values of the submitted form.
// handleSubmit is a prop of the React final form library.