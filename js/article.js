
// keyvisual 輪播
let storePhoto = [];
let storeLink = [];
// const keyvisual = document.getElementById('keyvisual');
// const keyvisualLink = document.getElementById('keyvisualLink');
let icount=1;  
let keyvisualImg;
let keyvisualImg_len;
let keyvisualLinkArray;
const keyvisualLink0 = document.getElementById('keyvisualLink0');
const keyvisualLink1 = document.getElementById('keyvisualLink1');
const keyvisualLink2 = document.getElementById('keyvisualLink2');
const keyvisual0 = document.getElementById('keyvisual0');
const keyvisual1 = document.getElementById('keyvisual1');
const keyvisual2 = document.getElementById('keyvisual2');
setInterval("changeKevisual()",4000);

function changeKevisual(){
    keyvisualImg = [storePhoto[0],storePhoto[1],storePhoto[2]];
    keyvisualImg_len = keyvisualImg.length;  // 圖檔數量
    keyvisualLinkArray = [storeLink[0], storeLink[1], storeLink[2]]

    // keyvisualLink.href = keyvisualLinkArray[icount];
    keyvisual0.style.background  =  "url('" + keyvisualImg[0] + "')";    
    keyvisual0.style.backgroundRepeat  =  "no-repeat";  
    keyvisual0.style.backgroundSize  =  "cover";
    keyvisual0.style.backgroundPositionY = 'center';
    keyvisualLink0.href = keyvisualLinkArray[0];

    keyvisual1.style.background  =  "url('" + keyvisualImg[1] + "')";    
    keyvisual1.style.backgroundRepeat  =  "no-repeat";  
    keyvisual1.style.backgroundSize  =  "cover";
    keyvisual1.style.backgroundPositionY = 'center';
    keyvisualLink0.href = keyvisualLinkArray[1];

    keyvisual2.style.background  =  "url('" + keyvisualImg[2] + "')";    
    keyvisual2.style.backgroundRepeat  =  "no-repeat";  
    keyvisual2.style.backgroundSize  =  "cover";
    keyvisual2.style.backgroundPositionY = 'center';
    keyvisualLink0.href = keyvisualLinkArray[2];

    if(icount == 0){
        keyvisual0.style.display  =  "block";
        keyvisual1.style.display  =  "none";
        keyvisual2.style.display  =  "none";
        // keyvisualLink0.href = keyvisualLinkArray[0];
        keyvisual0.style.animation = "opacityOut 1s ease 0s 1 alternate";
        keyvisual0.style.backgroundPositionX = 'left';

    }else if(icount == 1){
        keyvisual0.style.display  =  "none";
        keyvisual1.style.display  =  "block";
        keyvisual2.style.display  =  "none";
        // keyvisualLink1.href = keyvisualLinkArray[1];
        keyvisual1.style.animation = "opacityOut 1s ease 0s 1 alternate";
        keyvisual1.style.backgroundPositionX = 'center';

    }else if(icount == 2){
        keyvisual1.style.display  =  "none";
        keyvisual0.style.display  =  "none";
        keyvisual2.style.display  =  "block";
        // keyvisualLink2.href = keyvisualLinkArray[2];
        keyvisual2.style.animation = "opacityOut 2s ease 0s 1 alternate";
        keyvisual2.style.backgroundPositionX = 'right';

    }

    icount++;
    if(icount>=keyvisualImg_len) { icount=0;}

}

// 抓 firebase 資料庫 json 資料  // 搜尋處理

let x = 0;
let getAllData = database.ref("article");
let data;
let articleId = (new URL(document.location)).searchParams.get("id");  //取得url的id

if(articleId == null){
    console.log('no id')
    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        data = snapshot.val();
        storePhoto.push(data.rectangleUrl);
        // storeLink.push('content.html?id=' + data.creatTime);
        createLayout(data);
    });
}else if(articleId == '彭彭' || articleId == 'pengpeng' || articleId == 'peng'
        || articleId == '彭' || articleId == 'p'
        ){
    console.log('have id')
    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        data = snapshot.val();  storePhoto.push(data.rectangleUrl);
        // storeLink.push('content.html?id=' + data.creatTime);
        document.getElementById('mainId').innerHTML = '';
    });
    getAllData.orderByChild("name").equalTo('彭彭的課程教學').on("child_added", function(snapshot) {
        data = snapshot.val();  createLayout(data);
    });  
}else if(articleId == 'a' || articleId == 'app' || articleId == 'appworks' 
        || articleId == 'A' || articleId == 'App' || articleId == 'APP' 
        || articleId == 'AppWorks School' || articleId == 'AppWorks'
){
    console.log('got a')
    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        data = snapshot.val();  storePhoto.push(data.rectangleUrl);
        // storeLink.push('content.html?id=' + data.creatTime);
        document.getElementById('mainId').innerHTML = '';
    });
    getAllData.orderByChild("name").equalTo("AppWorks School").on("child_added", function(snapshot) {
        data = snapshot.val();   createLayout(data);
    });  
}else{
    let newElement = document.createElement('div');
    newElement.textContent = 'no result';
    newElement.style.color = 'rgb(26, 216, 211)';
    document.getElementById('mainId').appendChild(newElement);

    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        data = snapshot.val();  storePhoto.push(data.rectangleUrl);
        // storeLink.push('content.html?id=' + data.creatTime);
        document.getElementById('mainId').innerHTML = '';
    });
}

