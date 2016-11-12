function validate() {

    let usernameField=$('#username');
    let emailField=$('#email');
    let passwordField=$('#password');
    let confirmPasswordField=$('#confirm-password');
    let companyCheckBox=$('#company');
    let companyInfoField=$('#companyInfo');
    let companyNumberField=$('#companyNumber');

    let usernamePattern= /\b[A-Za-z0-9]{3,20}\b/g;
    let passwordPatten=/\b\w{5,15}\b/g;
    let emailPattern=/^.*@.*?\..*?$/;

    let submitBtn=$('#submit');

    companyCheckBox.on('change',function () {
        if(companyCheckBox.is(':checked')){
            companyInfoField.css('display','block')
        }
        else {
            companyInfoField.css('display','none')
        }
    });

    submitBtn.on('click',function (ev) {
        ev.preventDefault();
        validateInput();
    });

    function validateInput() {
        let isValid=true;

        if(!usernameField.val().match(usernamePattern)){
            $(usernameField).css('border','2px solid red');
            isValid=false;
        }
        else {
            $(usernameField).css('border','none');
        }

        if(!emailField.val().match(emailPattern)){
            $(emailField).css('border','2px solid red');
            isValid=false
        }
        else {
            $(emailField).css('border','none');
        }

        if(passwordField.val().match(passwordPatten) && passwordField.val()==confirmPasswordField.val()){
            $(passwordField).css('border','none');
            $(confirmPasswordField).css('border','none');
        }
        else {
            $(passwordField).css('border','2px solid red');
            $(confirmPasswordField).css('border','2px solid red');
            isValid=false
        }

        if(companyCheckBox.is(':checked')&& Number(companyNumberField.val())>=1000 && Number(companyNumberField.val()<=9999)){
            $(companyNumberField).css('border','none');
        }
        else if(!companyCheckBox.is(':checked')){
            $(companyNumberField).css('border','none');
        }
        else {
            $(companyNumberField).css('border','2px solid red');
            isValid=false;
        }

        if(isValid){
            $('#valid').show()
        }
    }


}
