const aboutName = document.getElementById('aboutName');
const aboutMail = document.getElementById('aboutMail');
const aboutTitle = document.getElementById('aboutTitle');
const aboutContnet = document.getElementById('aboutContnet');
const aboutSend = document.getElementById('aboutSend');

aboutSend.addEventListener('click' ,sendToMail);

function sendToMail(){
    if(aboutName.value && aboutMail.value && aboutTitle.value && aboutContent.value){
        let newPostKey = firebase.database().ref().child('feedback').push().key;
        firebase.database().ref('feedback/'+newPostKey).set({
            name: aboutName.value,
            mail : aboutMail.value,
            title : aboutTitle.value,
            content : aboutContent.value,
            creatTime: new Date().getTime()
        });
        getFeedback();
    }else{
        alert('請確實填寫內容')
    }
}

function getFeedback(){
    alert('成功送出，我們會盡快回覆您！')
    aboutName.value = '';
    aboutMail.value = '';
    aboutTitle.value = '';
    aboutContent.value = '';
    
}


