// create log in layout
headerP3.addEventListener('click', function(){
        // judge if log in or not
        if(userLogin){
            if(userLogin.email == 'aaa24295234@gmail.com'){
                window.location = 'profile.html';
            }else{
                window.location = 'profile.html';
            }
        }else{
            app.log.loginFullDiv();
            app.log.loginDivWhite();
            app.log.loginDivLogo();
            app.log.loginInputDiv();
            app.log.loginInputMail();
            app.log.loginInputCode();
            app.log.loginForgetCode();
            app.log.registerLoginDiv();
            app.log.registerButtonP();
            app.log.loginButtonP();
            app.log.gmailLoginButton();
        }
}
);

app.log.loginFullDiv = function(){
    let newElement = document.createElement('div');
    newElement.className = 'login-full-div';
    newElement.id = 'loginFullDiv';
    document.body.appendChild(newElement);
    newElement.onclick = function(){
        let child=document.getElementById('loginFullDiv');
        document.body.removeChild(child);
    }
}

app.log.loginDivWhite = function(){
    let newElement = document.createElement('div');
    newElement.className = 'login-div-white';
    newElement.id = 'loginDivWhite';
    document.getElementById('loginFullDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

app.log.loginDivLogo = function(){
    let newElement = document.createElement('div');
    newElement.className = 'login-div-logo';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

app.log.loginInputDiv = function(){
    let newElement = document.createElement('div');
    newElement.id = 'loginInputDiv';
    newElement.className = 'login-input-div';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

app.log.loginInputMail = function(){
    let newElement = document.createElement('input');
    newElement.id = 'loginInputMail';
    newElement.className = 'login-input-mail';
    newElement.placeholder = 'Email';
    document.getElementById('loginInputDiv').appendChild(newElement);
}

app.log.loginInputCode = function(){
    let newElement = document.createElement('input');
    newElement.id = 'loginInputCode';
    newElement.className = 'login-input-code';
    newElement.placeholder = '******';
    newElement.type = 'password';
    document.getElementById('loginInputDiv').appendChild(newElement);
}

app.log.loginForgetCode = function(){
    let newElement = document.createElement('p');
    newElement.className = 'login-forget-code';
    newElement.textContent = '忘記密碼？'
    document.getElementById('loginDivWhite').appendChild(newElement);
    newElement.onclick = app.log.judgeForgetCode;
}

app.log.registerLoginDiv = function(){
    let newElement = document.createElement('div');
    newElement.id = 'registerLoginDiv'
    newElement.className = 'register-login-div';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

app.log.registerButtonP = function(){
    let newElement = document.createElement('p');
    newElement.id = 'registerButtonP'
    newElement.className = 'register-button-p';
    newElement.textContent = '註冊';
    document.getElementById('registerLoginDiv').appendChild(newElement);
    newElement.onclick = app.log.createAccount;
}

app.log.loginButtonP = function(){
    let newElement = document.createElement('p');
    newElement.id = 'loginButtonP'
    newElement.className = 'login-button-p';
    newElement.textContent = '登入';
    document.getElementById('registerLoginDiv').appendChild(newElement);
    newElement.onclick = app.log.loginHere;
}

app.log.gmailLoginButton = function(){
    let newElement = document.createElement('p');
    newElement.id = 'gmailLoginButton'
    newElement.className = 'gmail-login-button';
    newElement.textContent = 'Log In With Gmail';
    document.getElementById('loginDivWhite').appendChild(newElement);
    newElement.onclick = app.log.letGmailLogin;
}

// create account
app.log.createAccount = function(){
    let createMail = document.getElementById('loginInputMail').value;
    let createCode = document.getElementById('loginInputCode').value;
    firebase.auth().createUserWithEmailAndPassword(createMail, createCode).then(detectLogin()).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMsg = error.message;
        alertBigBox.style.display = 'flex';
        alertWord.innerHTML = '電子郵件已被註冊';
      });      
}

// log in
app.log.loginHere = function(){
    let userLoginMail = document.getElementById('loginInputMail').value;
    let userLoginCode = document.getElementById('loginInputCode').value;
    firebase.auth().signInWithEmailAndPassword(userLoginMail, userLoginCode).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alertBigBox.style.display = 'flex';
        alertWord.innerHTML = '郵件或密碼輸入錯誤';
    })
    setTimeout(reloadLogin,5000)
}

function reloadLogin(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '重新載入';
    window.location.reload();
}

// detect user log in
let userLogin;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userLogin = user;
    if(userLogin.emailVerified == true){
    // input data
    storeDataToFirebase();
    }else{
        firebase.auth().signOut().then(function() {
        }, function(error) {
        })
    }
  } else {
    userLogin = null;
    headerP3.textContent ='登入';
    headerP3.style.cursor = 'pointer';
    headerP3.addEventListener('mouseenter', changeColor);
    headerP3.addEventListener('mouseleave', changeColorAgain)
    function changeColor(){
        headerP3.style.color = 'rgb(26, 216, 211)';
    }
    function changeColorAgain(){
        headerP3.style.color = 'rgb(128, 128, 128)';
    }
  }
});

// detect log in , write data to database
function storeDataToFirebase(){
    // change user icon
    if(userLogin.photoURL){
        headerP3.style.background = "url('" + userLogin.photoURL + "')"; 
        headerP3.style.backgroundPosition= 'center';
        headerP3.style.backgroundSize= 'cover';
        headerP3.style.backgroundRepeat= 'no-repeat';
        headerP3.style.borderRadius= '50%';
        headerP3.style.height= '40px';
        headerP3.style.width= '40px';
    }else{
        headerP3.textContent = '會員';
    }

    // judge user data have this people
    let getAllMemberData = database.ref('member');
    let dataExist;
    getAllMemberData.orderByChild('mail').equalTo(userLogin.email).on('child_added', function(snapshot) {
        dataExist = snapshot.val();
    });  

    setTimeout(function(){
        if(dataExist == undefined){
            let newPostKey = firebase.database().ref().child('member').push().key;
            firebase.database().ref('member/'+newPostKey).set({
                name: userLogin.displayName,
                mail : userLogin.email,
                phone : userLogin.phoneNumber,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : newPostKey
            });
        }else{
        }
    } ,5000);
}

// create an account, detect login and send a verify mail
function detectLogin(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          userLogin = user;
          user.sendEmailVerification().then(function() {
            alertBigBox.style.display = 'flex';
            alertWord.innerHTML = '驗證信已寄出';
          }, function(error) {
          });
        }else{
          userLogin = null;
        }      
      });
}

// log out
function logoutHere(){
    firebase.auth().signOut().then(function() {
        window.location.reload();
    }, function(error) {
    })
}

// forget code
app.log.judgeForgetCode = function(){
    let userLoginMail = document.getElementById('loginInputMail').value;
    if(userLoginMail == ''){
        alertBigBox.style.display = 'flex';
        alertWord.innerHTML = '請輸入電子郵件後，再次點選「忘記密碼」';
    }else{
        firebase.auth().sendPasswordResetEmail(userLoginMail).then(function() {
            // Email sent.
            alertBigBox.style.display = 'flex';
            alertWord.innerHTML = '更改密碼 Email 已發送';
            userLoginMail = '';
          }, function(error) {
            // An error happened.
          });
    }
}

// google log in
let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'pt';
app.log.letGmailLogin = function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        setTimeout(reloadLogin,1000)
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}