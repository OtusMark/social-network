export const updateObjectInArray = (items: Array<any>, itemId: string | number, objPropName: string, newObjProps: Object) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
}