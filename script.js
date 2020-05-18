function validateForm() {
    const input = document.getElementById('email');
    const label = document.getElementById('label-error');
    const email = input.value;

    label.style.display = 'none';
    if (input.classList.contains('input-error')) input.classList.remove('input-error');
    
    let isValid = IsEmail(email);

    if (!isValid) {
        label.style.display = 'block';
        input.classList.add('input-error');
    }

    return isValid;
}

// font: https://codigofonte.com.br/codigos/validacao-completa-de-email-com-javascript-e-expressao-regular
function IsEmail(email){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}