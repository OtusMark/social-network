export const composeValidators = (...validators: any) => (value: string) =>
    validators.reduce((error: string, validator: any) => error || validator(value), undefined)

export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (lengthLimit: number) => {
    return (
        (value: string) => {
            if (value && value.length > lengthLimit) return `Max length is ${lengthLimit} symbols`
            return undefined
        }
    )
}
