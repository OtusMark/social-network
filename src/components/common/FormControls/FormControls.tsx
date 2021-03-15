import React from "react";


export const TextArea: React.FC<any> = ({input, meta, props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<any> = ({input, meta, props}) => {
    return (
        <div>
            <input {...input} {...props}/>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

// Code duplication!!! Needs refactoring