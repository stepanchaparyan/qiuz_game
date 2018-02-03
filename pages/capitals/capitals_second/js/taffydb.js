
var cities = TAFFY([
  { name:"New York",
    state:"WA",
    score: 5
  },
  { name:"Las Vegas",
    state:"NV"},
  { name:"Boston",
    state:"MA"}
]);

cities.insert({name:"Portland",state:"OR", score: 10});
cities({name:"New York"}).update({state:"NNNNY"});
console.log((cities({name:"New York"}).first().state));
cities().each(function (r) {console.log(r.name)});
cities.insert({name:"Vanadzor",state:"LORI"});
cities().each(function (r) {console.log(r.name)});
console.log("11111 " + cities().get()[0].score);
console.log("22222 " + cities());
console.log("33333 " + cities().first().name);
var num = 15;
cities({name:"New York"}).update({score: num});
console.log("11111 " + cities().get()[0].score);
