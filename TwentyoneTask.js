const functionTransformation = (userData) => {
    
    const {first_name, last_name, email} = userData;

    const StringNameUser = (`"${last_name} ${first_name} E-mail:${email}"`);

    return StringNameUser
};

console.log(functionTransformation({
    first_name: "Ivan", 
    last_name: "Ivanov", 
    email: "ivanov@pochta.com"
}))

// Написать функцию, которая принимает на вход объект вида 
// { first_name: ‘Ivan’, last_name: ‘Ivanov’, email: ‘ivanov@pochta.com’ }
// и возвращает строку вида: “Ivanov Ivan E-mail: ivanov@pochta.com”.