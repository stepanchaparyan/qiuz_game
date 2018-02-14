let loadFunction = () => {
  document.getElementById('point').innerHTML = info.data[0].CapitalPoints;
  document.getElementById('name').innerHTML = info.data[0].Name;
  console.log(info.data[0].Name);
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
