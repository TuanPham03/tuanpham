function validateFormContact(){
    var name=inputname.value.trim();
    var phone=inputphone.value.trim();
    var email=inputemail.value.trim();
    var note=inputnote.value.trim();

    var isValid = true;
    //ho va ten user
    if (name==='') {
        errorinputname.textContent='Vui lòng nhập họ và tên của bạn';
        document.getElementById('inputname').style.borderBottom = "2px solid red";
        isValid=false;
    }
    else{
        errorinputname.textContent='';
        document.getElementById('inputname').style.borderBottom = "2px solid darkturquoise";
    }
    
    //SDT user
    if (!testphone(inputphone.value)) {
        errorinputphone.textContent = 'Vui lòng nhập một SDT hợp lệ.';
        document.getElementById('inputphone').style.borderBottom = "2px solid red";
        isValid = false;
    } else {
        errorinputphone.textContent = '';
        document.getElementById('inputphone').style.borderBottom = "2px solid darkturquoise";
    }

    //email
    if (email === '') {
        errorinputemail.textContent = 'Vui lòng nhập email của bạn.';
        document.getElementById('inputemail').style.borderBottom = "2px solid red";

        isValid = false;
    } else if (!validateEmail(inputemail.value)) {
        errorinputemail.textContent = 'Vui lòng nhập địa chỉ email hợp lệ.';
        document.getElementById('inputemail').style.borderBottom = "2px solid red";
        isValid = false;
    }
    else{
        errorinputemail.textContent = '';
        document.getElementById('inputemail').style.borderBottom = "2px solid darkturquoise";
    }
    
    if (note==='') {
        errornote.textContent='Vui lòng nhập tin nhắn bạn muốn gửi';
        document.getElementById('inputnote').style.borderBottom = "2px solid red";
        isValid=false;
    }
    else{
        errornote.textContent='';
        document.getElementById('inputnote').style.borderBottom = "2px solid darkturquoise";
    }
    if(isValid){
        alert("Gửi thành công")
    }
}
function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
function testphone(num) {
    var testnum = /((0)+([0-9]{9}))/;
    return testnum.test(num);
}