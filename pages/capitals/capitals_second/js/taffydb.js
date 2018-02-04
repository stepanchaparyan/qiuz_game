// ().remove();

var points = TAFFY([
  {
    mainPoints:0,
    capitalPoints:0,
    flagPoint: 0
  },
]);

cities({mainPoints:0}).update({mainPoints:1});
console.log("11111 " + points().get()[0].mainPoints);
console.log("22222 " + points());
console.log("33333 " + points().first().mainPoints);
