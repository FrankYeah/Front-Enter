
// 建立登入 layout
headerP3.addEventListener('click', createLoginLayout);

function createLoginLayout(){
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
        fbLoginButton();
}

function loginFullDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'login-full-div';
    newElement.id = 'loginFullDiv';
    document.body.appendChild(newElement);
    newElement.onclick = function(){
        let child=document.getElementById("loginFullDiv");
        document.body.removeChild(child);
        let otherChild=document.getElementById("loginDivWhite");
        document.body.removeChild(otherChild);
    }
}

function loginDivWhite(){
    let newElement = document.createElement('div');
    newElement.id = 'loginDivWhite';
    newElement.className = 'login-div-white';
    document.body.appendChild(newElement);
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
    document.getElementById('loginInputDiv').appendChild(newElement);
}

function loginForgetCode(){
    let newElement = document.createElement('p');
    newElement.className = 'login-forget-code';
    newElement.textContent = '忘記密碼？'
    document.getElementById('loginDivWhite').appendChild(newElement);
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
}

function loginButtonP(){
    let newElement = document.createElement('p');
    newElement.id = 'loginButtonP'
    newElement.className = 'login-button-p';
    newElement.textContent = '登入';
    document.getElementById('registerLoginDiv').appendChild(newElement);
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
}

function fbLoginButton(){
    let newElement = document.createElement('p');
    newElement.id = 'fbLoginButton'
    newElement.className = 'fb-login-button';
    newElement.textContent = 'Log In With Facebook';
    document.getElementById('loginDivWhite').appendChild(newElement);
}