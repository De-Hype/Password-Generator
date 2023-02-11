var u_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var l_case = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var symbol = `~!@#$%^&*()_+=-{}['";:|\.,?/]`;
let empty = '';


var Show_password_div = document.getElementById('Showcase-password');
var password_length_div = document.querySelector('.p-length-input');
var u_case_div = document.getElementById('uppercase');
var l_case_div = document.getElementById('lowercase');
var number_div = document.getElementById('number');
var symbol_div = document.getElementById('symbols');
var submit_btn = document.querySelector('.submit')
var copy = document.querySelector('.copy');


submit_btn.addEventListener('click', ()=>{

    let init_password = empty;
    (u_case_div.checked) ? init_password += u_case:"";
    (l_case_div.checked) ? init_password += l_case:"";
    (number_div.checked) ? init_password += number:"";
    (symbol_div.checked) ? init_password += symbol :"";

    Show_password_div.value = Password_Checker(password_length_div.value, init_password)
    // console.log(Show_password_div.value)
})


function Password_Checker(Pass_L, init_password ){
    let pass = ""
    for (let index = 0; index < Pass_L; index++) {
        pass += init_password.charAt(Math.floor(Math.random() * init_password.length))
    }
    return pass
}

copy.addEventListener('click', ()=>{
  if (Show_password_div.value != ""){
    alert('Password Copied')
    Show_password_div.select()
    document.execCommand('copy')
  } else{
    alert('Can not copy if pasword has not been generated'.toUpperCase())
  }
})
