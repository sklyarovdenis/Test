let funcN = (usDate) => {
    
    let {first_name, last_name, email} = usDate;

    let lname = (`"${last_name} ${first_name} E-mail:${email}"`)
    
    console.log(lname)
};

funcN({ 
    first_name: "Ivan", 
    last_name: "Ivanov", 
    email: "ivanov@pochta.com" 
})

