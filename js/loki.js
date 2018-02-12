 var points = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 points = db.addCollection('Points');
 points = db.getCollection('Points');
 //points.removeDataOnly()
 if (points.data.length === 0 || points.data.length === null) {
   console.log("points.data.length =  " + points.data.length);
   points.insert({
        Name: "User",
        Email: "Email",
        Password: "Password",
        MainPoints: 0,
        CapitalPoints: 0,
        FlagPoints: 0
      });
   db.saveDatabase();
 } else if (points.data[0].CapitalPoints > 5) {
   points.data[0].CapitalPoints = 0;
 db.saveDatabase();
 };
 });

 let addPoints = () => {
   db.loadDatabase({}, function () {
   points = db.getCollection('Points');
   points.data[0].CapitalPoints = points.data[0].CapitalPoints + score;
   db.saveDatabase();
   });
 }

 var userExist = false;

 let addData = () => {
   db.loadDatabase({}, function () {
   points = db.getCollection('Points');

   for (var i = 0; i < points.data.length; i++) {
     if (document.getElementById("form_name").value == points.data[i].Name) {
      userExist = true;
      }
    }

   if (userExist == true) {
     document.getElementById("name_repeating_message").innerHTML = "Please, enter other name";
     document.getElementById("name_repeating_message").setAttribute("style", "color: #F90A0A");
     console.log("== ");
     db.saveDatabase();
   } else {
     points.insert({
          Name: document.getElementById("form_name").value,
          Email: document.getElementById("form_email").value,
          Password: document.getElementById("form_password").value,
          MainPoints: 0,
          CapitalPoints: 0,
          FlagPoints: 0
        });
     db.saveDatabase();
   }
   });
 }

 let printUsers = () => {
   for (var i = 0; i < points.data.length; i++) {
     console.log(points.data[i].Name);
     console.log(points.data[i].Email);
     console.log(points.data[i].Password);
   }
   };

  printUsers();

  let loginuser = () => {

  }
