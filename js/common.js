//when scrolling, change header
app.get('#headerP3').addEventListener('mouseover', function(){
    app.get('#headerP3').style.color='rgb(26, 216, 211)';
});
app.get('#headerP3').addEventListener('mouseout', function(){
    app.get('#headerP3').style.color='rgb(128, 128, 128)';
})
window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop > 0){
        app.get('#header').style.animation = 'headerBackgroundOut 5s ease 0s 1 alternate forwards';
        if(userLogin && userLogin.emailVerified == true){
            app.get('#headerP3').style.color = 'rgb(128, 128, 128)';
            app.get('#headerP3').textContent = '會員';
            if(userLogin.photoURL){
                app.get('#headerP3').textContent = '';
            }
            app.get('#headerP3').style.cursor = 'pointer';
        }
      }else if(document.documentElement.scrollTop<100){
        app.get('#header').style.animation = 'headerBackgroundIn 1s ease 0s 1 alternate';
        if(userLogin && userLogin.emailVerified == true){
            app.get('#headerP3').style.color = 'rgb(128, 128, 128)';
            app.get('#headerP3').textContent = '會員';
            if(userLogin.photoURL){
                app.get('#headerP3').textContent = '';
            }
            app.get('#headerP3').style.cursor = 'pointer';
        }else{
        }
      }
}
);

// back to top
window.onload = function() {
    // detect log in and change word
    if(userLogin && userLogin.emailVerified == true){
        app.get('#headerP3').style.color = 'rgb(128, 128, 128)';
        app.get('#headerP3').style.cursor = 'pointer';
        app.get('#headerP3').addEventListener('mouseenter',function(){
            app.get('#headerP3').style.color = 'rgb(26, 216, 211)';
        });
        app.get('#headerP3').addEventListener('mouseleave',function changeColorAgain(){
            app.get('#headerP3').style.color = 'rgb(128, 128, 128)';
        })
    }
    let timer = null;
    let isTop = true;
    app.get('#tops').onclick = function(){
        // set timeout
        timer = setInterval(function(){
            // get scroll height
            let osTop = document.documentElement.scrollTop || document.body.scrollTop ;  // deal IE、Chrome
            // lower speed 
            let isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            isTop = true;
            //clear timer
            if (osTop == 0) {
                clearInterval(timer);
            }
        },30);
    };  
}

// search
let countClick = 0;
app.get('#webSearch').addEventListener('click', startSearch);
function startSearch(){
    if(countClick==0){
        app.search.createSearchDiv();
        app.search.createSearchWhiteDiv();
        app.createElement('div', 'whiteDivLeft', 'whiteDivLeft', 'fullSearchWhiteDiv', '', '');
        app.createElement('p', 'whiteDivLeftText', '', 'whiteDivLeft', 'SEARCH', '');
        app.search.createWhiteDivLeftBox();
        app.search.createLeftInput();
        app.search.createVoiceButton();
        app.search.createLeftButton();
        countClick++;
    }else{
        let child=document.getElementById('fullSearchDiv');
        document.body.removeChild(child);
        let anotherChild=document.getElementById('fullSearchWhiteDiv');
        document.body.removeChild(anotherChild);
        countClick--;
    }
}

app.search.createSearchDiv = function(){
    let newElement = document.createElement('div');
    newElement.id = 'fullSearchDiv';
    newElement.className = 'fullSearchDiv';
    document.body.appendChild(newElement);
    newElement.onclick = function(){
        startSearch();
    }
}

app.search.createSearchWhiteDiv = function(){
    let newElement = document.createElement('div');
    newElement.id = 'fullSearchWhiteDiv';
    newElement.className = 'fullSearchWhiteDiv';
    document.body.appendChild(newElement);
}

app.search.createWhiteDivLeftBox = function(){
    let newElement = document.createElement('form');
    newElement.id = 'whiteDivLeftBox';
    newElement.className = 'whiteDivLeftBox';
    newElement.onsubmit = 'return searchToArticle()';
    document.getElementById('whiteDivLeft').appendChild(newElement);
}

