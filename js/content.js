// get firebase json

let x = 0;
let articleId = (new URL(document.location)).searchParams.get('id');  //get url id
let getAllData = database.ref('article');
let data;
getAllData.orderByChild('creatTime').equalTo(Number(articleId)).on('child_added', function(snapshot) {
    data = snapshot.val();
    createLayout(data);
});

function createLayout(data){
    keyvisualBorn(data);
    mainChartBorn();
    imageLeftOne();
    imageLeftTwo();
    imageLeftThree();
    imageLeftFour();
    imageLeftFive();

    mainContentBorn();
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
    boxtableSeven();
    tableSevenLeft();
    tableSevenRight(data);
    boxtableEight();
    tableEightLeft();
    tableEightRight(data);
}

function keyvisualBorn(data){
    document.getElementById('section').style.background  =  "url('" + data.rectangleUrl + "')"; 
    document.getElementById('section').style.backgroundRepeat  =  'no-repeat';  
    document.getElementById('section').style.backgroundSize  =  'cover';
    document.getElementById('section').style.backgroundPositionY  =  'center';
    document.getElementById('keyvisualSpan').textContent = data.name;
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

function imageLeftFour(data){
    let newElement = document.createElement('div');
    newElement.className = 'image-left image-left-four';
    document.getElementById('mainChart').appendChild(newElement);
    newElement.onclick = function(){
        rotateRotate = 3; 
        // let fourUrl = '../images/7.jpg';
        let fourUrl = '../Front-Enter/images/7.jpg';
        rotateImg(fourUrl);
    }
}

function imageLeftFive(data){
    let newElement = document.createElement('div');
    newElement.className = 'image-left image-left-five';
    document.getElementById('mainChart').appendChild(newElement);
    newElement.onclick = function(){
        rotateRotate = 4; 
        // let fiveUrl = '../images/AppWorksShool-rectangle.jpg';
        let fiveUrl = '../Front-Enter/images/AppWorksShool-rectangle.jpg';
        rotateImg(fiveUrl);
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
    let newElement = document.createElement('div');
    newElement.className = 'rotate-center-img';
    newElement.id = 'rotateCenterImg';
    newElement.style.background = "url('" + url + "')";
    newElement.style.backgroundRepeat  =  'no-repeat';  
    newElement.style.backgroundSize  =  'cover';
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
        rotateRotate = 4;
    }else if(rotateRotate==4){
        rotateRotate = 3;
    }else if(rotateRotate==3){
        rotateRotate = 2;
    }else if(rotateRotate==2){
        rotateRotate = 1;
    }else if(rotateRotate==1){
        rotateRotate = 0;
    }
    let rImg = ['../Front-Enter/images/2.jpg', '../Front-Enter/images/13.jpg', '../Front-Enter/images/15.jpg'
    , '../Front-Enter/images/7.jpg', '../Front-Enter/images/AppWorksShool-rectangle.jpg'
];
    // let rImg = ['../images/2.jpg', '../images/13.jpg', '../images/15.jpg', '../images/7.jpg', '../images/AppWorksShool-rectangle.jpg'];
    app.get("#rotateCenterImg").style.background = "url('" + rImg[rotateRotate] + "')"; 
    app.get("#rotateCenterImg").style.backgroundRepeat  =  'no-repeat';  
    app.get("#rotateCenterImg").style.backgroundSize  =  'cover';
    app.get("#rotateCenterImg").style.backgroundPositionX = 'center';

}

function startRight(){
    if(rotateRotate==0){
        rotateRotate = 1;
    }else if(rotateRotate==1){
        rotateRotate = 2;
    }else if(rotateRotate==2){
        rotateRotate = 3;
    }else if(rotateRotate==3){
        rotateRotate = 4;
    }else if(rotateRotate==4){
        rotateRotate = 0;
    }
    let rImg = ['../Front-Enter/images/2.jpg', '../Front-Enter/images/13.jpg'
    , '../Front-Enter/images/15.jpg', '../Front-Enter/images/7.jpg', '../Front-Enter/images/AppWorksShool-rectangle.jpg'];
    // let rImg = ['../images/2.jpg', '../images/13.jpg', '../images/15.jpg', '../images/7.jpg', '../images/AppWorksShool-rectangle.jpg'];
    app.get("#rotateCenterImg").style.background = "url('" + rImg[rotateRotate] + "')";  
    app.get("#rotateCenterImg").style.backgroundRepeat  =  'no-repeat';  
    app.get("#rotateCenterImg").style.backgroundSize  =  'cover';
    app.get("#rotateCenterImg").style.backgroundPositionX = 'center';
    
}

function deleteRotateFull(){
    let anotherChild=document.getElementById('rotateBackFull');
    document.body.removeChild(anotherChild);
}

// right

function mainContentBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'mainContent';
    newElement.className = 'main-content';
    document.getElementById('mainId').appendChild(newElement);
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

function boxtableSeven(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableSeven';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableSevenLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '信箱';
    newElement.id = 'tableSevenLeft';
    document.getElementById('boxtableSeven').appendChild(newElement);
}

function tableSevenRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.mail;
    newElement.id = 'tableSevenRight';
    document.getElementById('boxtableSeven').appendChild(newElement);
}

function boxtableEight(){
    let newElement = document.createElement('div');
    newElement.className = 'box-table-one';
    newElement.id = 'boxtableEight';
    document.getElementById('boxTable').appendChild(newElement);
}

function tableEightLeft(){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-left';
    newElement.textContent = '電話';
    newElement.id = 'tableEightLeft';
    document.getElementById('boxtableEight').appendChild(newElement);
}

function tableEightRight(data){
    let newElement = document.createElement('div');
    newElement.className = 'table-one-right';
    newElement.textContent = data.phone;
    newElement.id = 'tableEightRight';
    document.getElementById('boxtableEight').appendChild(newElement);
}

// alert 

app.get("#alertBigBox").style.display = 'none';
app.get("#alertButton").addEventListener('click', ()=>{
    app.get("#alertBigBox").style.display = 'none';
});

// close loading

setTimeout(letLoadingNone, 1500)
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