const MykeyvisualSpan = document.getElementById('MykeyvisualSpan');
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

// change word value
let articleId = (new URL(document.location)).searchParams.get('id');  //get url id
let getDataFromUrl = database.ref('article');
let getMyUid;
getDataFromUrl.orderByChild('creatTime').equalTo(Number(articleId)).on('child_added', function(snapshot) {
    getMyUid = snapshot.val().uid;
    MykeyvisualSpan.textContent = snapshot.val().name + '(編輯)';
    mainName.value = snapshot.val().name;
    mainCity.value = snapshot.val().city;
    mainSkill.value = snapshot.val().skill;
    mainTechnology.value = snapshot.val().technology;
    mainFee.value = snapshot.val().fee;
    mainTotalDay.value = snapshot.val().totalDay;
    mainWeekHour.value = snapshot.val().weekHour;
    mainFoundYear.value = snapshot.val().foundYear;
    mainTeachWay.value = snapshot.val().teachWay;
    mainClassType.value = snapshot.val().classType;
    mainTeacherNum.value = snapshot.val().teacherNum;
    mainTopic.value = snapshot.val().topic;
    mainPreface.value = snapshot.val().preface;
    mainContent.value = snapshot.val().content;
    mainPhone.value = snapshot.val().phone;
    mainMail.value = snapshot.val().mail;

});  


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

//send the post

mainButton.addEventListener('click',clickButton);

function clickButton(){
        
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child('images/'+getFile.name).put(getFile);
    let uploadTaskRec = storageRef.child('images/'+getRectangleFile.name).put(getRectangleFile);

// square img

    uploadTask.on('state_changed', function(snapshot){
        // detect status：progress, pause, and resume
        // upload status, display by num

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
            // detect status：progress, pause, and resume

            // get upload status, display by num

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
        rectangleUrl = url

        // store all data
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
    firebase.database().ref('article/'+ getMyUid).set({
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
    uid: getMyUid
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
    alertWord.innerHTML = '貼文已更新';
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