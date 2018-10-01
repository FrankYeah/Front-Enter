//判斷滾動，改變 header、logo 顏色

const webSearch = document.getElementById('webSearch');
const logo = document.getElementById('logo');
const headerP1 = document.getElementById('headerP1');
const headerP2 = document.getElementById('headerP2');
const headerP3 = document.getElementById('headerP3');
const header = document.getElementById('header');

window.addEventListener('scroll',winScroll);
function winScroll(){
    if(document.documentElement.scrollTop>0){
        webSearch.src = "images/FE_search_green.png";
        logo.src = "images/FE_logo-4.png";
        logo.style.animation = "opacityOut 1s ease 0s 1 alternate";
        headerP1.style.color="rgb(128,128,128)";headerP2.style.color="rgb(128,128,128)";headerP3.style.color="rgb(128,128,128)";
        header.style.animation = "headerBackgroundOut 5s ease 0s 1 alternate forwards";
        if(userLogin && userLogin.emailVerified == true){
            headerP3.style.color = 'rgb(26, 216, 211)';
            headerP3.textContent = '個人頁';
            headerP3.style.cursor = 'pointer';
        }
      }else if(document.documentElement.scrollTop<100){
        webSearch.src = "images/FE_search.png";
        logo.src = "images/FE_logo-1.png";
        header.style.backgroundColor = "";
        logo.style.animation = "opacityOut 1s ease 0s 1 alternate";
        headerP1.style.color="white";headerP2.style.color="white";headerP3.style.color="white";
        header.style.animation = "headerBackgroundIn 1s ease 0s 1 alternate"
        if(userLogin && userLogin.emailVerified == true){
            headerP3.style.color = 'rgb(26, 216, 211)';
            headerP3.textContent = '個人頁';
            headerP3.style.cursor = 'pointer';
        }
      }
}

// back to top

window.onload = function() {

    let top = document.getElementById('tops');
    let timer = null;
    let isTop = true;

    top.onclick = function(){
        //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离顶部的高度
            let osTop = document.documentElement.scrollTop || document.body.scrollTop ;  //同时兼容了ie和Chrome浏览器
                
            //减小的速度
            let isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            //console.log( osTop + isSpeed);

            isTop = true;

            //判断，然后清除定时器
            if (osTop == 0) {
                clearInterval(timer);
            }
        },30);
    };  
}

// 搜尋

webSearch.addEventListener('click', startSearch);
let countClick = 0;
function startSearch(){
    if(countClick==0){
        fullSearchDiv();
        fullSearchWhiteDiv();
        whiteDivLeft();
        // whiteDivRight();
        // whiteDivLeftIcon();
        whiteDivLeftText();
        whiteDivLeftBox();
        leftInput();
        leftButton();
        countClick++;
    }else{
        let child=document.getElementById("fullSearchDiv");
        document.body.removeChild(child);
        let anotherChild=document.getElementById("fullSearchWhiteDiv");
        document.body.removeChild(anotherChild);
        countClick--;
    }
}

function fullSearchDiv(){
    let newElement = document.createElement('div');
    newElement.id = 'fullSearchDiv';
    newElement.className = 'fullSearchDiv';
    document.body.appendChild(newElement);
    newElement.onclick = function(){
        startSearch();
    }
}

function fullSearchWhiteDiv(){
    let newElement = document.createElement('div');
    newElement.id = 'fullSearchWhiteDiv';
    newElement.className = 'fullSearchWhiteDiv';
    document.body.appendChild(newElement);
}

function whiteDivLeft(){
    let newElement = document.createElement('div');
    newElement.id = 'whiteDivLeft';
    newElement.className = 'whiteDivLeft';
    document.getElementById('fullSearchWhiteDiv').appendChild(newElement);
}

function whiteDivRight(){
    let newElement = document.createElement('div');
    newElement.id = 'whiteDivRight';
    newElement.className = 'whiteDivRight';
    newElement.textContent = 'X';
    document.getElementById('fullSearchWhiteDiv').appendChild(newElement);
    newElement.onclick = function(){
        startSearch();
    }
}

function whiteDivLeftIcon(){
    let newElement = document.createElement('div');
    newElement.className = 'whiteDivLeftIcon';
    document.getElementById('whiteDivLeft').appendChild(newElement);
}

function whiteDivLeftText(){
    let newElement = document.createElement('p');
    newElement.className = 'whiteDivLeftText';
    newElement.textContent = 'SEARCH';
    document.getElementById('whiteDivLeft').appendChild(newElement);
}

function whiteDivLeftBox(){
    let newElement = document.createElement('form');
    newElement.id = 'whiteDivLeftBox';
    newElement.className = 'whiteDivLeftBox';
    newElement.onsubmit = 'return searchToArticle()';
    document.getElementById('whiteDivLeft').appendChild(newElement);
}

function leftInput(){
    let newElement = document.createElement('input');
    newElement.className = 'leftInput';
    newElement.id = 'leftInput';
    newElement.type = 'text';
    document.getElementById('whiteDivLeftBox').appendChild(newElement);
    newElement.onkeypress = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            window.location = 'article.html?id='+document.getElementById('leftInput').value ; 
        }
    }
}

function leftButton(){
    let newElement = document.createElement('div');
    newElement.className = 'leftButton';
    document.getElementById('whiteDivLeftBox').appendChild(newElement);
    newElement.onclick = function(){
        window.location = 'article.html?id='+document.getElementById('leftInput').value ; 
    }
}

function searchToArticle(){
    window.location = 'article.html?id='+document.getElementById('leftInput').value ; 
}

// 測驗 GO

const testGo = document.getElementById('testGo');
testGo.addEventListener('click', createTestGo)

function createTestGo(){
    if(countClick==0){
        let oneHeader = '測驗說明';
        let oneList = '點選「開始測驗」後，系統將根據你的回答，找出最適合你的學習環境。';
        let oneButton = '開始測驗';
        testGoBackDiv();
        testGoWhiteDiv();
        testOneHeader(oneHeader);
        testOneList(oneList);
        testOneButton(oneButton);
        countClick++;
    }else{
        let child=document.getElementById("testGoBackDiv");
        document.body.removeChild(child);
        countClick--;
    }
}

function testGoBackDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'test-go-back-div';
    newElement.id = 'testGoBackDiv';
    document.body.appendChild(newElement);
    newElement.onclick = createTestGo;
}

function testGoWhiteDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'test-go-white-div';
    newElement.id = 'testGoWhiteDiv';
    document.getElementById('testGoBackDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

function testOneHeader(oneHeader){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-header';
    newElement.id = 'testOneHeader';
    newElement.textContent = oneHeader;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function testOneHeader(oneList){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-header';
    newElement.id = 'testOneHeader';
    newElement.textContent = oneList;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function testOneList(oneButton){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-list';
    newElement.id = 'testOneList';
    newElement.textContent = oneButton;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function testOneButton(){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-button';
    newElement.id = 'testOneButton';
    newElement.textContent = '開始測驗';
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testTwoSart;
}

function testTwoQuestionCount(questionCount){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-question-count';
    newElement.id = 'testTwoQuestionCount';
    newElement.textContent = questionCount;
}

function testTwoSart(){
    console.log('hihi')
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '選擇在哪座城市學習？'
    testOneList(oneButton);
    
}