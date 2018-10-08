// 抓 firebase 資料庫 json 資料

let x = 0;
let articleId = (new URL(document.location)).searchParams.get("id");  //取得url的id
let getAllData = database.ref("article");
let data;
getAllData.orderByChild("creatTime").equalTo(Number(articleId)).on("child_added", function(snapshot) {
    data = snapshot.val();
    createLayout(data);
});

function createLayout(data){
    keyvisualBorn(data);
    mainChartBorn();

    imageLeftOne();
    imageLeftTwo();
    imageLeftThree();

    // mainUnderlineBorn();
    // preCityBorn();
    // tagCityBorn(data);
    // preSkillBorn();
    // tagSkillBorn(data);
    // preTechnologyBorn();
    // tagTechnologyBorn(data);
    // preFeeBorn();
    // tagFeeBorn(data);
    // preTotalDayBorn();
    // tagTotalDayBorn(data);
    // preWeekHourBorn();
    // tagWeekHourBorn(data);
    // preFoundYearBorn();
    // tagFoundYearBorn(data);
    // preTeachWayBorn();
    // tagTeachWayBorn(data);
    // preClassTypeBorn();
    // tagClassTypeBorn(data);
    // preTeacherNumBorn();
    // tagTeacherNumBorn(data);

    mainContentBorn();
    mainHeaderBorn(data);
    // mainContentHeaderBorn();
    mainContentTitleBorn(data);
    coreContentBorn(data);

    boxTitle(data);
    mainUnderlineBorn();
    boxTable();
    boxtableOne();
    tableOneLeft();
    tableOneRight(data);
    boxtableTwo();
    tableTwoLeft();
    tableTwoRight(data);
    boxtableThree();
    tableThreeLeft();
    tableThreeRight(data);
    boxtableFour();
    tableFourLeft();
    tableFourRight(data);
    boxtableFive();
    tableFiveLeft();
    tableFiveRight(data);
    boxtableSix();
    tableSixLeft();
    tableSixRight(data);
    // contactPhoneBorn(data);
    // contactMailBorn(data);
}

function keyvisualBorn(data){
    document.getElementById('section').style.background  =  "url('" + data.rectangleUrl + "')"; 
    document.getElementById('section').style.backgroundRepeat  =  "no-repeat";  
    document.getElementById('section').style.backgroundSize  =  "cover";
    document.getElementById('section').style.backgroundPositionY  =  "center";
}

function mainChartBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'mainChart';
    newElement.className = 'main-chart';
    document.getElementById('mainId').appendChild(newElement);
}

function imageLeftOne(data){
    let newElement = document.createElement('div');
    newElement.className = 'image-left image-left-one';
    document.getElementById('mainChart').appendChild(newElement);
    newElement.onclick = function(){
        rotateRotate = 0;
        // let oneUrl = '../images/2.jpg';
        let oneUrl = '../Front-Enter/images/2.jpg';
        rotateImg(oneUrl);
    }
}

function imageLeftTwo(data){
    let newElement = document.createElement('div');
    newElement.className = 'image-left image-left-two';
    document.getElementById('mainChart').appendChild(newElement);
    newElement.onclick = function(){
        rotateRotate = 1;
        // let twoUrl = '../images/13.jpg';
        let twoUrl = '../Front-Enter/images/13.jpg';
        rotateImg(twoUrl);
    }
}

function imageLeftThree(data){
    let newElement = document.createElement('div');
    newElement.className = 'image-left image-left-three';
    document.getElementById('mainChart').appendChild(newElement);
    newElement.onclick = function(){
        rotateRotate = 2; 
        // let threeUrl = '../images/15.jpg';
        let threeUrl = '../Front-Enter/images/15.jpg';
        rotateImg(threeUrl);
    }
}

function rotateImg(url){
    rotateBackFull();
    rotateLeftArrow();
    rotateCenterImg(url)
    rotateRightArrow();
}

