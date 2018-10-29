// keyvisual rotate
let storePhoto = [];
let icount=1;  
let keyvisualImg;
let keyvisualImg_len;
app.rotateKeyvisual = (keyBlock, keyNone1, keyNone2) => {
    app.get(keyBlock).style.display  =  'block';
    app.get(keyNone1).style.display  =  'none';
    app.get(keyNone2).style.display  =  'none';
    app.get(keyBlock).style.animation = 'opacityOut 5s ease 0s 1 alternate both';
    app.get(keyBlock).style.backgroundPositionX = 'center';
}
database.ref('article').orderByChild('skill').on('child_added', (snapshot) => {
    storePhoto.push(snapshot.val().rectangleUrl);
});
setInterval('app.article.changeKevisual()',5000);
app.article.changeKevisual = () => {
    keyvisualImg = [storePhoto[0],storePhoto[1],storePhoto[2]];
    keyvisualImg_len = keyvisualImg.length; 
    app.get('#keyvisual0').style.background = "url('" + keyvisualImg[0] + "') 50% / cover no-repeat";    
    app.get('#keyvisual0').style.backgroundPositionY = 'center';
    app.get('#keyvisual1').style.background = "url('" + keyvisualImg[1] + "') 50% / cover no-repeat";    
    app.get('#keyvisual1').style.backgroundPositionY = 'center';
    app.get('#keyvisual2').style.background = "url('" + keyvisualImg[2] + "') 50% / cover no-repeat";    
    app.get('#keyvisual2').style.backgroundPositionY = 'center';
    if(icount == 0){
        app.rotateKeyvisual('#keyvisual0', '#keyvisual1', '#keyvisual2');
    }else if(icount == 1){
        app.rotateKeyvisual('#keyvisual1', '#keyvisual0', '#keyvisual2');
    }else if(icount == 2){
        app.rotateKeyvisual('#keyvisual2', '#keyvisual0', '#keyvisual1');
    }
    icount++;
    if(icount>=keyvisualImg_len) { icount=0;}
}

// get firebase json to deal with search
let x = 0;
let getAllData = database.ref('article');
let allData;
let articleId = (new URL(document.location)).searchParams.get('id');  // get url id
let isBuild = 'false';
app.search.judgeId = (keyWord, allKey) => {
    app.get('#mainId').innerHTML = '';
    isBuild = 'true';
    getAllData.orderByChild(keyWord).equalTo(allKey).on('child_added', (snapshot) => {
        let data;
        data = snapshot.val();  createLayout(data);
    });  
    return
}

getAllData.orderByChild('skill').on('child_added', (snapshot) => {
    allData = snapshot.val(); 
    if(isBuild === 'false'){
        if(allData.name.match(articleId) != null){
            app.search.judgeId('name', allData.name);
        }else if(allData.city.match(articleId) != null){
            app.search.judgeId('city', allData.city);
        }else if(allData.teachWay.match(articleId) != null){
            app.search.judgeId('teachWay', allData.teachWay);
        }else if(allData.classType.match(articleId) != null){
            app.search.judgeId('classType', allData.classType);
        }else if(allData.skill.match(articleId) != null){
            app.search.judgeId('skill', allData.skill);
        }else if(articleId == null){
            createLayout(snapshot.val());
        }
    }
});

// get firebase json to deal with search
 createLayout = (data) =>{
    app.createElement('article', '', 'article' + x, 'mainId', '', '');
    if(userLogin){
        app.article.collectionSchool(data);
    }
    app.createElement('div', '', 'locationDiv' + x, 'article' + x , '', '');
    app.createElement('div', 'location-img-born', 'locationImgBorn' + x, 'locationDiv' + x , '', '');
    app.createElement('a', '', 'aLocation' + x, 'locationDiv' + x , '', '');
    app.article.createPLocation(data);
    app.article.createContentA(data);
    app.createElement('div', 'article-div', 'imgDiv' + x, 'contentA' + x , '', '');
    app.article.createArticleImg(data);
    app.createElement('p', 'article-head', '', 'contentA' + x , data.name, '');
    app.article.createArticlePreface(data);
    app.createElement('div', 'read-more-out', 'readMoreOut' + x, 'contentA' + x , '', '');
    app.createElement('div', 'read-more-word', 'readMoreWord', 'readMoreOut' + x , 'read more', '');
    app.createElement('div', 'read-more-div', 'readMoreDiv', 'readMoreOut' + x , '', '');
    app.createElement('div', 'tag-line', '', 'article' + x , '', '');
    x ++;
}

