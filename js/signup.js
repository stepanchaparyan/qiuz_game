let signupSweetAlert = () => {
swal({
  title: "Thank you!",
  text: "You signup as User",
  icon: "success",
  button: "OK",
});
}

let signup = () => {
    let signupPage = document.getElementById("signupPage");
    let loginPage = document.getElementById("loginPage");
    let titleText = document.getElementById("titleText");

    if (loginPage.classList.contains("hide-display") == false) loginPage.setAttribute("class", "hide-display");

    if (signupPage.classList.contains("hide-display")) {
      signupPage.removeAttribute("class");
      titleText.setAttribute("class", "banner-info text-center wow fadeIn delay-05s col-md-9 col-sm-6 col-xs-4");
      if (window.innerWidth < 767) {
        document.getElementById("signup-box").setAttribute("style", "left: 50%");
        titleText.setAttribute("style", "display: none");
      }
    } else {
      signupPage.setAttribute("class", "hide-display");
      titleText.setAttribute("class", "banner-info text-center wow fadeIn delay-05s");
      titleText.setAttribute("style", "display: block");
    }
}

$(function() {

$("#name_error_message").hide();
$("#email_error_message").hide();
$("#password_error_message").hide();
$("#retype_password_error_message").hide();
$('#signupButton').prop('disabled', true);

var error_name = false;
var error_email = false;
var error_password = false;
var error_retype_password = false;
var user_exist = false;
var name_disabled = true;
var check_user_disabled = true;
var password_disabled = true;
var retype_password_disabled = true;
var email_disabled = true;

$("#form_name").focusout(function(){
    check_name();
});
$("#form_name").focusout(function(){
    check_user_exist();
});
$("#form_email").focusout(function(){
    check_email();
});
$("#form_password").focusout(function(){
    check_password();
});
$("#form_retype_password").focusout(function(){
    check_retype_password();
});

function check_name() {
  var pattern = /^[a-zA-Z]*$/;
  var name = $("#form_name").val();
  if (pattern.test(name) && name !== "") {
    $("#name_error_message").hide();
    $("#form_name").css("border-bottom","2px solid #34F458");
    name_disabled = false;
  } else {
    $("#name_error_message").html("Should contain only Characters");
    $("#name_error_message").show();
    $("#form_name").css("border-bottom","2px solid #F90A0A");
    $("#name_error_message").css("color","#F90A0A");
    error_fname = true;
  }
}

function check_user_exist() {
  for (var i = 1; i < info.data.length; i++) {
    if ($("#form_name").val() == info.data[i-1].Name) {
      console.log("input " + document.getElementById("form_name").value);
      console.log("info " + info.data[i-1].Name);
      $("#name_error_message").html("Please, use other Username");
      $("#name_error_message").show();
      $("#form_name").css("border-bottom","2px solid #F90A0A");
      $("#name_error_message").css("color","#F90A0A");
      user_exist = true;
    } else {
      $("#password_error_message").hide();
      $("#form_password").css("border-bottom","2px solid #34F458");
      check_user_disabled = false;
      }
  }
}

function check_password() {
  var passsword = $("#form_password").val();
  var password_length = $("#form_password").val().length;
  if (password_length < 8) {
    $("#password_error_message").html("At least 8 Characters");
    $("#password_error_message").show();
    $("#form_password").css("border-bottom","2px solid #F90A0A");
    $("#password_error_message").css("color","#F90A0A");
    error_password = true;
  } else {
    $("#password_error_message").hide();
    $("#form_password").css("border-bottom","2px solid #34F458");
    password_disabled = false;
  }
}

function check_retype_password() {
  var password = $("#form_password").val();
  var retype_password = $("#form_retype_password").val();
  if (password !== retype_password) {
    $("#retype_password_error_message").html("Passwords did not matched");
    $("#retype_password_error_message").show();
    $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
    $("#retype_password_error_message").css("color","#F90A0A");
    error_retype_password = true;
  } else {
    $("#retype_password_error_message").hide();
    $("#form_retype_password").css("border-bottom","2px solid #34F458");
    retype_password_disabled = false;
  }
}

function check_email() {
  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var email = $("#form_email").val();
  if (pattern.test(email) && email !== "") {
    $("#email_error_message").hide();
    $("#form_email").css("border-bottom","2px solid #34F458");
    email_disabled = false;
  } else {
    $("#email_error_message").html("Invalid email");
    $("#email_error_message").show();
    $("#form_email").css("border-bottom","2px solid #F90A0A");
    $("#email_error_message").css("color","#F90A0A");
    error_email = true;
  }
}

$("#signup-box").hover(function(){
  check_name();
  check_email();
  check_password();
  check_retype_password();
  check_user_exist();

  if(email_disabled == false && name_disabled == false &&
   password_disabled == false && retype_password_disabled == false && check_user_disabled == false) {
     $('#signupButton').prop('disabled', false);
  }
});


$("#signup_form").submit(function() {
  error_name = false;
  error_email = false;
  error_password = false;
  error_retype_password = false;
  user_exist = false;

  check_name();
  check_email();
  check_password();
  check_retype_password();
  check_user_exist();

  console.log(error_name);
  console.log(error_email);
  console.log(error_password);
  console.log(error_retype_password);
  console.log(user_exist);


  if(error_name === false && error_email === false &&
     error_password === false && error_retype_password === false && user_exist === false) {
       console.log("sssss");
       //signupSweetAlert();
       return false;
     } else {
       alert("Please fill the form Correctly");
       return false;
     }
   });
});
