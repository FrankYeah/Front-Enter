// detect log in

firebase.auth().onAuthStateChanged(function(user) {
    // Once authenticated, instantiate Firechat with the logged in user
    if (user) {
      initChat(user);

    }
  });


  function initChat(user) {
    // Get a Firebase Database ref
    var chatRef = firebase.database().ref('chat');

    // Create a Firechat instance
    var chat = new FirechatUI(chatRef, app.get('#firechat-wrapper'));

    // Set the Firechat user
    chat.setUser(user.uid, user.displayName);
  }




// alert 

function successOut(){
    app.get('#alertBigBox').style.display = 'flex';
    app.get('#alertWord').innerHTML = '成功送出，我們會盡快回覆您！';
}

function pleaseWriteRight(){
    app.get('#alertBigBox').style.display = 'flex';
    app.get('#alertWord').innerHTML = '請確實輸入資料';
}

app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading

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