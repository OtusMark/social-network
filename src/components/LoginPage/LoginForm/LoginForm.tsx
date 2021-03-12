import React from "react";
import {Form, Field} from 'react-final-form'

type PropsType = {
    onSubmitHandler: (formData: any) => void
}

export const LoginForm: React.FC<PropsType> = ({onSubmitHandler}) => {
    return (
        <Form onSubmit={values => onSubmitHandler(values)}>
            {({handleSubmit}) => (
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
            )}
        </Form>
    )
}

// React final form notes. (https://final-form.org/react)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Field is replacing the standard input. component={'input'} must be added as an attribute.
// onSubmit returns the values of the submitted form.
// handleSubmit is a prop of the React final form library.