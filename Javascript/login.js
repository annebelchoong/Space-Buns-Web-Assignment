
//Show Password
function showPass() {
    var x = document.getElementById("custPwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //Login successful
  function LoginSuccess() {
  alert('Login Sucessfully');
  }