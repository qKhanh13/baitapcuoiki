
// sessionStorage.setItem("name","Khanh");
// let personName = sessionStorage.getItem("name");
// document.getElementById("demo").innerHTML = personName;


// localStorage.setItem("lop",11);
// let className = localStorage.getItem("lop");
// document.getElementById("test").innerHTML = className;
// set -- get -- remove
// promise

// async function f(){
//     return 1;
// }
// f().then(alert)

// resole là đồng ý reject là từ chối 
//let  value = await promise;
// async function f(){
//     return Promise.resolve(1);
// }
// f().then(alert)
// async function f(){
//     let promise = new promise((resove,reject) =>{
//         setTimeout(() => 
//         resolve("done!"), 1000)
//     });
//     let result = await promise;
//     alert(result)
// }
// f()
// async function f(){
//     let promise = new Promise((resolve,reject) =>{
//         setTimeout(() =>
//         resolve("done!"), 5000)
//     });
//     let result = await promise;
//     alert(result);
// }
// f();
let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.pass');
let submitButton = document.querySelector('.submitbtn');
let userNlogin = document.querySelector('.userNlogin');
let passwordLogin = document.querySelector('.passlogin');
let loginButton = document.querySelector('.loginbtn');
const User = {
    usernames: [],
    passwords: []
 }
 submitButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    if ( usernameInput.value.trim() == '' || passwordInput.value.trim() == '' )
    {
        alert('Điền thông tin vào chỗ trống');
        return;
    }
   
    else if ( User.usernames.indexOf(usernameInput.value) !== -1 ) {
        alert('đăng ký thành công');
        return;
    }
    else {
    User.usernames.push(usernameInput.value)
    User.passwords.push(passwordInput.value);
    localStorage.setItem("userData", JSON.stringify(User));   
    }
                  
 })
 loginButton.addEventListener('click', (e, inputUsername, inputPassword) => {
    e.preventDefault();
    let userData = localStorage.getItem("userData");
    let parsedData = JSON.parse(userData);
    let password = '';
    let username = '';
    inputUsername = userNlogin.value;
    inputPassword = passwordLogin.value;
  
    if (inputUsername == '' || inputPassword == '' ) {
        alert('điền vào chỗ trống');
        return;
    }
  
    else {
  
        let passwordArrayLength = parsedData.passwords.length;
        for (let i = 0; i < passwordArrayLength; i++) {
            password = parsedData.passwords[i];
            if (password == inputPassword) {
                break;
            }
        }
        let usernameArrayLength = parsedData.usernames.length;
        for (let i = 0; i < usernameArrayLength; i++) {
            username = parsedData.usernames[i];
            if (username == inputUsername) {
                break;
            }
        }
        checkPasswordMatch(username, password, inputUsername, inputPassword);
    }
   
 })
 
 function checkPasswordMatch(userName, password, inputUsername, inputPassword) {
    (userName == inputUsername && password == inputPassword) ? alert('đăng nhập thành công') : alert(' đăng nhập thất bại');
 }
 
   