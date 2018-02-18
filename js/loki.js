 var info = [];
 var currentUser = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 currentUser = db.addCollection('currentUser');
 info = db.getCollection('Info');
 currentUser = db.getCollection('currentUser');
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
   currentUser.insert({
      currentUserName: "currentUserName",
      currentUserNumber: 0
   });
   db.saveDatabase();
 } else if (info.data[info.data.length-1].CapitalPoints > 5) {
   info.data[info.data.length-1].CapitalPoints = 0;
 db.saveDatabase();
 };
 });

 let addPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints += score;
   db.saveDatabase();
   });
 }

 let addUser = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.insert({
      Name: document.getElementById("form_name").value,
      Email: document.getElementById("form_email").value,
      Password: document.getElementById("form_password").value,
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0
    });
  db.saveDatabase();
  })
  signupSweetAlert();
  window.open('indexCapital1.html')
  };

  let findUserName = () => {
    userName = document.getElementById("form_login_name").value;
    for (var i = 0; i < info.data.length; i++) {
      if (userName == info.data[i].Name) {
        userNumber = i;
        break;
      }
    }
  }

 let loginCurrentUser = () => {
   findUserName();
   db.loadDatabase({}, function () {
   currentUser = db.getCollection('currentUser');
   currentUser.insert({
     currentUserName: userName,
     currentUserNumber: userNumber
    });
  db.saveDatabase();
  })
 }

 let printUsers = () => {
   for (var i = 0; i < info.data.length; i++) {
     console.log(info.data[i].Name);
     console.log(info.data[i].Email);
     console.log(info.data[i].Password);
   }
   };

  printUsers();
