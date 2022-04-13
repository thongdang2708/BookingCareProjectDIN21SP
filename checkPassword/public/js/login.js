let password_type = document.getElementById('password');
let eye_contact = document.getElementById('eye-contact');

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

document.getElementById("quaylai").onclick=function(){
    location.href="/mainpage"
};
