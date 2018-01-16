//Click on Start Button to set display of .start-page to none,
//and set .quiz-questions display:none to visible
function start() {
  $('.button-style').on('click', function (event) {
      console.log('Hide start page and display questions');
      $('#questions').removeClass("no-display");
      $('#start').addClass("no-display");
//    $('#quiz-nav').removeClass("hide-display");
      console.log('Hide shgvyjbplay questions');

    });
}



$(start);
