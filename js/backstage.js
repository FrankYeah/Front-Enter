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

// 圖片上傳
const mainUploadPic = document.getElementById('mainUploadPic');
const RectanglePic = document.getElementById('RectanglePic');
let squareUrl = '';
let rectangleUrl = '';
let getFile = '';
let getRectangleFile = '';

mainUploadPic.addEventListener("change", function(){
    getFile = this.files[0]
},false);

RectanglePic.addEventListener("change", function(){
    getRectangleFile = this.files[0]
},false);

//貼文送出

mainButton.addEventListener('click',clickButton);

function clickButton(){
        
    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('images/'+getFile.name).put(getFile);
    var uploadTaskRec = storageRef.child('images/'+getRectangleFile.name).put(getRectangleFile);

//方形圖片

    uploadTask.on('state_changed', function(snapshot){
        // 觀察狀態變化，例如：progress, pause, and resume
        // 取得檔案上傳狀態，並用數字顯示

        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'

            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'

            console.log('Upload is running');
            break;
        }
    }, function(error) {
    // Handle unsuccessful uploads

    }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...

    var downloadURL = uploadTask.snapshot.downloadURL;
    console.log(downloadURL)

    var pathReference = storageRef.child('images/'+getFile.name);
    pathReference.getDownloadURL().then(function(url) {
    console.log(url)
    squareUrl = url;
    })
    });

//長方形圖片

    uploadTaskRec.on('state_changed', function(snapshot){
        // 觀察狀態變化，例如：progress, pause, and resume

        // 取得檔案上傳狀態，並用數字顯示

        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'

            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'

            console.log('Upload is running');
            break;
        }
    }, function(error) {
    // Handle unsuccessful uploads

    }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...

    var downloadURL = uploadTaskRec.snapshot.downloadURL;
    console.log(downloadURL)

    var pathReference = storageRef.child('images/'+getRectangleFile.name);
    pathReference.getDownloadURL().then(function(url) {
    console.log(url)
    rectangleUrl = url

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
    creatTime: new Date().getTime()
    });
    alert('貼文已發布')
}