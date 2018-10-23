app.get('#aboutSend').addEventListener('click' ,sendToMail);

function sendToMail(){
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
        getFeedback();
    }else{
        pleaseWriteRight('請確實填寫內容')
    }
}

function getFeedback(){
    successOut();
    app.get('#aboutName').value = '';
    app.get('#aboutMail').value = '';
    app.get('#aboutTitle').value = '';
    app.get('#aboutContent').value = '';
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


