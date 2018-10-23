// upload img
let squareUrl = '';
let rectangleUrl = '';
let getFile = '';
let getRectangleFile = '';
app.get("#mainUploadPic").addEventListener('change', function(){
    getFile = this.files[0]
},false);
app.get("#RectanglePic").addEventListener('change', function(){
    getRectangleFile = this.files[0]
},false);

// set the post

app.get("#mainButton").addEventListener('click',clickButton);
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
        let name = app.get("#mainName").value;
        let city = app.get("#mainCity").value;
        let skill = app.get("#mainSkill").value;
        let technology = app.get("#mainTechnology").value;
        let fee = app.get("#mainFee").value;
        let totalDay = app.get("#mainTotalDay").value;
        let weekHour = app.get("#mainWeekHour").value;
        let foundYear = app.get("#mainFoundYear").value;
        let teachWay =  app.get("#mainTeachWay").value;
        let classType = app.get("#mainClassType").value;
        let teacherNum = app.get("#mainTeacherNum").value;
        let topic = app.get("#mainTopic").value;
        let preface = app.get("#mainPreface").value;
        let content = app.get("#mainContent").value;
        let phone = app.get("#mainPhone").value;
        let mail = app.get("#mainMail").value;
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
    app.get("#alertBigBox").style.display = 'flex';
    app.get("#alertWord").innerHTML = '貼文已發布';
}

// log out
app.get('#logoutTest').onclick = function (){
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
app.get("#alertBigBox").style.display = 'none';
app.get("#alertButton").addEventListener('click', ()=>{
    app.get("#alertBigBox").style.display = 'none';
});

// close loading
setTimeout(function(){
    loadingAnimation.style.height = '0px';
    loadingAnimation.style.opacity = '0.9';
    loadingDrawing.style.height = '0px';
    loadingDrawing.style.opacity = '0.9';
    loadingImg.style.marginBottom = '-1000px';
    header.style.animation = 'headerGoUp 0.9s ease 0s 1 alternate';
    myAside.style.animation = 'asideBottom 0.9s ease 0s 1 alternate';
    setTimeout(function(){
        loadingAnimation.style.display = 'none';
    }
    , 600);
}
, 1000)