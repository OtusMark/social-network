// composeValidators is required to combine validators in React final form.
export const composeValidators = (...validators: any) => (value: string) =>
    validators.reduce((error: string, validator: any) => error || validator(value), undefined)

// Single validators
//------------------

// Checks if the field is not empty.
export const required = (value: string) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

// Max length validator creator, return unique validator that restricts max length of the text in the field.
export const maxLength = (lengthLimit: number) => {
    return (
        (value: string) => {
            if (value && value.length > lengthLimit) {
                return `Max length is ${lengthLimit} symbols`
            } else {
                return undefined
            }
        }
    )
}
