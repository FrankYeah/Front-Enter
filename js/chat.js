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

app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading

setTimeout(letLoadingNone, 1000)
function letLoadingNone(){
    app.loading();
}