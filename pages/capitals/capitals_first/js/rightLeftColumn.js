let loadFunction = () => {
  document.getElementById('point').innerHTML = points.data[0].CapitalPoints;
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
