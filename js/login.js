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

$("#login_name_error_message").hide();
$("#login_password_error_message").hide();
$('#loginButton').prop('disabled', true);

function check_login_user_exist() {
  for (var i = 0; i < info.data.length; i++) {
    if ($("#form_login_name").val() == info.data[i].Name && $("#form_login_password").val() == info.data[i].Password) {
      $("#login_name_error_message").hide();
      $("#login_password_error_message").hide();
      $("#form_login_name").css("border-bottom","2px solid #34F458");
      $("#form_login_password").css("border-bottom","2px solid #34F458");
      $('#loginButton').prop('disabled', false);
      break;
    } else {
      $("#login_name_error_message").css("color","#F90A0A");
      $("#login_name_error_message").html("Please, write valid Username");
      $("#login_password_error_message").html("Please, write valid Password");
      $("#login_name_error_message").show();
      $("#login_password_error_message").show();
      $("#form_login_name").css("border-bottom","2px solid #F90A0A");
      $("#login_password_error_message").css("color","#F90A0A");
      $("#form_login_password").css("border-bottom","2px solid #F90A0A");
    }
  }
}

$("#loginbtn").hover(function(){
  check_login_user_exist();
});
});


function loginSweetAlert() {
  console.log("gv");
swal({
  title: "Thank you!",
  text: `You logged as ${info.data[info.data.length-1].Name}`,
  icon: "success",
  button: "OK",
}).then(function() {
  //window.location = "indexCapital1.html";
});
};

let userLogIn = () => {
  console.log("set");
  setTimeout(loginSweetAlert, 1000);
};
