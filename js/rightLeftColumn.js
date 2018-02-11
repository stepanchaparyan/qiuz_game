let loadFunction = () => {
  document.getElementById('point').innerHTML = points.data[0].CapitalPoints;
  document.getElementById('name').innerHTML = points.data[0].Name;
  console.log(points.data[0].Name);
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
