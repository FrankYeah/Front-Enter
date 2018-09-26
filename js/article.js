
// keyvisual 輪播
let storePhoto = [];
const keyvisual = document.getElementById('keyvisual');
const keyvisualLink = document.getElementById('keyvisualLink');
let i=1;  
setInterval("changeKevisual()",5000);

function changeKevisual(){
    
    let keyvisualImg = new Array(storePhoto[0],storePhoto[1],storePhoto[2],);
    let keyvisualImg_len = keyvisualImg.length;  // 圖檔數量
    // keyvisual.style.animation = "opacityOut 2.5s ease 0s infinite alternate";
    keyvisual.style.background  =  "url('" + keyvisualImg[i] + "')";    
    keyvisual.style.backgroundRepeat  =  "no-repeat";  
    keyvisual.style.backgroundSize  =  "100% 630px";
    i++;
    if(i>=keyvisualImg_len) { i=0;}
}


// 抓 firebase 資料庫 json 資料
let x = 0;
let getAllData = database.ref("article");
let data;
getAllData.orderByChild("skill").on("child_added", function(snapshot) {
console.log(snapshot.key);
console.log(snapshot.val());
data = snapshot.val();
storePhoto.push(data.rectangleUrl)
createLayout(data);
});

function createLayout(tata){
    articleBorn();
    aLocationBorn();
    pLocationBorn(tata);
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

function aLocationBorn(){
    let newElement = document.createElement('a');
    newElement.id = 'aLocation' + x;
    document.getElementById('article' + x).appendChild(newElement);
}

function pLocationBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'article-location';
    newElement.textContent = data.city;
    document.getElementById('aLocation' + x).appendChild(newElement);
}

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

// const baseURL = 'https://front-enter.firebaseio.com/article.json';
// fetch(baseURL)
// .then((res) => res.json())
// .then(function(data){
//     console.log(data["-LNF0xnnw_3RnXdCA0Rh"].city)
// });

// firebase.database().ref('article/').on('value', function(snapshot) {
//     console.log(snapshot.val())
//     console.log(snapshot.key)
// });   

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