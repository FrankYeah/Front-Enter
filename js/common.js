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


function testOneList(oneList){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-list';
    newElement.id = 'testOneList';
    newElement.textContent = oneList;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

// 第一個「測驗開始」按鈕

function testOneButton(oneButton){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-button';
    newElement.id = 'testOneButton';
    newElement.textContent = oneButton;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testTwoStart;
}

function testTwoQuestionCount(questionCount){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-question-count';
    newElement.id = 'testTwoQuestionCount';
    newElement.textContent = questionCount;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function testTwoSelect(twoSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testTwoSelect';
    newElement.textContent = twoSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testThreeStart;
}

function testTwoStart(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '選擇在哪座城市學習？'
    testOneList(oneButton);
    let questionCount = '1/5';
    testTwoQuestionCount(questionCount);
    let TwoSelectTaipei = '台北';
    testTwoSelect(TwoSelectTaipei);
    let TwoSelectTaichung = '台中';
    testTwoSelect(TwoSelectTaichung);
    let TwoSelectKau = '高雄';
    testTwoSelect(TwoSelectKau);
    let TwoSelectEveryPlace = '各地';
    testTwoSelect(TwoSelectEveryPlace);
    let TwoSelectNotImportant = '不重要';
    testTwoSelect(TwoSelectNotImportant);
}

// 點擊城市

function testThreeStart(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '每月能撥出多少費用學習？'
    testOneList(oneButton);
    let questionCount = '2/5';
    testTwoQuestionCount(questionCount);
    let threeSelectThree = '3000元以下';
    testThreeSelect(threeSelectThree);
    let threeSelectSix = '3000-6000元';
    testThreeSelect(threeSelectSix);
    let threeSelectTen = '6000-10,000元';
    testThreeSelect(threeSelectTen);
    let threeSelectTenUp = '10,000元以上';
    testThreeSelect(threeSelectTenUp);
    let threeSelectNotImportant = '不重要';
    testThreeSelect(threeSelectNotImportant);
}

function testThreeSelect(threeSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-three-select';
    newElement.id = 'testThreeSelect';
    newElement.textContent = threeSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testFourStart;
}

function testFourStart(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '每周能撥出多少時間學習？'
    testOneList(oneButton);
    let questionCount = '3/5';
    testTwoQuestionCount(questionCount);
    let fourSelectfifty = '1-15小時';
    testFourSelect(fourSelectfifty);
    let fourSelectThirty = '15-30小時';
    testFourSelect(fourSelectThirty);
    let fourSelectFortyFive = '30-45小時';
    testFourSelect(fourSelectFortyFive);
    let fourSelectFortyFiveUp = '45小時以上';
    testFourSelect(fourSelectFortyFiveUp);
    let fourSelectNotImportant = '不重要';
    testFourSelect(fourSelectNotImportant);
}

function testFourSelect(fourSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-four-select';
    newElement.id = 'testFourSelect';
    newElement.textContent = fourSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testFiveStart;
}

function testFiveStart(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '對班制的需求是？';
    testOneList(oneButton);
    let questionCount = '4/5';
    testTwoQuestionCount(questionCount);
    let fiveSelectBigClass = '大班制';
    testFiveSelect(fiveSelectBigClass);
    let fiveSelectsmallClass = '小班制';
    testFiveSelect(fiveSelectsmallClass);
    let fiveSelectNotImportant = '不重要';
    testFiveSelect(fiveSelectNotImportant);
}

function testFiveSelect(fiveSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-five-select';
    newElement.id = 'testFiveSelect';
    newElement.textContent = fiveSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testSixStart;
}

function testSixStart(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '喜歡什麼樣的教學方式？';
    testOneList(oneButton);
    let questionCount = '5/5';
    testTwoQuestionCount(questionCount);
    let sixSelectLetGo = '放養制';
    testSixSelect(sixSelectLetGo);
    let sixSelectOneByOne = '手把手教制';
    testSixSelect(sixSelectOneByOne);
    let sixSelectNotImportant = '不重要';
    testSixSelect(sixSelectNotImportant);
}

function testSixSelect(sixSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-six-select';
    newElement.id = 'testSixSelect';
    newElement.textContent = sixSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testEndStart;
}

function testEndStart(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneHeader = '結果';
    testOneHeader(oneHeader);
    let oneButton = '80%';
    testOneList(oneButton);
    let endOne = '六角學院';
    testEndSelect(endOne);
}

function testEndSelect(endSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-end-select';
    newElement.id = 'testEndSelect';
    newElement.textContent = endSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}