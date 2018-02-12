function login() {
    let loginPage = document.getElementById("loginPage");
    let signupPage = document.getElementById("signupPage");
    let titleText = document.getElementById("titleText");

    if (signupPage.classList.contains("hide-display") == false) signupPage.setAttribute("class", "hide-display");

    if (loginPage.classList.contains("hide-display")) {
      loginPage.removeAttribute("class");
      titleText.setAttribute("class", "banner-info text-center wow fadeIn delay-05s col-md-9 col-sm-6 col-xs-4");
      if (window.innerWidth < 767) {
        document.getElementById("login-box").setAttribute("style", "left: 50%");
        titleText.setAttribute("style", "display: none");
      }
    } else {
      loginPage.setAttribute("class", "hide-display");
      titleText.setAttribute("class", "banner-info text-center wow fadeIn delay-05s");
      titleText.setAttribute("style", "display: block");
    }
}

$(function() {

$("#loginName_error_message").hide();
$("#loginPassword_error_message").hide();

var error_loginName = false;
var error_loginPassword = false;

$("#form_loginName").focusout(function(){
    check_loginName();
});

$("#form_loginPassword").focusout(function(){
    check_loginPassword();
});

function check_loginName() {
  var pattern = /^[a-zA-Z]*$/;
  var name = $("#form_loginName").val()
  if (pattern.test(name) && name !== "") {
    $("#loginName_error_message").hide();
    $("#form_loginName").css("border-bottom","2px solid #34F458");
  } else {
    $("#loginName_error_message").html("Should contain only Characters");
    $("#loginName_error_message").show();
    $("#form_loginName").css("border-bottom","2px solid #F90A0A");
    error_loginName = true;
  }
}

function check_loginPassword() {
  var password_length = $("#form_loginPassword").val().length;
  if (password_length < 8) {
    $("#loginPassword_error_message").html("At least 8 Characters");
    $("#loginPassword_error_message").show();
    $("#form_loginPassword").css("border-bottom","2px solid #F90A0A");
    error_loginPassword = true;
  } else {
    $("#loginPassword_error_message").hide();
    $("#form_loginPassword").css("border-bottom","2px solid #34F458");
  }
}

$("#registration_form").submit(function() {
  error_loginName = false;
  error_loginPassword = false;

  check_loginName();
  check_loginPassword();

  if(error_loginName === false && error_loginPassword === false) {
       alert("Registration Successfull");
       return true;
     } else {
       alert("Please fill the form Correctly");
       return false;
     }
   });
});
