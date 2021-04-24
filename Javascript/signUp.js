  //Sign Up successful
  function SignUpSuccess() {
    alert('Sign Up Sucessfully');
    }

    
//check username = password
function checkuserpass() {
  var a = document.getElementById("custuserName").value
  var b = document.getElementById("NewPwd").value
  if(a != b) {
      document.getElementById('Notvalid').innerHTML='';
  }
  else
  {
    document.getElementById('Notvalid').innerHTML='Username and'
    + ' Password cannot be the same!';
  }
}

//Password confirmation
function confirmPass() {
    var pass = document.getElementById("NewPwd").value
    var confPass = document.getElementById("confirmPwd").value
    if(pass != confPass) {
        //alert('Wrong confirm password !');
        document.getElementById('error').innerHTML='Password do not match!';
    }
    else
    {
        document.getElementById('error').innerHTML='';
    }
}
