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
            uid: newPostKey,
            name: aboutName.value,
            mail : aboutMail.value,
            title : aboutTitle.value,
            content : aboutContent.value,
            creatTime: new Date().getTime()
        });
        getFeedback();
    }else{
        pleaseWriteRight('請確實填寫內容')
    }
}

function getFeedback(){
    successOut();
    aboutName.value = '';
    aboutMail.value = '';
    aboutTitle.value = '';
    aboutContent.value = '';
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