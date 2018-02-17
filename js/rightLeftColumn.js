var userName = "userName";
var userNumber = 0;

let loadFunction = () => {
  document.getElementById('point').innerHTML = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints;
  //document.getElementById('name').innerHTML = info.data[info.data.length-1].Name;
  console.log("name " + currentUser.data[currentUser.data.length-1].currentUserName);
  console.log("number " + currentUser.data[currentUser.data.length-1].currentUserNumber);

  document.getElementById('name').innerHTML = currentUser.data[currentUser.data.length-1].currentUserName;
}

$(document).ready(function(){
$('.bxslider').bxSlider({
  auto: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600,
  responsive: true
});
});
