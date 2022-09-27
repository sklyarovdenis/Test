const emailObject = (email) => {
    const result = email.split('@')
    return {
        username: result[0],
        domain: result[1]
    }
}

console.log(emailObject('ivanov.oleg@pochta.com'))