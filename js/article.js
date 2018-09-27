
// keyvisual 輪播
let storePhoto = [];
let storeLink = [];
const keyvisual = document.getElementById('keyvisual');
const keyvisualLink = document.getElementById('keyvisualLink');
let i=1;  
setInterval("changeKevisual()",5000);

function changeKevisual(){
    let keyvisualImg = new Array(storePhoto[0],storePhoto[1],storePhoto[2],);
    let keyvisualImg_len = keyvisualImg.length;  // 圖檔數量
    let keyvisualLinkArray = new Array(storeLink[0], storeLink[1], storeLink[2])
    // keyvisual.style.animation = "opacityOut 2.5s ease 0s infinite alternate";
    keyvisualLink.href = keyvisualLinkArray[i];
    keyvisual.style.background  =  "url('" + keyvisualImg[i] + "')";    
    keyvisual.style.backgroundRepeat  =  "no-repeat";  
    keyvisual.style.backgroundSize  =  "100% 630px";
    i++;
    if(i>=keyvisualImg_len) { i=0;}
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
        storeLink.push('content.html?id=' + data.creatTime);
        createLayout(data);
    });
}else if(articleId == '彭彭' || articleId == 'pengpeng' || articleId == 'peng'
        || articleId == '彭' || articleId == 'p'
        ){
    console.log('have id')
    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        data = snapshot.val();  storePhoto.push(data.rectangleUrl);
        storeLink.push('content.html?id=' + data.creatTime);
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
        storeLink.push('content.html?id=' + data.creatTime);
        document.getElementById('mainId').innerHTML = '';
    });
    getAllData.orderByChild("name").equalTo("AppWorks School").on("child_added", function(snapshot) {
        data = snapshot.val();   createLayout(data);
    });  
}

// 抓 firebase 資料庫 json 資料  // 搜尋處理

function createLayout(data){
    articleBorn();
    aLocationBorn();
    pLocationBorn(data);
    tagLineBorn();
    contentABorn(data);
    imgDivBorn();
    imgBorn(data);
    pNameBorn(data);
    pPrefaceBorn(data);
    x ++;
}

function articleBorn(){
    let newElement = document.createElement('article');
    newElement.id = 'article' + x;
    document.getElementById('mainId').appendChild(newElement);
}

function aLocationBorn(data){
    let newElement = document.createElement('a');
    newElement.id = 'aLocation' + x;
    document.getElementById('article' + x).appendChild(newElement);
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
    newElement.setAttribute('href', "/content.html?id=" + data.creatTime);
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

// 各種標籤

const getAllArticle = document.getElementById('getAllArticle');
getAllArticle.onclick = function(){
    document.getElementById('mainId').innerHTML = '';
    console.log('hi')
    getAllData.orderByChild("skill").on("child_added", function(snapshot) {
        console.log(snapshot.key);
        console.log(snapshot.val());
        data = snapshot.val();
        storePhoto.push(data.rectangleUrl);
        storeLink.push('content.html?id=' + data.creatTime);
        createLayout(data);
        });
}

const smallClass = document.getElementById('smallClass');
smallClass.onclick = function(){
    document.getElementById('mainId').innerHTML = '';
    console.log('hi')
    getAllData.orderByChild("classType").equalTo('小班制').on("child_added", function(snapshot) {
        console.log(snapshot.val());
        data = snapshot.val();
        createLayout(data);
    });   
}

const letItGo = document.getElementById('letItGo');
letItGo.onclick = function(){
    document.getElementById('mainId').innerHTML = '';
    console.log('hi')
    getAllData.orderByChild("teachWay").equalTo('放養制').on("child_added", function(snapshot) {
        console.log(snapshot.val());
        data = snapshot.val();
        createLayout(data);
    });   
}

const oneByOne = document.getElementById('oneByOne');
oneByOne.onclick = function(){
    document.getElementById('mainId').innerHTML = '';
    console.log('hi')
    getAllData.orderByChild("classType").equalTo('一對一').on("child_added", function(snapshot) {
        console.log(snapshot.val());
        data = snapshot.val();
        createLayout(data);
    });   
}





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