app.search.createLeftInput = function(){
    let newElement = document.createElement('input');
    newElement.className = 'leftInput speech';
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

app.search.createVoiceButton = function(){
    let newElement = document.createElement('div');
    newElement.className = 'voiceButton start';
    document.getElementById('whiteDivLeftBox').appendChild(newElement);
    newElement.onclick = function(){
    let isFirefox = navigator.userAgent.search('Firefox') > -1;
    if(isFirefox){
        let startBtn = document.querySelector('.start');
        startBtn.style.display = 'none';
    }
    if(!isFirefox){
        const text = document.querySelector('.speech');
        const startBtn = document.querySelector('.start');
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition()
        // set params
        recognition.continuous = false;
        recognition.lang = 'zh-TW';
        recognition.interimResults = true;
        // start immediately
        // recognition.start();
        recognition.onresult = function(event) {
            var result = event.results[event.results.length - 1];
            text.value = result[result.length - 1 ].transcript;
        }
        // speech error handling
        recognition.onerror = function(event){
        }
        recognition.onend = function() {
            // auto restart
            recognition.start();
            if(text.value == ''){
                startBtn.style.display = 'block';
            }else{
                window.location='article.html?id=' + text.value;
            }
        }
            recognition.start();
            this.style.display = 'none';
    }
    }
}

app.search.createLeftButton = function(){
    let newElement = document.createElement('div');
    newElement.className = 'leftButton';
    document.getElementById('whiteDivLeftBox').appendChild(newElement);
    newElement.onclick = function(){
        window.location = 'article.html?id='+document.getElementById('leftInput').value ; 
    }
}

// test GO
app.get('#testGo').addEventListener('click', createTestGo)
// home page button
if(app.get('#homeTestGo')){
    app.get('#homeTestGo').addEventListener('click', createTestGo)
}
function createTestGo(){
    if(countClick==0){
        app.testGo.testGoBackDiv();
        app.testGo.createBlueGreen();
        app.testGo.createPhotoWithGray();
        app.testGo.testGoWhiteDiv();
        app.createElement('p', 'test-one-header', 'testOneHeader', 'testGoWhiteDiv', '測驗說明', '');
        app.testGo.createFirstPreface('點選「開始測驗」後，系統將根據你的回答，找出最適合你的學習環境，並顯示有多少百分比的合適度。');
        app.testGo.testOneButton('開始測驗');
        countClick++;
    }else{
        let child=document.getElementById('testGoBackDiv');
        document.body.removeChild(child);
        countClick--;
        // clear
        getAllSelect = [];
        clientTotal = [];
        styleElem.innerHTML = '#endPieChart:before {transform: rotate(180deg);}';
        styleElemOne.innerHTML = '#endPieChart:after {transform: rotate(0deg);}';
        styleElemTwo.innerHTML = '#endPieChart:after {border-color: #1cb5e0;}';
    }
}

app.testGo.testGoBackDiv =function(){
    let newElement = document.createElement('div');
    newElement.className = 'test-go-back-div';
    newElement.id = 'testGoBackDiv';
    document.body.appendChild(newElement);
    newElement.onclick = createTestGo;
}

app.testGo.createBlueGreen = function(){
    let newElement = document.createElement('div');
    newElement.className = 'blue-green';
    newElement.id = 'blueGreen';
    document.getElementById('testGoBackDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

app.testGo.createPhotoWithGray = function(){
    let newElement = document.createElement('div');
    newElement.className = 'photo-with-gray';
    newElement.id = 'photoWithGray';
    document.getElementById('testGoBackDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

app.testGo.testGoWhiteDiv = function(){
    let newElement = document.createElement('div');
    newElement.className = 'test-go-white-div';
    newElement.id = 'testGoWhiteDiv';
    document.getElementById('testGoBackDiv').appendChild(newElement);
    newElement.onclick = function(event){
        event.stopPropagation();
    }
}

app.testGo.testOneList = function(oneList){
    app.createElement('p', 'test-one-list', 'testOneList', 'testGoWhiteDiv', oneList, '');
}

app.testGo.createFirstPreface = function(oneList){
    app.createElement('p', 'first-preface', 'firstPreface', 'testGoWhiteDiv', oneList, '');
}

// first test GO button
app.testGo.testOneButton = function(oneButton){
    let newElement = document.createElement('p');
    newElement.className = 'test-one-button';
    newElement.id = 'testOneButton';
    newElement.textContent = oneButton;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = app.testGo.testTwoStart;
}

app.testGo.testTwoQuestionCount = function(questionCount){
    app.createElement('p', 'test-two-question-count', 'testTwoQuestionCount', 'testGoWhiteDiv', questionCount, '');
}

app.testGo.testTwoSelect = function(twoSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testTwoSelect';
    newElement.textContent = twoSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = app.testGo.testThreeStart;
}

app.testGo.testTwoStart = function(){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    app.testGo.testOneList('選擇在哪座城市學習？');
    app.testGo.testTwoQuestionCount('1/5');
    app.testGo.testTwoSelect('台北');
    app.testGo.testTwoSelect('台中');
    app.testGo.testTwoSelect('高雄');
    app.testGo.testTwoSelect('各地');
    app.testGo.testTwoSelect('不重要');
}

// display question
let getAllSelect = [];
app.testGo.testThreeStart = function(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    app.testGo.testOneList('每月能撥出多少費用學習？');
    app.testGo.testTwoQuestionCount('2/5');
    app.testGo.testThreeSelect('3000元以下');
    app.testGo.testThreeSelect('6000元內');
    app.testGo.testThreeSelect('10000元內');
    app.testGo.testThreeSelect('10001元以上');
    app.testGo.testThreeSelect('不重要');
    getAllSelect.push(event.target.textContent);
}

app.testGo.testThreeSelect = function(threeSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testThreeSelect';
    newElement.textContent = threeSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = app.testGo.testFourStart;
}

app.testGo.testFourStart = function(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    let oneButton = '每周能撥出多少時間學習？'
    app.testGo.testOneList('每周能撥出多少時間學習？');
    app.testGo.testTwoQuestionCount('3/5');
    app.testGo.testFourSelect('16小時以下');
    app.testGo.testFourSelect('30小時內');
    app.testGo.testFourSelect('45小時內');
    app.testGo.testFourSelect('46小時以上');
    app.testGo.testFourSelect('不重要');
    getAllSelect.push(event.target.textContent);
}

app.testGo.testFourSelect = function(fourSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testFourSelect';
    newElement.textContent = fourSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = app.testGo.testFiveStart;
}

app.testGo.testFiveStart = function(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    app.testGo.testOneList('對班制的需求是？');
    app.testGo.testTwoQuestionCount('4/5');
    app.testGo.testFiveSelect('大班制');
    app.testGo.testFiveSelect('小班制');
    app.testGo.testFiveSelect('一對一');
    app.testGo.testFiveSelect('不重要');
    getAllSelect.push(event.target.textContent);
}

app.testGo.testFiveSelect = function(fiveSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testFiveSelect';
    newElement.textContent = fiveSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = app.testGo.testSixStart;
}

app.testGo.testSixStart = function(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    app.testGo.testOneList('喜歡什麼樣的教學方式？');
    app.testGo.testTwoQuestionCount('5/5');
    app.testGo.testSixSelect('放養制');
    app.testGo.testSixSelect('手把手教制');
    app.testGo.testSixSelect('不重要');
    getAllSelect.push(event.target.textContent);
}

app.testGo.testSixSelect = function(sixSelect){
    let newElement = document.createElement('p');
    newElement.className = 'test-two-select';
    newElement.id = 'testSixSelect';
    newElement.textContent = sixSelect;
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
    newElement.onclick = app.testGo.testEndStart;
}

// display result & pie chart making
app.testGo.testEndStart = function(event){
    document.getElementById('testGoWhiteDiv').innerHTML = '';
    app.testGo.testOneList('你有多適合下列學校呢？');
    app.testGo.endPieChart();
    app.testGo.whiteInPieChart();
    app.testGo.resultA();
    app.testGo.forEndResult('六角學院');
    getAllSelect.push(event.target.textContent);
    app.testGo.getAllSelectLogic();
}

app.testGo.testEndSelect = function(endSelect){
    app.createElement('p', 'test-two-select', 'testEndSelect', 'testGoWhiteDiv', endSelect, '');
}

app.testGo.endPieChart = function(){
    app.createElement('div', 'end-pie-chart', 'endPieChart', 'testGoWhiteDiv', '', '');
}

app.testGo.whiteInPieChart = function(){
    app.createElement('div', 'white-in-pie-chart', 'whiteInPieChart', 'testGoWhiteDiv', '', '');
}

app.testGo.resultA = function(){
    let newElement = document.createElement('a');
    newElement.id = 'resultA';
    newElement.className = 'result-a';
    newElement.href = 'content.html';
    document.getElementById('testGoWhiteDiv').appendChild(newElement);
}

app.testGo.forEndResult = function(){
    app.createElement('p', 'for-end-result', 'forEndResult', 'resultA', '', '');
}

// game logic
let getFirebaseData = database.ref('article');
let clientTotal = [];
app.testGo.getAllSelectLogic = function(){
    // city
    if(getAllSelect[0] != '不重要'){
        getFirebaseData.orderByChild('city').equalTo(getAllSelect[0]).on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(getAllSelect[0] == '不重要'){
        getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
        });  
    }
    // fee
    if(parseInt(getAllSelect[1])<=3000){
        getFirebaseData.orderByChild('fee').equalTo('0').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('1800').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('3000').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[1])<=6000){
        getFirebaseData.orderByChild('fee').equalTo('0').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('1800').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('3000').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('5000').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[1])<=10000){
        getFirebaseData.orderByChild('fee').equalTo('0').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('1800').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('3000').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('fee').equalTo('5000').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[1])>10000){
      
    }else if(getAllSelect[1] == '不重要'){
        getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
        });  
    }
    // week hour
    if(parseInt(getAllSelect[2])<=16){
        getFirebaseData.orderByChild('weekHour').equalTo('16').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[2])<=30){
        getFirebaseData.orderByChild('weekHour').equalTo('16').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('weekHour').equalTo('18').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('weekHour').equalTo('20').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[2])<=45){
        getFirebaseData.orderByChild('weekHour').equalTo('16').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('weekHour').equalTo('18').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('weekHour').equalTo('20').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('weekHour').equalTo('32').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
        getFirebaseData.orderByChild('weekHour').equalTo('40').on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(parseInt(getAllSelect[2])>45){
        
    }else if(getAllSelect[2] == '不重要'){
        getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
        });  
    }
    // class type
    if(getAllSelect[3] != '不重要'){
        getFirebaseData.orderByChild('classType').equalTo(getAllSelect[3]).on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(getAllSelect[3] == '不重要'){
        getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
        });  
    }
    // teach way
    if(getAllSelect[4] != '不重要'){
        getFirebaseData.orderByChild('teachWay').equalTo(getAllSelect[4]).on('child_added', function(snapshot) {
            clientTotal.push(snapshot.val().name)
        });  
    }else if(getAllSelect[4] == '不重要'){
        getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
        });  
    }
    
    // get heightest value
    setTimeout(app.testGo.maxValue, 3000); 
}

