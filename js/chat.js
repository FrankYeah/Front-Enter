// 檢測登入

firebase.auth().onAuthStateChanged(function(user) {
    // Once authenticated, instantiate Firechat with the logged in user
    if (user) {
      initChat(user);
      console.log(user)
    }
  });


  function initChat(user) {
    // Get a Firebase Database ref
    var chatRef = firebase.database().ref("chat");

    // Create a Firechat instance
    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

    // Set the Firechat user
    chat.setUser(user.uid, user.displayName);
  }




// alert 

function successOut(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '成功送出，我們會盡快回覆您！';
}

function pleaseWriteRight(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '請確實輸入資料';
}

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});

// 關閉 loading

setTimeout(letLoadingNone, 1000)
function letLoadingNone(){
    loadingAnimation.style.height = '0px';
    loadingAnimation.style.opacity = '0.9';
    loadingDrawing.style.height = '0px';
    loadingDrawing.style.opacity = '0.9';
    loadingImg.style.marginBottom = '-1000px';
    header.style.animation = 'headerGoUp 0.9s ease 0s 1 alternate';
    myAside.style.animation = 'asideBottom 0.9s ease 0s 1 alternate';
    setTimeout(displayNoneLoading, 600)
    function displayNoneLoading(){
        loadingAnimation.style.display = 'none';
    }
}