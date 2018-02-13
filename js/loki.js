 var info = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 info = db.getCollection('Info');
 //info.removeDataOnly()
 if (info.data.length === 0 || info.data.length === null) {
   console.log("info.data.length =  " + info.data.length);
   info.insert({
        Name: "User",
        Email: "Email",
        Password: "Password",
        MainPoints: 0,
        CapitalPoints: 0,
        FlagPoints: 0
      });
   db.saveDatabase();
 } else if (info.data[0].CapitalPoints > 5) {
   info.data[0].CapitalPoints = 0;
 db.saveDatabase();
 };
 });

 let addPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.data[0].CapitalPoints = info.data[0].CapitalPoints + score;
   db.saveDatabase();
   });
 }

 var userExist = false;

 let addData = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');

   for (var i = 0; i < info.data.length; i++) {
     if (document.getElementById("form_name").value == info.data[i].Name) {
      userExist = true;
      }
    }

   if (userExist == true) {
     document.getElementById("name_repeating_message").innerHTML = "Please, enter other name";
     document.getElementById("name_repeating_message").setAttribute("style", "color: #F90A0A");
     console.log("== ");
     db.saveDatabase();
   } else {
     info.insert({
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
   for (var i = 0; i < info.data.length; i++) {
     console.log(info.data[i].Name);
     console.log(info.data[i].Email);
     console.log(info.data[i].Password);
   }
   };

  printUsers();

  let loginuser = () => {

  }