let styleElem = document.head.appendChild(document.createElement('style'));
let styleElemOne = document.head.appendChild(document.createElement('style'));
let styleElemTwo = document.head.appendChild(document.createElement('style'));
app.testGo.maxValue = function(){
    let modeMap = {};
    let maxEl = clientTotal[0];
    let maxCount = 1;
    for(let i = 0; i < clientTotal.length; i++)
    {
        let el = clientTotal[i];
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
        styleElem.innerHTML = '#endPieChart:before {transform: rotate(108deg);}';
    }else if(maxCount == 3){
        maxCount = '60%';
        styleElem.innerHTML = '#endPieChart:before {transform: rotate(36deg);}';
    }else if(maxCount == 2){
        maxCount = '40%'
        styleElem.innerHTML = '#endPieChart:before {transform: rotate(0deg);}';
        styleElemOne.innerHTML = '#endPieChart:after {transform: rotate(144deg);}';
        styleElemTwo.innerHTML = '#endPieChart:after {border-color: rgb(26,216,211);}';
    }else if(maxCount == 1){
        maxCount = '20%';
        styleElem.innerHTML = '#endPieChart:before {transform: rotate(0deg);}';
        styleElemOne.innerHTML = '#endPieChart:after {transform: rotate(72deg);}';
        styleElemTwo.innerHTML = '#endPieChart:after {border-color: rgb(26,216,211);}';
    }else if(maxCount == 0){
        maxCount = '0%';
    }
    document.getElementById('forEndResult').textContent = maxEl;
    document.getElementById('whiteInPieChart').textContent = maxCount;
    getFirebaseData.orderByChild('name').equalTo(maxEl).on('child_added', function(snapshot) {
        document.getElementById('resultA').setAttribute('href', '/Front-Enter/content.html?id=' + snapshot.val().creatTime);
    });  
    // clear
    getAllSelect = [];
    clientTotal = [];
}