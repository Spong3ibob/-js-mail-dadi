const email = prompt ("inserisi la tua e mail");
const emailVerified = ["marcorossi@gmail.com", "andreabinachi@gmail.com", "paolocannone@gmail.com"];
if(email.includes("marcorossi@gmail.com")){
    console.log("Passed Admin")
}else if(email.includes("andreabinachi@gmail.com")){
    console.log("Passed")
}else if(email.includes("paolocannone@gmail.com")){
    console.log("Passed")
}else{
    console.log("Negated")
}