function rotateBackFull(){
    let newElement = document.createElement('div');
    newElement.className = 'rotate-back-full';
    newElement.id = 'rotateBackFull';
    document.body.appendChild(newElement);
    newElement.onclick = deleteRotateFull;
}

function rotateCenterImg(url){
    console.log(url);
    let newElement = document.createElement('div');
    newElement.className = 'rotate-center-img';
    newElement.id = 'rotateCenterImg';
    newElement.style.background = "url('" + url + "')";
    newElement.style.backgroundRepeat  =  "no-repeat";  
    newElement.style.backgroundSize  =  "cover";
    newElement.style.backgroundPositionX = 'center';
    document.getElementById('rotateBackFull').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

function rotateRightArrow(){
    let newElement = document.createElement('div');
    newElement.className = 'rotate-right-arrow';
    newElement.id = 'rotateRightArrow';
    document.getElementById('rotateBackFull').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
        startRight();
    }
}

function rotateLeftArrow(){
    let newElement = document.createElement('div');
    newElement.className = 'rotate-left-arrow';
    newElement.id = 'rotateLeftArrow';
    document.getElementById('rotateBackFull').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
        startLeft();
    }
}

let rotateRotate = 0 ;

function startLeft(){
    if(rotateRotate==0){
        rotateRotate = 2;
    }else if(rotateRotate==1){
        rotateRotate = 0;
    }else if(rotateRotate==2){
        rotateRotate = 1;
    }
    const rotateCenterImg = document.getElementById('rotateCenterImg');
    let rImg = ['../Front-Enter/images/2.jpg', '../Front-Enter/images/13.jpg', '../Front-Enter/images/15.jpg'];
    // let rImg = ['../images/2.jpg', '../images/13.jpg', '../images/15.jpg'];
    rotateCenterImg.style.background = "url('" + rImg[rotateRotate] + "')"; 
    rotateCenterImg.style.backgroundRepeat  =  "no-repeat";  
    rotateCenterImg.style.backgroundSize  =  "cover";
    rotateCenterImg.style.backgroundPositionX = 'center';

}

function startRight(){
    if(rotateRotate==0){
        rotateRotate = 1;
    }else if(rotateRotate==1){
        rotateRotate = 2;
    }else if(rotateRotate==2){
        rotateRotate = 0;
    }
    let rImg = ['../Front-Enter/images/2.jpg', '../Front-Enter/images/13.jpg', '../Front-Enter/images/15.jpg'];
    // let rImg = ['../images/2.jpg', '../images/13.jpg', '../images/15.jpg'];
    const rotateCenterImg = document.getElementById('rotateCenterImg');
    rotateCenterImg.style.background = "url('" + rImg[rotateRotate] + "')";  

    rotateCenterImg.style.backgroundRepeat  =  "no-repeat";  
    rotateCenterImg.style.backgroundSize  =  "cover";
    rotateCenterImg.style.backgroundPositionX = 'center';
    
}

function deleteRotateFull(){
    let anotherChild=document.getElementById("rotateBackFull");
    document.body.removeChild(anotherChild);
}

// 左邊

function preCityBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '學習城市/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagCityBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.city;
    document.getElementById('mainChart').appendChild(newElement);
}

function preSkillBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '技能/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagSkillBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.skill;
    document.getElementById('mainChart').appendChild(newElement);
}

function preTechnologyBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '技術/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTechnologyBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.style.lineHeight = '28px';
    newElement.textContent = data.technology;
    document.getElementById('mainChart').appendChild(newElement);
}

function preFeeBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '費用/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagFeeBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = '新台幣 ' + data.fee + ' 元 / 月';
    document.getElementById('mainChart').appendChild(newElement);
}

function preTotalDayBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '課程天數/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTotalDayBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.totalDay + ' 天';
    document.getElementById('mainChart').appendChild(newElement);
}

function preWeekHourBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '每周時數/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagWeekHourBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.weekHour + ' 小時';
    document.getElementById('mainChart').appendChild(newElement);
}

function preFoundYearBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '創辦/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagFoundYearBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.foundYear + ' 年';
    document.getElementById('mainChart').appendChild(newElement);
}

function preTeachWayBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '教學方式/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTeachWayBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.teachWay;
    document.getElementById('mainChart').appendChild(newElement);
}

function preClassTypeBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '班類/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagClassTypeBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.classType;
    document.getElementById('mainChart').appendChild(newElement);
}

function preTeacherNumBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '導師數/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTeacherNumBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.teacherNum + ' 名';
    document.getElementById('mainChart').appendChild(newElement);
}

// 右邊

function mainContentBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'mainContent';
    newElement.className = 'main-content';
    document.getElementById('mainId').appendChild(newElement);
}

function mainHeaderBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-header';
    newElement.textContent = data.name;
    document.getElementById('mainContent').appendChild(newElement);
}

function mainContentHeaderBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-content-header';
    newElement.textContent = '';
    document.getElementById('mainContent').appendChild(newElement);
}

function mainContentTitleBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-content-title';
    newElement.textContent = data.topic;
    document.getElementById('mainContent').appendChild(newElement);
}

function coreContentBorn(data){
    let newElement = document.createElement('p');
    newElement.innerHTML = data.content;
    document.getElementById('mainContent').appendChild(newElement);
}

function boxTitle(data){
    let newElement = document.createElement('p');
    newElement.innerHTML = '整理';
    newElement.className = 'box-title';
    document.getElementById('mainContent').appendChild(newElement);
}

function mainUnderlineBorn(){
    let newElement = document.createElement('div');
    newElement.className = 'main-underline';
    document.getElementById('mainContent').appendChild(newElement);
}

function boxTable(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table';
    newElement.id = 'boxTable';
    document.getElementById('mainContent').appendChild(newElement);
}

function boxtableOne(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableOne';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableOneLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '城市';
    newElement.id = 'tableOneLeft';
    document.getElementById('boxtableOne').appendChild(newElement);
}

function tableOneRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.city;
    newElement.id = 'tableOneRight';
    document.getElementById('boxtableOne').appendChild(newElement);
}

function boxtableTwo(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableTwo';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableTwoLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '班制';
    newElement.id = 'tableTwoLeft';
    document.getElementById('boxtableTwo').appendChild(newElement);
}

function tableTwoRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.classType;
    newElement.id = 'tableTwoRight';
    document.getElementById('boxtableTwo').appendChild(newElement);
}

function boxtableThree(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableThree';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableThreeLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '教法';
    newElement.id = 'tableThreeLeft';
    document.getElementById('boxtableThree').appendChild(newElement);
}

function tableThreeRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.teachWay;
    newElement.id = 'tableThreeRight';
    document.getElementById('boxtableThree').appendChild(newElement);
}

function boxtableFour(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableFour';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableFourLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '天數';
    newElement.id = 'tableFourLeft';
    document.getElementById('boxtableFour').appendChild(newElement);
}

function tableFourRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.totalDay + '天';
    newElement.id = 'tableFourRight';
    document.getElementById('boxtableFour').appendChild(newElement);
}

function boxtableFive(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableFive';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableFiveLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '週時';
    newElement.id = 'tableFiveLeft';
    document.getElementById('boxtableFive').appendChild(newElement);
}

function tableFiveRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.weekHour + '小時';
    newElement.id = 'tableFiveRight';
    document.getElementById('boxtableFive').appendChild(newElement);
}

function boxtableSix(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableSix';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableSixLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '技術';
    newElement.id = 'tableSixLeft';
    document.getElementById('boxtableSix').appendChild(newElement);
}

function tableSixRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.technology;
    newElement.id = 'tableSixRight';
    document.getElementById('boxtableSix').appendChild(newElement);
}

// 聯絡我們

function contactPhoneBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'contact-phone';
    newElement.innerHTML = '<br>'  + data.phone;
    document.getElementById('contact').appendChild(newElement);
}

function contactMailBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'contact-mail';
    newElement.innerHTML = "<br>" + data.mail;
    document.getElementById('contact').appendChild(newElement);
}

// alert 

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});