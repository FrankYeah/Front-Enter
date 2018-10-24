app.get('#aboutSend').addEventListener('click' ,function(){
    if(app.get('#aboutName').value && app.get('#aboutMail').value && app.get('#aboutTitle').value && app.get('#aboutContent').value){
        let newPostKey = firebase.database().ref().child('feedback').push().key;
        firebase.database().ref('feedback/'+newPostKey).set({
            uid: newPostKey,
            name: app.get('#aboutName').value,
            mail : app.get('#aboutMail').value,
            title : app.get('#aboutTitle').value,
            content : app.get('#aboutContent').value,
            creatTime: new Date().getTime()
        });
        app.get('#alertBigBox').style.display = 'flex';
        app.get('#alertWord').innerHTML = '成功送出，我們會盡快回覆您！';
        app.get('#aboutName').value = '';
        app.get('#aboutMail').value = '';
        app.get('#aboutTitle').value = '';
        app.get('#aboutContent').value = '';
    }else{
        app.get('#alertBigBox').style.display = 'flex';
        app.get('#alertWord').innerHTML = '請確實輸入資料';
    }
});

// alert 
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(function(){
    app.loading();
}, 1000)