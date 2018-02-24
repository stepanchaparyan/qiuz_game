 var info = [];
 var currentUser = [];
 var button = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 info = db.getCollection('Info');
 currentUser = db.addCollection('currentUser');
 currentUser = db.getCollection('currentUser');
 button = db.addCollection('Button');
 button = db.getCollection('Button');
 //info.removeDataOnly()
 //currentUser.removeDataOnly()
 //button.removeDataOnly()
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
      currentUserName: "user",
      currentUserNumber: 0
   });
   button.insert({
      disabled: "",
      user: ""
   });
   db.saveDatabase();
 }
 });

 let addPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints += score;
   db.saveDatabase();
   console.log("points " + info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints);
   });
 }

 let resetPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints = 0;
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

  db.loadDatabase({}, function () {
  button = db.getCollection('Button');
  button.removeDataOnly();
  db.saveDatabase();
  })

 }

 let addDisabled = (continent) => {
  db.loadDatabase({}, function () {
  button = db.getCollection('Button');
  var user = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
  console.log(user);
  if (continent == "asia") {
     button.insert({
       disabled: "asia",
       currentUser: user
     });
  } else if (continent == "africa") {
     button.insert({
       disabled: "africa",
       currentUser: user
     });
  } else if (continent == "europe") {
     button.insert({
      disabled: "europe",
      currentUser: user
     });
  } else if (continent == "oceania") {
     button.insert({
       disabled: "oceania",
       currentUser: user
     });
  } else if (continent == "world") {
     button.insert({
       disabled: "world",
       currentUser: user
     });
  } else if (continent == "americas") {
     button.insert({
       disabled: "americas",
       currentUser: user
     });
  }
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