// 抓 firebase 資料庫 json 資料  // 搜尋處理

function createLayout(data){
    articleBorn();
    if(userLogin){
        // collectionSchool(data);
    }
    locationDivBorn();
    locationImgBorn();
    aLocationBorn();
    pLocationBorn(data);
    contentABorn(data);
    imgDivBorn();
    imgBorn(data);
    pNameBorn(data);
    pPrefaceBorn(data);
    readMoreOut();
    readMoreWord();
    readMoreDiv();
    tagLineBorn();
    x ++;
}

function articleBorn(){
    let newElement = document.createElement('article');
    newElement.id = 'article' + x;
    document.getElementById('mainId').appendChild(newElement);
}

let collection = [];

function collectionSchool(data){
    let newElement = document.createElement('div');
    newElement.id = 'collectionSchool' + data.creatTime;
    newElement.className = 'collection-school';
    document.getElementById('article' + x).appendChild(newElement);
    newElement.onclick = function(){

        // 點擊收藏後，先透過 createtime 抓到名稱 & 圖片
        getAllData.orderByChild("creatTime").equalTo(Number(newElement.id.replace(/[^0-9]+/g, ''))).on("child_added", function(snapshot) {

            // 如果 localstorage 為空，則創造一個，再把值丟進去

            if(!window.localStorage.getItem(`collection`)){
                console.log(window.localStorage.getItem(`collection`))
                let collectionData = {name:snapshot.val().name
                                        // photo:snapshot.val().squareUrl
                                    };
                localStorage.setItem(`collection`, JSON.stringify(collectionData)); 
            }{
            // 如果 localstorage有資料，先將原本資料抓出來，再塞新的進去
            console.log(window.localStorage.getItem(`collection`))
            let myStorageCollect = [{name:snapshot.val().name
                                        // photo:snapshot.val().squareUrl
                                    }];
            
                //  myStorageCollect.push(JSON.parse(JSON.stringify(window.localStorage.getItem(`collection`))))
                let getLocal;
                getLocal = window.localStorage.getItem(`collection`);
                myStorageCollect.push(JSON.parse(getLocal));

                console.log(JSON.parse(getLocal));
                console.log(getLocal);
                console.log(myStorageCollect);
                localStorage.setItem(`collection`, JSON.stringify(getLocal)); 



            }


            let collectionData = {name:snapshot.val().name,
                                  name:snapshot.val().squareUrl
                                 }
            window.localStorage.getItem(`collection`)
            collection.push(collectionData);
        });    
        // 將名稱 & 圖片存入 localstorage
        // 在外面判斷是否有 localstorage資料，有的話，顏色要變，沒有就原樣
        // profile 則將資料拉出來檢視，加上刪除功能
        

    }
}

function locationDivBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'locationDiv' + x;
    document.getElementById('article' + x).appendChild(newElement);
}

function locationImgBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'locationImgBorn' + x;
    newElement.className = 'location-img-born';
    document.getElementById('locationDiv' + x).appendChild(newElement);
}

function aLocationBorn(data){
    let newElement = document.createElement('a');
    newElement.id = 'aLocation' + x;
    document.getElementById('locationDiv' + x).appendChild(newElement);
}

function pLocationBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'article-location';
    newElement.textContent = data.city;
    document.getElementById('aLocation' + x).appendChild(newElement);
    newElement.onclick = function(e){
        clearContent(newElement.textContent);
    }
}

//清空頁面

function clearContent(city){
    document.getElementById('mainId').innerHTML = '';
    console.log('hi')
    getAllData.orderByChild("city").equalTo(city).on("child_added", function(snapshot) {
        console.log(snapshot.val());
        data = snapshot.val();
        createLayout(data);
    });    
}

//清空頁面

function tagLineBorn(){
    let newElement = document.createElement('div');
    newElement.className = 'tag-line';
    document.getElementById('article' + x).appendChild(newElement);
}

function contentABorn(data){
    let newElement = document.createElement('a');
    newElement.id = 'contentA' + x;
    newElement.setAttribute('href', "/Front-Enter/content.html?id=" + data.creatTime);
    document.getElementById('article' + x).appendChild(newElement);
}

function imgDivBorn(){
    let newElement = document.createElement('div');
    newElement.className = 'article-div';
    newElement.id = 'imgDiv' + x;
    document.getElementById('contentA' + x).appendChild(newElement);
}

