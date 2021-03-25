import {ProfileType} from "../../../redux/reducers/profile-reducer";
import React from "react";
import {Field, Form} from "react-final-form";
import {FormErrorType} from "../../../redux/reducers/form-reducer";

type ProfileDataFormPropsType = {
    profile: ProfileType
    formError: FormErrorType
    onEditSubmitHandler: (formData: any) => void
}

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = (props) => {

    const {
        profile,
        onEditSubmitHandler,
        formError,
    } = props

    return (
        <Form
            onSubmit={values => onEditSubmitHandler(values)}
            render={({handleSubmit}) => (
                <form onSubmit={async event => {
                    await handleSubmit(event)
                }}>
                    <div>
                        <Field placeholder={'full name'}
                               defaultValue={profile.lookingForAJob}
                               name={'fullName'}
                               component={'input'}/>
                    </div>
                    <div>
                        <label>
                            <Field defaultValue={profile.lookingForAJob}
                                   name={'lookingForAJob'}
                                   component={'input'}
                                   type={'checkbox'}/>
                            Looking for a job
                        </label>
                    </div>

                    <div>My professional skills:
                        <Field defaultValue={profile.lookingForAJobDescription}
                               name={'lookingForAJobDescription'}
                               component={'textarea'}/>
                    </div>

                    <div>About me:
                        <Field defaultValue={profile.aboutMe} name={'aboutMe'} component={'textarea'}/>
                    </div>

                    Contacts
                    <div>Contacts:</div>

                    {Object.keys(profile.contacts).map((key: any) => {
                        return (
                            <div key={key}>{key}:<Field placeholder={key} defaultValue={profile.contacts[key]}
                                                        name={'contacts.' + key} component={'input'}/></div>
                        )
                    })}

                    <div>{formError.messages}</div>
                    <button>Save profile</button>
                </form>
            )}
        >
        </Form>
    )
}