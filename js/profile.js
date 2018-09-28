document.getElementById('logoutTest').onclick = logoutMeOut;

function logoutMeOut(){
    firebase.auth().signOut().then(function() {
        console.log("User sign out!");
        window.location.reload();
    }, function(error) {
    console.log("User sign out error!");
    })
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        userLogin = user;
        if(userLogin.email == "aaa24295234@gmail.com"){
            window.location = 'backstage.html';
            }else{
            }
    } else {
        userLogin = null;
        console.log("User is not logined yet.");
        window.location = 'index.html' ; 
    }
  });

