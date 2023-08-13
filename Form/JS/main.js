let LoginBtn = document.getElementById('loginBtnNav');
let registerBtn =document.getElementById('signupBtnNav');

LoginBtn.addEventListener('click', ()=>{
    window.location.replace('login.html');
})
registerBtn.addEventListener('click', ()=>{
    window.location.replace('signup.html');
})