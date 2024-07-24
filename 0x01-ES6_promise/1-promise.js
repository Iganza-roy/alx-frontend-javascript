export default getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) =>{
        if (success) {
            return ({
                status: 200,
                body: 'Success',
            })}
            else {
                return (new Error('The fake API is not working currently'))
            }
    })
}
