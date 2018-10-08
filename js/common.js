//判斷滾動，改變 header、logo 顏色

const webSearch = document.getElementById('webSearch');
const logo = document.getElementById('logo');
const headerP1 = document.getElementById('headerP1');
const headerP2 = document.getElementById('headerP2');
const headerP3 = document.getElementById('headerP3');
const header = document.getElementById('header');

headerP3.addEventListener("mouseover", function(){
    headerP3.style.color='rgb(26, 216, 211)';
});
headerP3.addEventListener("mouseout", function(){
    headerP3.style.color='rgb(128, 128, 128)';
})

window.addEventListener('scroll',winScroll);
function winScroll(){
    if(document.documentElement.scrollTop>0){
        webSearch.src = "images/FE_search_green.png";
        logo.src = "images/FE_logo-4.png";
        // logo.style.animation = "opacityOut 1s ease 0s 1 alternate";
        headerP1.style.color="rgb(128,128,128)";headerP2.style.color="rgb(128,128,128)";headerP3.style.color="rgb(128,128,128)";
        header.style.animation = "headerBackgroundOut 5s ease 0s 1 alternate forwards";
        if(userLogin.photoURL && userLogin.emailVerified == true){
            headerP3.style.color = 'rgb(128, 128, 128)';
            headerP3.textContent = '';
            headerP3.style.cursor = 'pointer';
        }
      }else if(document.documentElement.scrollTop<100){
        webSearch.src = "images/FE_search_green.png";
        logo.src = "images/FE_logo-4.png";
        header.style.backgroundColor = "";
        // logo.style.animation = "opacityOut 1s ease 0s 1 alternate";
        headerP1.style.color="rgb(128, 128, 128)";headerP2.style.color="rgb(128, 128, 128)";headerP3.style.color="rgb(128, 128, 128)";
        header.style.animation = "headerBackgroundIn 1s ease 0s 1 alternate"
        if(userLogin.photoURL && userLogin.emailVerified == true){
            headerP3.style.color = 'rgb(128, 128, 128)';
            headerP3.textContent = '';
            headerP3.style.cursor = 'pointer';
        }
      }
}

// back to top

