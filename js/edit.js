// change word value
let articleId = (new URL(document.location)).searchParams.get('id');  //get url id
let getDataFromUrl = database.ref('article');
let getMyUid;
getDataFromUrl.orderByChild('creatTime').equalTo(Number(articleId)).on('child_added', function(snapshot) {
    getMyUid = snapshot.val().uid;
    app.get('#MykeyvisualSpan').textContent = snapshot.val().name + '(編輯)';
    app.get('#mainName').value = snapshot.val().name;
    app.get('#mainCity').value = snapshot.val().city;
    app.get('#mainSkill').value = snapshot.val().skill;
    app.get('#mainTechnology').value = snapshot.val().technology;
    app.get('#mainFee').value = snapshot.val().fee;
    app.get('#mainTotalDay').value = snapshot.val().totalDay;
    app.get('#mainWeekHour').value = snapshot.val().weekHour;
    app.get('#mainFoundYear').value = snapshot.val().foundYear;
    app.get('#mainTeachWay').value = snapshot.val().teachWay;
    app.get('#mainClassType').value = snapshot.val().classType;
    app.get('#mainTeacherNum').value = snapshot.val().teacherNum;
    app.get('#mainTopic').value = snapshot.val().topic;
    app.get('#mainPreface').value = snapshot.val().preface;
    app.get('#mainContent').value = snapshot.val().content;
    app.get('#mainPhone').value = snapshot.val().phone;
    app.get('#mainMail').value = snapshot.val().mail;
});  

// upload img
let squareUrl = '';
let rectangleUrl = '';
let getFile = '';
let getRectangleFile = '';
app.get('#mainUploadPic').addEventListener('change', function(){
    getFile = this.files[0]
},false);

app.get('#RectanglePic').addEventListener('change', function(){
    getRectangleFile = this.files[0]
},false);

//send the post
app.get('#mainButton').addEventListener('click',clickButton);

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
        let name = app.get('#mainName').value;
        let city = app.get('#mainCity').value;
        let skill = app.get('#mainSkill').value;
        let technology = app.get('#mainTechnology').value;
        let fee = app.get('#mainFee').value;
        let totalDay = app.get('#mainTotalDay').value;
        let weekHour = app.get('#mainWeekHour').value;
        let foundYear = app.get('#mainFoundYear').value;
        let teachWay =  app.get('#mainTeachWay').value;
        let classType = app.get('#mainClassType').value;
        let teacherNum = app.get('#mainTeacherNum').value;
        let topic = app.get('#mainTopic').value;
        let preface = app.get('#mainPreface').value;
        let content = app.get('#mainContent').value;
        let phone = app.get('#mainPhone').value;
        let mail = app.get('#mainMail').value;
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
    app.get('#alertBigBox').style.display = 'flex';
    app.get('#alertWord').innerHTML = '貼文已更新';
}

// log out
document.getElementById('logoutTest').onclick =function(){
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
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(function(){
    app.loading();
}, 1000)