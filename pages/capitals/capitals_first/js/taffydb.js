function startTaffy() {

var points = TAFFY([
  {
    mainPoints:0,
    capitalPoints:5,
    gamePoints:0,
    flagPoint: 0
  },
]);


points().update({capitalPoints:15});

console.log("11111 " + points().get()[0].capitalPoints);
console.log("33333 " + points().first().capitalPoints);
}
