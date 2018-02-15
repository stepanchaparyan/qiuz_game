let loadFunction = () => {
  document.getElementById('point').innerHTML = info.data[info.data.length-1].CapitalPoints;
  document.getElementById('name').innerHTML = info.data[info.data.length-1].Name;
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