function imgBorn(data){
    let newElement = document.createElement('img');
    newElement.className = 'article-img';
    newElement.src = data.squareUrl;
    document.getElementById('imgDiv' + x).appendChild(newElement);
}

function pNameBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'article-head';
    newElement.textContent = data.name;
    document.getElementById('contentA' + x).appendChild(newElement);
}

function pPrefaceBorn(data){
    let newElement = document.createElement('p');
    newElement.innerHTML = data.preface;
    document.getElementById('contentA' + x).appendChild(newElement);
}

function readMoreOut(){
    let newElement = document.createElement('div');
    newElement.id = 'readMoreOut' + x;
    newElement.className = 'read-more-out';
    newElement.onmouseover = arrowMove;
    document.getElementById('contentA' + x).appendChild(newElement);
}

function arrowMove(){

}

function readMoreWord(){
    let newElement = document.createElement('div');
    newElement.textContent = 'read more';
    newElement.id = 'readMoreWord';
    newElement.className = 'read-more-word';
    document.getElementById('readMoreOut' + x).appendChild(newElement);
}

function readMoreDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'read-more-div';
    newElement.id = 'readMoreDiv';
    document.getElementById('readMoreOut' + x).appendChild(newElement);
}

// 各種標籤

const getAllArticle = document.getElementById('getAllArticle');
getAllArticle.onclick = function(){
    console.log('get all article')
    getAllArticle.style.color = 'rgb(26, 216, 211)';
    smallClass.style.color = 'rgb(128, 128, 128)';
    letItGo.style.color = 'rgb(128, 128, 128)';
    oneByOne.style.color = 'rgb(128, 128, 128)';

    document.getElementById('mainId').innerHTML = '';
    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        data = snapshot.val();
        storePhoto.push(data.rectangleUrl);
        // storeLink.push('content.html?id=' + data.creatTime);
        createLayout(data);
        });
}

const smallClass = document.getElementById('smallClass');
smallClass.onclick = function(){
    getAllArticle.style.color = 'rgb(128, 128, 128)';
    smallClass.style.color = 'rgb(26, 216, 211)';
    letItGo.style.color = 'rgb(128, 128, 128)';
    oneByOne.style.color = 'rgb(128, 128, 128)';
    document.getElementById('mainId').innerHTML = '';
    getAllData.orderByChild("classType").equalTo('小班制').on("child_added", function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });   
}

const letItGo = document.getElementById('letItGo');
letItGo.onclick = function(){
    getAllArticle.style.color = 'rgb(128, 128, 128)';
    smallClass.style.color = 'rgb(128, 128, 128)';
    letItGo.style.color = 'rgb(26, 216, 211)';
    oneByOne.style.color = 'rgb(128, 128, 128)';
    document.getElementById('mainId').innerHTML = '';
    getAllData.orderByChild("teachWay").equalTo('放養制').on("child_added", function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });   
}

const oneByOne = document.getElementById('oneByOne');
oneByOne.onclick = function(){
    getAllArticle.style.color = 'rgb(128, 128, 128)';
    smallClass.style.color = 'rgb(128, 128, 128)';
    letItGo.style.color = 'rgb(128, 128, 128)';
    oneByOne.style.color = 'rgb(26, 216, 211)';
    document.getElementById('mainId').innerHTML = '';
    getAllData.orderByChild("classType").equalTo('一對一').on("child_added", function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });   
}

// const mySelect = document.getElementById('mySelect');
// mySelect.onchange = function(event){
//     console.log(event.target.value)
    
//     document.getElementById('mainId').innerHTML = '';

//     //全部
//     if(event.target.value == '全部'){
//         getAllData.orderByChild("skill").on("child_added", function(snapshot) {
//             data = snapshot.val();
//             storePhoto.push(data.rectangleUrl);
//             storeLink.push('content.html?id=' + data.creatTime);
//             createLayout(data);
//         });
//     }else{
//         //小班制
//         //放養制
//         getAllData.orderByChild("teachWay").equalTo(event.target.value).on("child_added", function(snapshot) {
//             data = snapshot.val();
//             createLayout(data);
//         });   

//         //一對一
//         getAllData.orderByChild("classType").equalTo(event.target.value).on("child_added", function(snapshot) {
//             data = snapshot.val();
//             createLayout(data);
//         });   
//     }
// }

// alert 

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});




// 回調

// var funcA = function(callback){
//     var i = 3;
  
//     setTimeout(function(){
//       console.log('function A');
//         setTimeout(console.log("2"),2000)
//         callback();
//     }, i * 1000);
//   };
  
//   var funcB = function(){
//       var i = 3;
  
//       setTimeout(function(){
//         console.log('function B');
//       }, i * 1000);
//   };
  
//   // 將 funcB 作為參數帶入 funcA()
//   funcA( funcB );