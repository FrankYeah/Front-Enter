// keyvisual rotate
let storePhoto = [];
let icount=1;  
let keyvisualImg;
let keyvisualImg_len;
database.ref('article').orderByChild('skill').on('child_added', function(snapshot) {
    storePhoto.push(snapshot.val().rectangleUrl);
});
setInterval('app.article.changeKevisual()',5000);
app.article.changeKevisual = function(){
    keyvisualImg = [storePhoto[0],storePhoto[1],storePhoto[2]];
    keyvisualImg_len = keyvisualImg.length; 
    app.get('#keyvisual0').style.background = "url('" + keyvisualImg[0] + "') 50% / cover no-repeat";    
    app.get('#keyvisual0').style.backgroundPositionY = 'center';
    app.get('#keyvisual1').style.background = "url('" + keyvisualImg[1] + "') 50% / cover no-repeat";    
    app.get('#keyvisual1').style.backgroundPositionY = 'center';
    app.get('#keyvisual2').style.background = "url('" + keyvisualImg[2] + "') 50% / cover no-repeat";    
    app.get('#keyvisual2').style.backgroundPositionY = 'center';

    if(icount == 0){
        app.get('#keyvisual0').style.display  =  'block';
        app.get('#keyvisual1').style.display  =  'none';
        app.get('#keyvisual2').style.display  =  'none';
        app.get('#keyvisual0').style.animation = 'opacityOut 5s ease 0s 1 alternate both';
        app.get('#keyvisual0').style.backgroundPositionX = 'center';
    }else if(icount == 1){
        app.get('#keyvisual0').style.display  =  'none';
        app.get('#keyvisual1').style.display  =  'block';
        app.get('#keyvisual2').style.display  =  'none';
        app.get('#keyvisual1').style.animation = 'opacityOut 5s ease 0s 1 alternate both';
        app.get('#keyvisual1').style.backgroundPositionX = 'center';
    }else if(icount == 2){
        app.get('#keyvisual1').style.display  =  'none';
        app.get('#keyvisual0').style.display  =  'none';
        app.get('#keyvisual2').style.display  =  'block';
        app.get('#keyvisual2').style.animation = 'opacityOut 5s ease 0s 1 alternate both';
        app.get('#keyvisual2').style.backgroundPositionX = 'center';
    }
    icount++;
    if(icount>=keyvisualImg_len) { icount=0;}
}

// get firebase json to deal with search
let x = 0;
let getAllData = database.ref('article');
let data;
let articleId = (new URL(document.location)).searchParams.get('id');  // get url id

