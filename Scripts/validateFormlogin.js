function validateFormlogin(){
    var username=inputnameuser.value.trim();
    var password=inputpassword.value.trim();
    
    var isValid = true;
            //email user
            if (username === '') {
                errorinputnameuser.textContent = 'Vui lòng nhập email của bạn.';
                document.getElementById('inputnameuser').style.borderBottom = "2px solid red";

                isValid = false;
            } else if (!validateEmail(inputnameuser.value)) {
                errorinputnameuser.textContent = 'Vui lòng nhập địa chỉ email hợp lệ.';
                document.getElementById('inputnameuser').style.borderBottom = "2px solid red";
                isValid = false;
            }
            else{
                errorinputnameuser.textContent = '';
                document.getElementById('inputnameuser').style.borderBottom = "2px solid darkturquoise";
            }
            //mật khẩu
            if (password==='') {
                errorinputpass.textContent='Vui lòng nhập mật khẩu của bạn';
                document.getElementById('inputpassword').style.borderBottom = "2px solid red";
                isValid=false;
            }
            else{
                errorinputpass.textContent='';
                document.getElementById('inputpassword').style.borderBottom = "2px solid darkturquoise";
            }

            if(isValid){
                alert("Đăng nhập thành công")
                window.location.href="index.html"
            }
}
function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
