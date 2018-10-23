const mainButton = document.getElementById('mainButton');
const mainName = document.getElementById('mainName');
const mainCity = document.getElementById('mainCity');
const mainSkill = document.getElementById('mainSkill');
const mainTechnology = document.getElementById('mainTechnology');
const mainFee = document.getElementById('mainFee');
const mainTotalDay = document.getElementById('mainTotalDay');
const mainWeekHour = document.getElementById('mainWeekHour');
const mainFoundYear = document.getElementById('mainFoundYear');
const mainTeachWay = document.getElementById('mainTeachWay');
const mainClassType = document.getElementById('mainClassType');
const mainTeacherNum = document.getElementById('mainTeacherNum');
const mainTopic = document.getElementById('mainTopic');
const mainPreface = document.getElementById('mainPreface');
const mainContent = document.getElementById('mainContent');
const mainPhone = document.getElementById('mainPhone');
const mainMail = document.getElementById('mainMail');

// upload img
const mainUploadPic = document.getElementById('mainUploadPic');
const RectanglePic = document.getElementById('RectanglePic');
let squareUrl = '';
let rectangleUrl = '';
let getFile = '';
let getRectangleFile = '';

mainUploadPic.addEventListener('change', function(){
    getFile = this.files[0]
},false);

RectanglePic.addEventListener('change', function(){
    getRectangleFile = this.files[0]
},false);

// set the post

mainButton.addEventListener('click',clickButton);

function clickButton(){
        
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child('images/'+getFile.name).put(getFile);
    let uploadTaskRec = storageRef.child('images/'+getRectangleFile.name).put(getRectangleFile);

// square photo

    uploadTask.on('state_changed', function(snapshot){
        // observe status：progress, pause, and resume
        // get upload status and display by number

        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            break;
        }
    }, function(error) {
    // Handle unsuccessful uploads

    }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...

    let downloadURL = uploadTask.snapshot.downloadURL;
    let pathReference = storageRef.child('images/'+getFile.name);
    pathReference.getDownloadURL().then(function(url) {
    squareUrl = url;
    callRetangle()
    })
    });

// rectangle img
    function callRetangle(){
        
        uploadTaskRec.on('state_changed', function(snapshot){
            // observe status：progress, pause, and resume
            // get upload status and display by num

            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                break;
            }
        }, function(error) {
        // Handle unsuccessful uploads

        }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        let downloadURL = uploadTaskRec.snapshot.downloadURL;
        let pathReference = storageRef.child('images/'+getRectangleFile.name);
        pathReference.getDownloadURL().then(function(url) {
        rectangleUrl = url;

        //存入所有資料
        let newPostKey = firebase.database().ref().child('article').push().key;
        let name = mainName.value;
        let city = mainCity.value;
        let skill = mainSkill.value;
        let technology = mainTechnology.value;
        let fee = mainFee.value;
        let totalDay = mainTotalDay.value;
        let weekHour = mainWeekHour.value;
        let foundYear = mainFoundYear.value;
        let teachWay =  mainTeachWay.value;
        let classType = mainClassType.value;
        let teacherNum = mainTeacherNum.value;
        let topic = mainTopic.value;
        let preface = mainPreface.value;
        let content = mainContent.value;
        let phone = mainPhone.value;
        let mail = mainMail.value;
        let sUrl = squareUrl;
        let rUrl = rectangleUrl;
        writePost(newPostKey, name, city, skill, technology, fee, totalDay, weekHour,foundYear,
                teachWay, classType, teacherNum, topic, preface, content, phone, mail, sUrl, rUrl);

        })
        });

    }
}

function writePost(newPostKey, name, city, skill, technology, fee, totalDay, weekHour,foundYear,
                   teachWay, classType, teacherNum, topic, preface, content, phone, mail, sUrl, rUrl) {
    firebase.database().ref('article/'+newPostKey).set({
    name: name,
    city: city,
    skill: skill,
    technology: technology,
    fee: fee,
    totalDay: totalDay,
    weekHour: weekHour,
    foundYear: foundYear,
    teachWay: teachWay,
    classType:classType,
    teacherNum:teacherNum,
    topic:topic,
    preface: preface,
    content: content,
    phone: phone,
    mail: mail,
    rectangleUrl: rUrl,
    squareUrl : sUrl,
    creatTime: new Date().getTime(),
    uid: newPostKey
    });
    postAlreadyOut();
}

// log out

document.getElementById('logoutTest').onclick = logMeOut;

function logMeOut(){
    firebase.auth().signOut().then(function() {
        window.location.reload();
    }, function(error) {

    })
}

// set log in auth

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userLogin = user;
    if(userLogin.email == 'aaa24295234@gmail.com' || userLogin.email == 'frontenter2018@gmail.com'){
    }else{
        window.location = 'profile.html';
    }
  } else {
    userLogin = null;
    window.location = 'index.html' ; 
  }
});

//alert

function postAlreadyOut(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '貼文已發布';
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
    setTimeout(displayNoneLoading, 600);
    function displayNoneLoading(){
        loadingAnimation.style.display = 'none';
    }
}