window.onload = function() {

    // 檢測登入狀態改變文字
    if(userLogin && userLogin.emailVerified == true){
        headerP3.style.color = 'rgb(128, 128, 128)';
        headerP3.textContent = '';
        headerP3.style.cursor = 'pointer';
        headerP3.addEventListener('mouseenter', changeColor);
        headerP3.addEventListener('mouseleave', changeColorAgain)
        function changeColor(){
            headerP3.style.color = 'rgb(26, 216, 211)';
        }
        function changeColorAgain(){
            headerP3.style.color = 'rgb(128, 128, 128)';
        }
    }

    let top = document.getElementById('tops');
    let timer = null;
    let isTop = true;

    top.onclick = function(){
        //設置定時器
        timer = setInterval(function(){
            //獲取滾動條到頂部的高度
            let osTop = document.documentElement.scrollTop || document.body.scrollTop ;  //同时兼容了ie和Chrome浏览器
                
            //减少的速度
            let isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            //console.log( osTop + isSpeed);

            isTop = true;

            //判斷，然後清除定時器
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
        let oneList = '點選「開始測驗」後，系統將根據你的回答，找出最適合你的學習環境，並顯示有多少百分比的合適度。';
        let oneButton = '開始測驗';
        testGoBackDiv();
        blueGreen();
        photoWithGray();
        testGoWhiteDiv();
        // filterDiv();
        testOneHeader(oneHeader);
        firstPreface(oneList);
        testOneButton(oneButton);

        countClick++;
    }else{
        let child=document.getElementById("testGoBackDiv");
        document.body.removeChild(child);
        countClick--;
        // 清空
        getAllSelect = [];
        clientTotal = [];
        styleElem.innerHTML = "#endPieChart:before {transform: rotate(180deg);}";
        styleElemOne.innerHTML = "#endPieChart:after {transform: rotate(0deg);}";
        styleElemTwo.innerHTML = "#endPieChart:after {border-color: #1cb5e0;}";
    }
}

function testGoBackDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'test-go-back-div';
    newElement.id = 'testGoBackDiv';
    document.body.appendChild(newElement);
    newElement.onclick = createTestGo;
}

function blueGreen(){
    let newElement = document.createElement('div');
    newElement.className = 'blue-green';
    newElement.id = 'blueGreen';
    document.getElementById('testGoBackDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

function photoWithGray(){
    let newElement = document.createElement('div');
    newElement.className = 'photo-with-gray';
    newElement.id = 'photoWithGray';
    document.getElementById('testGoBackDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
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

function filterDiv(){
    let newElement = document.createElement('div');
    newElement.className = 'filter-div';
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
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

function firstPreface(oneList){
    let newElement = document.createElement('p');
    newElement.className = 'first-preface';
    newElement.id = 'firstPreface';
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
    // filterDiv();
}

// 顯示選項

let getAllSelect = [];

function testThreeStart(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '每月能撥出多少費用學習？'
    testOneList(oneButton);
    let questionCount = '2/5';
    testTwoQuestionCount(questionCount);
    let threeSelectThree = '3000元以下';
    testThreeSelect(threeSelectThree);
    let threeSelectSix = '6000元內';
    testThreeSelect(threeSelectSix);
    let threeSelectTen = '10000元內';
    testThreeSelect(threeSelectTen);
    let threeSelectTenUp = '10001元以上';
    testThreeSelect(threeSelectTenUp);
    let threeSelectNotImportant = '不重要';
    testThreeSelect(threeSelectNotImportant);
    getAllSelect.push(event.target.textContent);
}

function testThreeSelect(threeSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testThreeSelect';
    newElement.textContent = threeSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testFourStart;
}

function testFourStart(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '每周能撥出多少時間學習？'
    testOneList(oneButton);
    let questionCount = '3/5';
    testTwoQuestionCount(questionCount);
    let fourSelectfifty = '16小時以下';
    testFourSelect(fourSelectfifty);
    let fourSelectThirty = '30小時內';
    testFourSelect(fourSelectThirty);
    let fourSelectFortyFive = '45小時內';
    testFourSelect(fourSelectFortyFive);
    let fourSelectFortyFiveUp = '46小時以上';
    testFourSelect(fourSelectFortyFiveUp);
    let fourSelectNotImportant = '不重要';
    testFourSelect(fourSelectNotImportant);
    getAllSelect.push(event.target.textContent);
}

function testFourSelect(fourSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testFourSelect';
    newElement.textContent = fourSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testFiveStart;
}

function testFiveStart(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '對班制的需求是？';
    testOneList(oneButton);
    let questionCount = '4/5';
    testTwoQuestionCount(questionCount);
    let fiveSelectBigClass = '大班制';
    testFiveSelect(fiveSelectBigClass);
    let fiveSelectsmallClass = '小班制';
    testFiveSelect(fiveSelectsmallClass);
    let fiveSelectOneWithOne = '一對一';
    testFiveSelect(fiveSelectOneWithOne);
    let fiveSelectNotImportant = '不重要';
    testFiveSelect(fiveSelectNotImportant);
    getAllSelect.push(event.target.textContent);
}

function testFiveSelect(fiveSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testFiveSelect';
    newElement.textContent = fiveSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testSixStart;
}

function testSixStart(event){
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
    getAllSelect.push(event.target.textContent);
}

function testSixSelect(sixSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testSixSelect';
    newElement.textContent = sixSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = testEndStart;
}

// 顯示結果 & 圓形動畫製作

function testEndStart(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneHeader = '你有多適合下列學校呢？';
    testOneList(oneHeader);
    endPieChart();
    whiteInPieChart();
    resultA();
    let endResult = '六角學院';
    forEndResult(endResult);
    getAllSelect.push(event.target.textContent);
    getAllSelectLogic();
}

function testEndSelect(endSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testEndSelect';
    newElement.textContent = endSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function endPieChart(){
    let newElement = document.createElement('div');
    newElement.className = 'end-pie-chart';
    newElement.id = 'endPieChart';
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function whiteInPieChart(){
    let newElement = document.createElement('div');
    newElement.className = 'white-in-pie-chart';
    newElement.id = 'whiteInPieChart';
    // newElement.textContent = '100%';
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function resultA(){
    let newElement = document.createElement('a');
    newElement.id = 'resultA';
    newElement.className = 'result-a';
    newElement.href = 'content.html';
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

function forEndResult(endResult){
    let newElement = document.createElement('p');
    newElement.className = 'for-end-result';
    newElement.id = 'forEndResult';
    // newElement.textContent = endResult;
    document.getElementById('resultA').appendChild(newElement);
}

// 遊戲邏輯
let getFirebaseData = database.ref("article");
let clientTotal = [];
// getAllSelect
function getAllSelectLogic(){
    
    // 城市
    if(getAllSelect[0] != '不重要'){
        getFirebaseData.orderByChild("city").equalTo(getAllSelect[0]).on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(getAllSelect[0] == '不重要'){
        getFirebaseData.orderByChild("skill").equalTo('前端').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }
    // 費用
    if(parseInt(getAllSelect[1])<=3000){
        getFirebaseData.orderByChild("fee").equalTo('0').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('1800').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('3000').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[1])<=6000){
        getFirebaseData.orderByChild("fee").equalTo('0').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('1800').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('3000').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('5000').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[1])<=10000){
        getFirebaseData.orderByChild("fee").equalTo('0').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('1800').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('3000').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("fee").equalTo('5000').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[1])>10000){
      
    }else if(getAllSelect[1] == '不重要'){
        getFirebaseData.orderByChild("skill").equalTo('前端').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }
    // 每周時數
    if(parseInt(getAllSelect[2])<=16){
        getFirebaseData.orderByChild("weekHour").equalTo('16').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[2])<=30){
        getFirebaseData.orderByChild("weekHour").equalTo('16').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("weekHour").equalTo('18').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("weekHour").equalTo('20').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[2])<=45){
        getFirebaseData.orderByChild("weekHour").equalTo('16').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("weekHour").equalTo('18').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("weekHour").equalTo('20').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("weekHour").equalTo('32').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild("weekHour").equalTo('40').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[2])>45){
        
    }else if(getAllSelect[2] == '不重要'){
        getFirebaseData.orderByChild("skill").equalTo('前端').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }
    // 班制
    if(getAllSelect[3] != '不重要'){
        getFirebaseData.orderByChild("classType").equalTo(getAllSelect[3]).on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(getAllSelect[3] == '不重要'){
        getFirebaseData.orderByChild("skill").equalTo('前端').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }
    // 教學制度
    if(getAllSelect[4] != '不重要'){
        getFirebaseData.orderByChild("teachWay").equalTo(getAllSelect[4]).on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(getAllSelect[4] == '不重要'){
        getFirebaseData.orderByChild("skill").equalTo('前端').on("child_added", function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }
    
    // 取得重複最高的值
    setTimeout(maxValue, 3000); 

    // console.log(snapshot.val().name);

}

const pseudoPieChart = document.getElementById('endPieChart');
let styleElem = document.head.appendChild(document.createElement("style"));
let styleElemOne = document.head.appendChild(document.createElement("style"));
let styleElemTwo = document.head.appendChild(document.createElement("style"));

function maxValue(){
    let modeMap = {};
    let maxEl = clientTotal[0];
    let maxCount = 1;
    for(let i = 0; i < clientTotal.length; i++)
    {
        let el = clientTotal[i];
        console.log(el)
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }

    if(maxCount == 5){
        maxCount = '100%';
        
    }else if(maxCount == 4){
        maxCount = '80%';
        styleElem.innerHTML = "#endPieChart:before {transform: rotate(108deg);}";
    }else if(maxCount == 3){
        maxCount = '60%';
        styleElem.innerHTML = "#endPieChart:before {transform: rotate(36deg);}";
    }else if(maxCount == 2){
        maxCount = '40%'
        styleElem.innerHTML = "#endPieChart:before {transform: rotate(0deg);}";
        styleElemOne.innerHTML = "#endPieChart:after {transform: rotate(144deg);}";
        styleElemTwo.innerHTML = "#endPieChart:after {border-color: rgb(26,216,211);}";
    }else if(maxCount == 1){
        maxCount = '20%'
        styleElem.innerHTML = "#endPieChart:before {transform: rotate(0deg);}";
        styleElemOne.innerHTML = "#endPieChart:after {transform: rotate(72deg);}";
        styleElemTwo.innerHTML = "#endPieChart:after {border-color: rgb(26,216,211);}";
    }else if(maxCount == 0){
        maxCount = '0%'
    }

    console.log(maxEl)
    console.log(maxCount)
    document.getElementById('forEndResult').textContent = maxEl;
    document.getElementById('whiteInPieChart').textContent = maxCount;

    getFirebaseData.orderByChild("name").equalTo(maxEl).on("child_added", function(snapshot) {
        document.getElementById('resultA').setAttribute('href', "/Front-Enter/content.html?id=" + snapshot.val().creatTime);
    });  

    // 清空
    getAllSelect = [];
    clientTotal = [];

}