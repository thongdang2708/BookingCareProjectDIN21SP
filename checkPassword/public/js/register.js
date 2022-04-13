
let eye_contact = document.getElementById('eye-contact');
let eye_contact_confirm = document.getElementById('eye-contact-confirm');
let password_type = document.getElementById('password');
let password_repeat_type = document.getElementById('password-repeat');
eye_contact.addEventListener('click', (ed) => {
    ed.preventDefault();

    if (password_type.type === 'password') {
        password_type.setAttribute('type','text');
        eye_contact.classList.add('active');
    } else {
        password_type.setAttribute('type','password');
        eye_contact.classList.remove('active');
    }

})

eye_contact_confirm.addEventListener('click', (er) => {

    er.preventDefault();

    if (password_repeat_type.type === 'password') {
        password_repeat_type.setAttribute('type','text');
        eye_contact_confirm.classList.add('active');
    } else {
        password_repeat_type.setAttribute('type','password');
        eye_contact_confirm.classList.remove('active');
    }
})

document.getElementById("quaylai").onclick=function(){
    location.href="/mainpage"
};