if(articleId == null){
    getAllData.orderByChild('skill').on('child_added', function(snapshot) {
        data = snapshot.val(); 
        createLayout(data);
    });
}else if(articleId == '彭彭' || articleId == 'pengpeng' || articleId == 'peng'
        || articleId == '彭' || articleId == 'p'
        ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('name').equalTo('彭彭的課程教學').on('child_added', function(snapshot) {
        data = snapshot.val();  createLayout(data);
    });  
}else if(articleId == 'a' || articleId == 'app' || articleId == 'appworks' 
        || articleId == 'A' || articleId == 'App' || articleId == 'APP' 
        || articleId == 'AppWorks School' || articleId == 'AppWorks'
){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('name').equalTo('AppWorks School').on('child_added', function(snapshot) {
        data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '台北' || articleId == '台' || articleId == '北' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('city').equalTo('台北').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '各地' || articleId == '各' || articleId == '地' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('city').equalTo('各地').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '一' || articleId == '一對一' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('classType').equalTo('一對一').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '大' || articleId == '大班' || articleId == '大班制' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('classType').equalTo('大班制').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '小' || articleId == '小班' || articleId == '小班制' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('classType').equalTo('小班制').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '放養' || articleId == '放' || articleId == '放養制'  || articleId == '養' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('teachWay').equalTo('放養制').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '手' || articleId == '手把手' || articleId == '手把手教'  || articleId == '手把手教制' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('teachWay').equalTo('手把手教制').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else if(articleId == '前' || articleId == '端' || articleId == '前端' 
    ){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
    data = snapshot.val();   createLayout(data);
    });  
}else{
    let newElement = document.createElement('div');
    newElement.textContent = 'no result';
    newElement.style.color = 'rgb(26, 216, 211)';
    app.get('#mainId').appendChild(newElement);
    getAllData.orderByChild('skill').on('child_added', function(snapshot) {
        data = snapshot.val();
        app.get('#mainId').innerHTML = '';
    });
}

// get firebase json to deal with search
function createLayout(data){
    app.article.articleBorn();
    if(userLogin){
        app.article.collectionSchool(data);
    }
    app.article.locationDivBorn();
    app.article.locationImgBorn();
    app.article.aLocationBorn();
    app.article.pLocationBorn(data);
    app.article.contentABorn(data);
    app.article.imgDivBorn();
    app.article.imgBorn(data);
    app.article.pNameBorn(data);
    app.article.pPrefaceBorn(data);
    app.article.readMoreOut();
    app.article.readMoreWord();
    app.article.readMoreDiv();
    app.article.tagLineBorn();
    x ++;
}

app.article.articleBorn = function(){
    let newElement = document.createElement('article');
    newElement.id = 'article' + x;
    app.get('#mainId').appendChild(newElement);
}

// display collected
if(window.localStorage.getItem(`collection`)){
    let displayMyCollection;
    displayMyCollection = JSON.parse(window.localStorage.getItem(`collection`));
    getAllData.orderByChild('skill').on('child_added', function(snapshot) {
        for(let i=0 ; i<displayMyCollection.length ; i++){
            if(displayMyCollection[i].name == snapshot.val().name){
                document.getElementById('collectionSchool' + snapshot.val().creatTime).style.background = 'url(../Front-Enter/images/star-background.svg)';
                document.getElementById('collectionSchool' + snapshot.val().creatTime).style.backgroundSize = 'cover';
            }else{
            }
        }    
    })
}

// local storage collection 
let collection = [{
    name: ''
  }]

app.article.collectionSchool = function(data){
    let newElement = document.createElement('div');
    newElement.id = 'collectionSchool' + data.creatTime;
    newElement.className = 'collection-school';
    document.getElementById('article' + x).appendChild(newElement);
    newElement.onclick = function(){
        // after collect，get name & url from createtime
        getAllData.orderByChild('creatTime').equalTo(Number(newElement.id.replace(/[^0-9]+/g, ''))).on('child_added', function(snapshot) {
            // if localstorage empty
            if(!window.localStorage.getItem(`collection`)){
                newElement.style.background = 'url(../Front-Enter/images/star-background.svg)';
                newElement.style.backgroundSize = 'cover';
                let collectionData = [{name:snapshot.val().name, 
                                       photo:snapshot.val().rectangleUrl,
                                       creatTime:snapshot.val().creatTime
                                    }];                                              
                localStorage.setItem(`collection`, JSON.stringify(collectionData)); 
            }else{
                let myStorageCollect = {name:snapshot.val().name,
                                        photo:snapshot.val().rectangleUrl,
                                        creatTime:snapshot.val().creatTime
                                        };                                       
                    let getLocal;
                    getLocal = JSON.parse(window.localStorage.getItem(`collection`));
                    for(let i=0 ; i<getLocal.length ; i++){
                        if(getLocal[i].name == snapshot.val().name){
                            newElement.style.background = 'url(../Front-Enter/images/star-border.svg)';
                            newElement.style.backgroundSize = 'cover';
                            getLocal.splice(i, 1);
                            localStorage.setItem(`collection`, JSON.stringify(getLocal)); 
                            return
                        }else{
                            newElement.style.background = 'url(../Front-Enter/images/star-background.svg)';
                            newElement.style.backgroundSize = 'cover';
                        }
                    }
                    getLocal.push(myStorageCollect);
                    localStorage.setItem(`collection`, JSON.stringify(getLocal)); 
                }
        });    
    }
}

app.article.locationDivBorn = function(){
    let newElement = document.createElement('div');
    newElement.id = 'locationDiv' + x;
    document.getElementById('article' + x).appendChild(newElement);
}

app.article.locationImgBorn = function(){
    let newElement = document.createElement('div');
    newElement.id = 'locationImgBorn' + x;
    newElement.className = 'location-img-born';
    document.getElementById('locationDiv' + x).appendChild(newElement);
}

app.article.aLocationBorn = function(data){
    let newElement = document.createElement('a');
    newElement.id = 'aLocation' + x;
    document.getElementById('locationDiv' + x).appendChild(newElement);
}

app.article.pLocationBorn = function(data){
    let newElement = document.createElement('p');
    newElement.className = 'article-location';
    newElement.textContent = data.city;
    document.getElementById('aLocation' + x).appendChild(newElement);
    newElement.onclick = function(e){
        app.article.clearContent(newElement.textContent);
    }
}

// clear layout
app.article.clearContent = function(city){
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('city').equalTo(city).on('child_added', function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });    
}

