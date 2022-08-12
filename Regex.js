function ValidEmail(){

alert('Welcome!');
let emailInput = prompt('Please input your email');

if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    const replaceEmail = email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
    alert(replaceEmail);
} else if (email == '') {
    alert ('Please input your email')
} else{
    alert('You entered an invalid email address')
}
}
ValidEmail();