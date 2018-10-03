// 建立登入 layout
headerP3.addEventListener('click', createLoginLayout);

function createLoginLayout(){
        //判斷是否登入
        if(userLogin){
            if(userLogin.email == "aaa24295234@gmail.com"){
                window.location = 'backstage.html';
            }else{
                window.location = 'profile.html';
            }
        }else{
            console.log('這個人還沒登入過欸')
        }

        loginFullDiv();
        loginDivWhite();
        loginDivLogo();
        loginInputDiv();
        loginInputMail();
        loginInputCode();
        loginForgetCode();
        registerLoginDiv();
        registerButtonP();
        loginButtonP();
        LoginStopLine();
        stopLineLeft();
        stopLineWord();
        stopLineLeft();
        gmailLoginButton();
        // fbLoginButton();
}

function loginFullDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'login-full-div';
    newElement.id = 'loginFullDiv';
    document.body.appendChild(newElement);
    newElement.onclick = function(){
        let child=document.getElementById("loginFullDiv");
        document.body.removeChild(child);
        // let otherChild=document.getElementById("loginDivWhite");
        // document.body.removeChild(otherChild);
    }
}

function loginDivWhite(){
    let newElement = document.createElement('div');
    newElement.id = 'loginDivWhite';
    newElement.className = 'login-div-white';
    document.getElementById('loginFullDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

function loginDivLogo(){
    let newElement = document.createElement('div');
    newElement.className = 'login-div-logo';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

function loginInputDiv(){
    let newElement = document.createElement('div');
    newElement.id = 'loginInputDiv';
    newElement.className = 'login-input-div';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

function loginInputMail(){
    let newElement = document.createElement('input');
    newElement.id = 'loginInputMail';
    newElement.className = 'login-input-mail';
    newElement.placeholder = 'Email';
    document.getElementById('loginInputDiv').appendChild(newElement);
}

function loginInputCode(){
    let newElement = document.createElement('input');
    newElement.id = 'loginInputCode';
    newElement.className = 'login-input-code';
    newElement.placeholder = '******';
    newElement.type = 'password';
    document.getElementById('loginInputDiv').appendChild(newElement);
}

function loginForgetCode(){
    let newElement = document.createElement('p');
    newElement.className = 'login-forget-code';
    newElement.textContent = '忘記密碼？'
    document.getElementById('loginDivWhite').appendChild(newElement);
    newElement.onclick = judgeForgetCode;
}

function registerLoginDiv(){
    let newElement = document.createElement('div');
    newElement.id = 'registerLoginDiv'
    newElement.className = 'register-login-div';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

function registerButtonP(){
    let newElement = document.createElement('p');
    newElement.id = 'registerButtonP'
    newElement.className = 'register-button-p';
    newElement.textContent = '註冊';
    document.getElementById('registerLoginDiv').appendChild(newElement);
    newElement.onclick = createAccount;
}

function loginButtonP(){
    let newElement = document.createElement('p');
    newElement.id = 'loginButtonP'
    newElement.className = 'login-button-p';
    newElement.textContent = '登入';
    document.getElementById('registerLoginDiv').appendChild(newElement);
    newElement.onclick = loginHere;
}

function LoginStopLine(){
    let newElement = document.createElement('div');
    newElement.id = 'LoginStopLine'
    newElement.className = 'Login-stop-line';
    document.getElementById('loginDivWhite').appendChild(newElement);
}

function stopLineLeft(){
    let newElement = document.createElement('div');
    newElement.id = 'stopLineLeft'
    newElement.className = 'stop-line-left';
    document.getElementById('LoginStopLine').appendChild(newElement);
}

function stopLineWord(){
    let newElement = document.createElement('div');
    newElement.id = 'stopLineWord';
    newElement.textContent = 'or';
    newElement.className = 'stop-line-word';
    document.getElementById('LoginStopLine').appendChild(newElement);
}

function gmailLoginButton(){
    let newElement = document.createElement('p');
    newElement.id = 'gmailLoginButton'
    newElement.className = 'gmail-login-button';
    newElement.textContent = 'Log In With Gmail';
    document.getElementById('loginDivWhite').appendChild(newElement);
    newElement.onclick = letGmailLogin;
}

function fbLoginButton(){
    let newElement = document.createElement('p');
    newElement.id = 'fbLoginButton'
    newElement.className = 'fb-login-button';
    newElement.textContent = '登出';
    document.getElementById('loginDivWhite').appendChild(newElement);
    // 假登出
    newElement.onclick = logoutHere;
}

// 建立帳號

function createAccount(){
    let createMail = document.getElementById('loginInputMail').value;
    let createCode = document.getElementById('loginInputCode').value;
    firebase.auth().createUserWithEmailAndPassword(createMail, createCode).then(detectLogin()).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMsg = error.message;
        console.log(errorMsg);
      });      
}

// 登入

function loginHere(){
    let userLoginMail = document.getElementById('loginInputMail').value;
    let userLoginCode = document.getElementById('loginInputCode').value;
    firebase.auth().signInWithEmailAndPassword(userLoginMail, userLoginCode).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert('郵件或密碼輸入錯誤哦!')
    })
    
}

// 監聽使用者是否登入

let userLogin;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userLogin = user;
    if(userLogin.emailVerified == true){
    console.log("User is logined", user)
    }else{
        console.log('尚未驗證此郵件')
        firebase.auth().signOut().then(function() {
            console.log("User sign out!");
        }, function(error) {
        console.log("User sign out error!");
        })
    }
  } else {
    userLogin = null;
    console.log("User is not logined yet.");
  }
});

// 創建帳號後，檢測登入並寄送驗證信

function detectLogin(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          userLogin = user;
          console.log("User is logined", user)
          user.sendEmailVerification().then(function() {
            alert("驗證信寄出");
          }, function(error) {
            console.error("驗證信錯誤");
          });
        } else {
          userLogin = null;
          console.log("User is not logined yet.");
        }      
      });
}

// 登出

function logoutHere(){
    firebase.auth().signOut().then(function() {
        console.log("User sign out!");
        window.location.reload();
    }, function(error) {
    console.log("User sign out error!");
    })
}

// 忘記密碼

function judgeForgetCode(){
    let userLoginMail = document.getElementById('loginInputMail').value;
    if(userLoginMail == ''){
        alert('請輸入電子郵件後，再次點選「忘記密碼」')
    }else{
        firebase.auth().sendPasswordResetEmail(userLoginMail).then(function() {
            // Email sent.
        
            alert("更改密碼 Email 已發送");
            userLoginMail = "";
          }, function(error) {
            // An error happened.
        
            console.error("更改密碼",error);
          });
    }
}

// google 登入

let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'pt';

function letGmailLogin(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
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