app.article.tagLineBorn = function(){
    let newElement = document.createElement('div');
    newElement.className = 'tag-line';
    document.getElementById('article' + x).appendChild(newElement);
}

app.article.contentABorn = function(data){
    let newElement = document.createElement('a');
    newElement.id = 'contentA' + x; 
    newElement.setAttribute('href', '/Front-Enter/content.html?id=' + data.creatTime);
    document.getElementById('article' + x).appendChild(newElement);
}

app.article.imgDivBorn = function(){
    let newElement = document.createElement('div');
    newElement.className = 'article-div';
    newElement.id = 'imgDiv' + x;
    document.getElementById('contentA' + x).appendChild(newElement);
}

app.article.imgBorn = function(data){
    let newElement = document.createElement('img');
    newElement.className = 'article-img';
    newElement.src = data.squareUrl;
    document.getElementById('imgDiv' + x).appendChild(newElement);
}

app.article.pNameBorn = function(data){
    let newElement = document.createElement('p');
    newElement.className = 'article-head';
    newElement.textContent = data.name;
    document.getElementById('contentA' + x).appendChild(newElement);
}

app.article.pPrefaceBorn = function(data){
    let newElement = document.createElement('p');
    newElement.innerHTML = data.preface;
    document.getElementById('contentA' + x).appendChild(newElement);
}

app.article.readMoreOut = function(){
    let newElement = document.createElement('div');
    newElement.id = 'readMoreOut' + x;
    newElement.className = 'read-more-out';
    document.getElementById('contentA' + x).appendChild(newElement);
}

app.article.readMoreWord = function(){
    let newElement = document.createElement('div');
    newElement.textContent = 'read more';
    newElement.id = 'readMoreWord';
    newElement.className = 'read-more-word';
    document.getElementById('readMoreOut' + x).appendChild(newElement);
}

app.article.readMoreDiv = function(){
    let newElement = document.createElement('div');
    newElement.className = 'read-more-div';
    newElement.id = 'readMoreDiv';
    document.getElementById('readMoreOut' + x).appendChild(newElement);
}

// all tag
app.get('#getAllArticle').onclick = function(){
    app.get('#getAllArticle').style.color = 'rgb(26, 216, 211)';
    app.get('#smallClass').style.color = 'rgb(128, 128, 128)';
    app.get('#letItGo').style.color = 'rgb(128, 128, 128)';
    app.get('#oneByOne').style.color = 'rgb(128, 128, 128)';
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('skill').on('child_added', function(snapshot) {
        data = snapshot.val();
        createLayout(data);
        });
}

app.get('#smallClass').onclick = function(){
    app.get('#smallClass').style.color = 'rgb(26, 216, 211)';
    app.get('#getAllArticle').style.color = 'rgb(128, 128, 128)';
    app.get('#letItGo').style.color = 'rgb(128, 128, 128)';
    app.get('#oneByOne').style.color = 'rgb(128, 128, 128)';
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('classType').equalTo('小班制').on('child_added', function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });   
}

app.get('#letItGo').onclick = function(){
    app.get('#letItGo').style.color = 'rgb(26, 216, 211)'; 
    app.get('#getAllArticle').style.color = 'rgb(128, 128, 128)';
    app.get('#smallClass').style.color = 'rgb(128, 128, 128)';
    ;app.get('#oneByOne').style.color = 'rgb(128, 128, 128)';
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('teachWay').equalTo('放養制').on('child_added', function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });   
}

app.get('#oneByOne').onclick = function(){
    app.get('#oneByOne').style.color = 'rgb(26, 216, 211)';
    app.get('#getAllArticle').style.color = 'rgb(128, 128, 128)';
    app.get('#smallClass').style.color = 'rgb(128, 128, 128)';
    app.get('#letItGo').style.color = 'rgb(128, 128, 128)';
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('classType').equalTo('一對一').on('child_added', function(snapshot) {
        data = snapshot.val();
        createLayout(data);
    });   
}

// alert 
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(function(){
    app.get('#loadingAnimation').style.height = '0px';
    app.get('#loadingAnimation').style.opacity = '0.9';
    app.get('#loadingDrawing').style.height = '0px';
    app.get('#loadingDrawing').style.opacity = '0.9';
    app.get('#loadingImg').style.marginBottom = '-1000px';
    app.get('#header').style.animation = 'headerGoUp 0.9s ease 0s 1 alternate';
    app.get('#myAside').style.animation = 'asideBottom 0.9s ease 0s 1 alternate';
    setTimeout(function(){
        app.get('#loadingAnimation').style.display = 'none';
    }, 600);
}, 1000);