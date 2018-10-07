// 個人資料

const displayResult = document.getElementById('displayResult');
const inputName = document.getElementById('inputName');
const inputMail = document.getElementById('inputMail');
const inputPhoto = document.getElementById('inputPhoto');
const fixData = document.getElementById('fixData');
const confirmCancel = document.getElementById('confirmCancel');
const makeConfirm = document.getElementById('makeConfirm');
const makeCancel = document.getElementById('makeCancel');
const managePost = document.getElementById('managePost');


window.onload = function(){
    inputName.value = userLogin.displayName;
    inputMail.value = userLogin.email;
    if(userLogin.photoURL){
        inputPhoto.style.background = "url('" + userLogin.photoURL + "')";
    }
    inputPhoto.style.backgroundPosition= 'center';
    inputPhoto.style.backgroundSize= 'cover';
    inputPhoto.style.backgroundRepeat= 'no-repeat';
    if(userLogin.email == 'aaa24295234@gmail.com'){
        managePost.style.display = 'block';
    }
}

fixData.addEventListener('click', startFix);
makeConfirm.addEventListener('click', startConfirm);
makeCancel.addEventListener('click', startCancel);

function startFix(){
    inputName.disabled = false;
    // inputMail.disabled = false;
    inputPhone.disabled = false;
    inputName.style.backgroundColor = 'white';
    // inputMail.style.backgroundColor = 'white';
    inputPhone.style.backgroundColor = 'white';
    // inputPhone.style.borderTop = '1px solid rgba(230, 230, 230, 0.8)';
    console.log('abled')
    fixData.style.display = 'none';
    confirmCancel.style.display = 'flex';
}

function startConfirm(){
    // disable
    inputName.disabled = true;
    // inputMail.disabled = true;
    inputPhone.disabled = true;
    inputName.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    // inputMail.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.borderTop = '0px solid rgba(230, 230, 230, 0.8)';
    // 顯示修改資料 
    fixData.style.display = 'block';
    confirmCancel.style.display = 'none';
    confirmAllDataChange();
}

function startCancel(){
    // disable
    inputName.disabled = true;
    // inputMail.disabled = true;
    inputPhone.disabled = true;
    inputName.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    // inputMail.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.borderTop = '0px solid rgba(230, 230, 230, 0.8)';
    // 顯示修改資料 
    fixData.style.display = 'block';
    confirmCancel.style.display = 'none';
}

//登出功能

document.getElementById('logoutTest').onclick = logoutMeOut;

function logoutMeOut(){
    firebase.auth().signOut().then(function() {
        console.log("User sign out!");
        window.location.reload();
    }, function(error) {
    console.log("User sign out error!");
    })
}

//設定登入權限

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        userLogin = user;
        if(userLogin.email == "aaa24295234@gmail.com"){
            }else{
                // window.location = 'profile.html';
            }
    } else {
        userLogin = null;
        console.log("User is not logined yet.");
        window.location = 'index.html' ; 
    }
  });

// alert 

function confirmAllDataChange(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '資料修改成功';
}

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});