// display collected
if(window.localStorage.getItem(`collection`)){
    let displayMyCollection;
    displayMyCollection = JSON.parse(window.localStorage.getItem(`collection`));
    getAllData.orderByChild('skill').on('child_added', (snapshot) => {
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

app.article.collectionSchool = (data) => {
    let newElement = document.createElement('div');
    newElement.id = 'collectionSchool' + data.creatTime;
    newElement.className = 'collection-school';
    document.getElementById('article' + x).appendChild(newElement);
    newElement.onclick = () => {
        // after collect，get name & url from createtime
        getAllData.orderByChild('creatTime').equalTo(Number(newElement.id.replace(/[^0-9]+/g, ''))).on('child_added', (snapshot) => {
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

app.article.createPLocation = (data) => {
    let newElement = document.createElement('p');
    newElement.className = 'article-location';
    newElement.textContent = data.city;
    document.getElementById('aLocation' + x).appendChild(newElement);
    newElement.onclick = (e) => {
        app.article.clearContent(newElement.textContent);
    }
}

// clear layout
app.article.clearContent = (city) => {
    app.get('#mainId').innerHTML = '';
    getAllData.orderByChild('city').equalTo(city).on('child_added', (snapshot) => {
        data = snapshot.val();
        createLayout(data);
    });    
}

app.article.createContentA = (data) => {
    let newElement = document.createElement('a');
    newElement.id = 'contentA' + x; 
    newElement.setAttribute('href', '/Front-Enter/content.html?id=' + data.creatTime);
    document.getElementById('article' + x).appendChild(newElement);
}

app.article.createArticleImg = (data) => {
    let newElement = document.createElement('img');
    newElement.className = 'article-img';
    newElement.src = data.squareUrl;
    document.getElementById('imgDiv' + x).appendChild(newElement);
}

app.article.createArticlePreface = (data) => {
    let newElement = document.createElement('p');
    newElement.innerHTML = data.preface;
    document.getElementById('contentA' + x).appendChild(newElement);
}

// all tag
app.tag = (all, smallClass, letGo, oneByOne) => {
    app.get('#getAllArticle').style.color = all;
    app.get('#smallClass').style.color = smallClass;
    app.get('#letItGo').style.color = letGo;
    app.get('#oneByOne').style.color = oneByOne;
    app.get('#mainId').innerHTML = '';
}

app.get('#getAllArticle').onclick = () => {
    app.tag('rgb(26, 216, 211)', 'rgb(128, 128, 128)','rgb(128, 128, 128)', 'rgb(128, 128, 128)');
    getAllData.orderByChild('skill').on('child_added', (snapshot) => {
        data = snapshot.val();
        createLayout(data);
        });
}

app.get('#smallClass').onclick = () => {
    app.tag('rgb(128, 128, 128)', 'rgb(26, 216, 211)','rgb(128, 128, 128)', 'rgb(128, 128, 128)');
    getAllData.orderByChild('classType').equalTo('小班制').on('child_added', (snapshot) => {
        data = snapshot.val();
        createLayout(data);
    });   
}

app.get('#letItGo').onclick = () => {
    app.tag('rgb(128, 128, 128)', 'rgb(128, 128, 128)', 'rgb(26, 216, 211)','rgb(128, 128, 128)');
    getAllData.orderByChild('teachWay').equalTo('放養制').on('child_added', (snapshot) => {
        data = snapshot.val();
        createLayout(data);
    });   
}

app.get('#oneByOne').onclick = () => {
    app.tag('rgb(128, 128, 128)', 'rgb(128, 128, 128)','rgb(128, 128, 128)', 'rgb(26, 216, 211)');
    getAllData.orderByChild('classType').equalTo('一對一').on('child_added', (snapshot) => {
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
setTimeout(() => {
    app.loading();
}, 1000);