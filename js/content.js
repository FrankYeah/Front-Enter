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
    app.get('#section').style.background  =  "url('" + data.rectangleUrl + "') 50% / cover no-repeat"; 
    app.get('#keyvisualSpan').textContent = data.name;
    app.get('#mainContentTitle').textContent = data.topic;
    app.get('#mainContentText').innerHTML = data.content;
    app.get('#rightCity').innerHTML = data.city;
    app.get('#rightClass').innerHTML = data.classType;
    app.get('#rightTeach').innerHTML = data.teachWay;
    app.get('#rightDay').innerHTML = data.totalDay + '天';
    app.get('#rightWeek').innerHTML = data.weekHour + '小時';
    app.get('#rightTech').innerHTML = data.technology;
    app.get('#rightMail').innerHTML = data.mail;
    app.get('#rightPhone').innerHTML = data.phone;
}

app.get('#imageLeftOne').addEventListener('click', function(){
    rotateRotate = 0;
    // let oneUrl = '../images/2.jpg';
    let oneUrl = '../Front-Enter/images/2.jpg';
    rotateImg(oneUrl);
})

app.get('#imageLeftTwo').addEventListener('click', function(){
    rotateRotate = 1;
    // let twoUrl = '../images/13.jpg';
    let twoUrl = '../Front-Enter/images/13.jpg';
    rotateImg(twoUrl);
})

app.get('#imageLeftThree').addEventListener('click', function(){
    rotateRotate = 2; 
    // let threeUrl = '../images/15.jpg';
    let threeUrl = '../Front-Enter/images/15.jpg';
    rotateImg(threeUrl);
})

app.get('#imageLeftFour').addEventListener('click', function(){
    rotateRotate = 3; 
    // let fourUrl = '../images/7.jpg';
    let fourUrl = '../Front-Enter/images/7.jpg';
    rotateImg(fourUrl);
})

app.get('#imageLeftFive').addEventListener('click', function(){
    rotateRotate = 4; 
    // let fiveUrl = '../images/AppWorksShool-rectangle.jpg';
    let fiveUrl = '../Front-Enter/images/AppWorksShool-rectangle.jpg';
    rotateImg(fiveUrl);
})

function rotateImg(url){
    app.rotate.rotateBackFull();
    app.rotate.rotateLeftArrow();
    app.rotate.rotateCenterImg(url)
    app.rotate.rotateRightArrow();
}

app.rotate.rotateBackFull = function(){
    let newElement = document.createElement('div');
    newElement.className = 'rotate-back-full';
    newElement.id = 'rotateBackFull';
    document.body.appendChild(newElement);
    newElement.onclick = deleteRotateFull;
}

app.rotate.rotateCenterImg = function(url){
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

app.rotate.rotateRightArrow = function(){
    let newElement = document.createElement('div');
    newElement.className = 'rotate-right-arrow';
    newElement.id = 'rotateRightArrow';
    document.getElementById('rotateBackFull').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
        startRight();
    }
}

app.rotate.rotateLeftArrow = function(){
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
    app.get('#rotateCenterImg').style.background = "url('" + rImg[rotateRotate] + "')"; 
    app.get('#rotateCenterImg').style.backgroundRepeat  =  'no-repeat';  
    app.get('#rotateCenterImg').style.backgroundSize  =  'cover';
    app.get('#rotateCenterImg').style.backgroundPositionX = 'center';
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
    app.get('#rotateCenterImg').style.background = "url('" + rImg[rotateRotate] + "')";  
    app.get('#rotateCenterImg').style.backgroundRepeat  =  'no-repeat';  
    app.get('#rotateCenterImg').style.backgroundSize  =  'cover';
    app.get('#rotateCenterImg').style.backgroundPositionX = 'center';
    
}

function deleteRotateFull(){
    let anotherChild=document.getElementById('rotateBackFull');
    document.body.removeChild(anotherChild);
}

// alert 
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(function(){
    app.loading();
}, 1500)