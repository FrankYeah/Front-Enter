// 所有的 DOM

// 問題開關

const questionDiv = document.getElementById('questionDiv');
const questionHead = document.getElementById('questionHead');
const htmlAnswerOne = document.getElementById('htmlAnswerOne');
const htmlAnswerTwo = document.getElementById('htmlAnswerTwo');
const htmlAnswerThree = document.getElementById('htmlAnswerThree');
const htmlB = document.getElementById('htmlB');
const htmlOne = document.getElementById('htmlOne');
const cssB = document.getElementById('cssB');
const cssOne = document.getElementById('cssOne');
const jsB = document.getElementById('jsB');
const jsOne = document.getElementById('jsOne');
const jsTwo = document.getElementById('jsTwo');
const jQueryB = document.getElementById('jQueryB');
const iQueryOne = document.getElementById('iQueryOne');
const domB = document.getElementById('domB');
const domOne = document.getElementById('domOne');
const ajaxB = document.getElementById('ajaxB');
const ajaxOne = document.getElementById('ajaxOne');
const ajaxTwo = document.getElementById('ajaxTwo');
const es6B = document.getElementById('es6B');
const jsonB = document.getElementById('jsonB');
const es6One = document.getElementById('es6One');
const jsonOne = document.getElementById('jsonOne');
const spaB = document.getElementById('spaB');
const apisB = document.getElementById('apisB');
const spaOne = document.getElementById('spaOne');
const apisOne = document.getElementById('apisOne');
const tddB = document.getElementById('tddB');
const showDivRight = document.getElementById('showDivRight');
const showDivLeft = document.getElementById('showDivLeft');
const questionBox = document.getElementById('questionBox');
const userIcon = document.getElementById('userIcon');
const finalPass = document.getElementById('finalPass');

// 點擊空白關閉視窗

questionBox.addEventListener('click', function(event){
    event.stopPropagation();
    questionDiv.style.display = 'none';
    htmlAnswerTwo.style.animation = "";
    htmlAnswerThree.style.animation = "";
    htmlAnswerOne.style.background= '';
    htmlAnswerTwo.style.background= '';
    htmlAnswerThree.style.background= '';
})

questionDiv.addEventListener('click', closeMyQ);
let QClick = 0;
function closeMyQ(){
    if(QClick==0){
        questionDiv.style.display = 'none';
        htmlAnswerTwo.style.animation = "";
        htmlAnswerThree.style.animation = "";
        htmlAnswerOne.style.background= '';
        htmlAnswerTwo.style.background= '';
        htmlAnswerThree.style.background= '';
    }else{
    }
}

// 更換遊戲頭貼
setTimeout(replaceIcon,3000 );

function replaceIcon(){
    if(userLogin.photoURL){
        userIcon.style.background = "url('" + userLogin.photoURL + "')"; 
        userIcon.style.backgroundPosition= 'center';
        userIcon.style.backgroundSize= 'cover';
        userIcon.style.backgroundRepeat= 'no-repeat';
    }
}
// html

htmlB.addEventListener('click', htmlPass);

function htmlPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = ' 請問 HTML 是什麼？';
    htmlAnswerOne.textContent = '標籤語言';
    htmlAnswerTwo.textContent = '資料庫工具';
    htmlAnswerThree.textContent = '瀏覽器規範';
    htmlAnswerOne.addEventListener('click', htmlGuestRight);
    htmlAnswerTwo.addEventListener('click', htmlGuestWrongTwo);
    htmlAnswerThree.addEventListener('click', htmlGuestWrongThree);
}

function htmlGuestWrongTwo(event){
    event.stopPropagation();
    htmlAnswerTwo.style.animation = "wobbleHorizontal 0.4s ease 0s 1 alternate";
    htmlAnswerTwo.style.background= 'url(../images/cancel-FC4803.svg)';
    htmlAnswerTwo.style.backgroundSize= 'contain';
    htmlAnswerTwo.style.backgroundColor= 'white';
    htmlAnswerTwo.style.backgroundRepeat= 'no-repeat';
    htmlAnswerTwo.style.backgroundOrigin = 'content-box';
    // answerIsWrong();
}

function htmlGuestWrongThree(event){
    event.stopPropagation();
    htmlAnswerThree.style.animation = "wobbleHorizontal 0.4s ease 0s 1 alternate";
    htmlAnswerThree.style.background= 'url(../images/cancel-FC4803.svg)';
    htmlAnswerThree.style.backgroundSize= 'contain';
    htmlAnswerThree.style.backgroundColor= 'white';
    htmlAnswerThree.style. backgroundRepeat= 'no-repeat';
    htmlAnswerThree.style.backgroundOrigin = 'content-box';
    // answerIsWrong();
}

function htmlGuestRight(event){
    event.stopPropagation();
    htmlAnswerOne.style.background= 'url(../images/checked-FFD800.svg)';
    htmlAnswerOne.style.backgroundSize= 'contain';
    htmlAnswerOne.style.backgroundColor= 'white';
    htmlAnswerOne.style. backgroundRepeat= 'no-repeat';
    htmlAnswerOne.style.backgroundOrigin = 'content-box';
    htmlLayout();
    htmlAnswerTwo.style.animation = "";
    htmlAnswerThree.style.animation = "";
    userIcon.style.top = '10.2%';
    userIcon.style.left = '40%';

}

function htmlLayout(){
    htmlB.style.backgroundColor = 'rgb(26, 216, 211)';
    htmlB.style.color = 'white';
    htmlOne.style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    cssB.style.cursor = 'pointer';
    cssB.style.color = 'rgb(26, 216, 211)';
    cssB.style.border = '1px solid rgb(26, 216, 211)';
}

// css 

cssB.addEventListener('click', function(){
    if(cssB.style.cursor){
        cssPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function cssPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = ' SCSS 跟 CSS 差別？';
    htmlAnswerOne.textContent = 'SCSS 用變數控制';
    htmlAnswerTwo.textContent = 'SCSS 非縮排語法';
    htmlAnswerThree.textContent = '不同程式語言';
    htmlAnswerOne.addEventListener('click', cssGuestRight);
}

function cssGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    cssLayout();
    userIcon.style.top = '10.2%';
    userIcon.style.left = '55%';
}

function cssLayout(){
    cssB.style.backgroundColor = 'rgb(26, 216, 211)';
    cssB.style.color = 'white';
    cssOne.style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    jsB.style.cursor = 'pointer';
    jsB.style.color = 'rgb(26, 216, 211)';
    jsB.style.border = '1px solid rgb(26, 216, 211)';
}

// js 

jsB.addEventListener('click', function(){
    if(jsB.style.cursor){
        jsPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function jsPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = '何者非 JS 定義變數的方式？';
    htmlAnswerOne.textContent = 'function';
    htmlAnswerTwo.textContent = 'var';
    htmlAnswerThree.textContent = 'let';
    htmlAnswerOne.addEventListener('click', jsGuestRight);
}

function jsGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    jsLayout();
    userIcon.style.top = '20.2%';
    userIcon.style.left = '53%';
}

function jsLayout(){
    jsB.style.backgroundColor = 'rgb(26, 216, 211)';
    jsB.style.color = 'white';
    jsOne.style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    jsTwo.style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    jQueryB.style.cursor = 'pointer';
    jQueryB.style.color = 'rgb(26, 216, 211)';
    jQueryB.style.border = '1px solid rgb(26, 216, 211)';
    domB.style.cursor = 'pointer';
    domB.style.color = 'rgb(26, 216, 211)';
    domB.style.border = '1px solid rgb(26, 216, 211)';
}

// jQuery

jQueryB.addEventListener('click', function(){
    if(jQueryB.style.cursor){
        jQueryPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function jQueryPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = 'jQuery 與 JS 之比較何者正確？';
    htmlAnswerOne.textContent = 'jQuery 含錢字符號';
    htmlAnswerTwo.textContent = 'JS 是一種框架';
    htmlAnswerThree.textContent = 'jQuery 並未開源';
    htmlAnswerOne.addEventListener('click', jQueryGuestRight);
}

function jQueryGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    jQueryLayout();
    userIcon.style.top = '20.2%';
    userIcon.style.left = '42%';
}

function jQueryLayout(){
    jQueryB.style.backgroundColor = 'rgb(26, 216, 211)';
    jQueryB.style.color = 'white';
}

// DOM

domB.addEventListener('click', function(){
    if(domB.style.cursor){
        domPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function domPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = 'DOM 屬於？';
    htmlAnswerOne.textContent = '瀏覽器上的元素';
    htmlAnswerTwo.textContent = '操作瀏覽器的語言';
    htmlAnswerThree.textContent = '簡化版的 HTML';
    htmlAnswerOne.addEventListener('click', domGuestRight);
}

function domGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    domLayout();
    userIcon.style.top = '31.7%';
    userIcon.style.left = '48.5%';
}

function domLayout(){
    domB.style.backgroundColor = 'rgb(26, 216, 211)';
    domB.style.color = 'white';
    domOne.style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    ajaxB.style.cursor = 'pointer';
    ajaxB.style.color = 'rgb(26, 216, 211)';
    ajaxB.style.border = '1px solid rgb(26, 216, 211)';
}

//ajax

ajaxB.addEventListener('click', function(){
    if(ajaxB.style.cursor){
        ajaxPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function ajaxPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = 'AJAX 能做什麼？';
    htmlAnswerOne.textContent = '動態載入 DOM';
    htmlAnswerTwo.textContent = '加速伺服器連線';
    htmlAnswerThree.textContent = '安全加密的方式';
    htmlAnswerOne.addEventListener('click', ajaxGuestRight);
}

function ajaxGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    ajaxLayout();
    userIcon.style.top = '42.6%';
    userIcon.style.left = '48.5%';
}

function ajaxLayout(){
    ajaxB.style.backgroundColor = 'rgb(26, 216, 211)';
    ajaxB.style.color = 'white';
    ajaxOne.style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    ajaxTwo.style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    es6B.style.cursor = 'pointer';
    es6B.style.color = 'rgb(26, 216, 211)';
    es6B.style.border = '1px solid rgb(26, 216, 211)';
    jsonB.style.cursor = 'pointer';
    jsonB.style.color = 'rgb(26, 216, 211)';
    jsonB.style.border = '1px solid rgb(26, 216, 211)';
}

// ES6

es6B.addEventListener('click', function(){
    if(es6B.style.cursor){
        es6Pass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function es6Pass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = '哪個不是 ES6 的新功能？';
    htmlAnswerOne.textContent = 'await 異步處理';
    htmlAnswerTwo.textContent = '箭頭符號';
    htmlAnswerThree.textContent = 'let、const 變數';
    htmlAnswerOne.addEventListener('click', es6GuestRight);
}

function es6GuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    es6Layout();
    userIcon.style.top = '42.6%';
    userIcon.style.left = '40.9%';
}

function es6Layout(){
    es6B.style.backgroundColor = 'rgb(26, 216, 211)';
    es6B.style.color = 'white';
    es6One.style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    spaB.style.cursor = 'pointer';
    spaB.style.color = 'rgb(26, 216, 211)';
    spaB.style.border = '1px solid rgb(26, 216, 211)';
}

// json

jsonB.addEventListener('click', function(){
    if(jsonB.style.cursor){
        jsonPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function jsonPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = 'JSON 是什麼？';
    htmlAnswerOne.textContent = '資料庫常用的結構';
    htmlAnswerTwo.textContent = '操作事件的工具';
    htmlAnswerThree.textContent = '正規表達式';
    htmlAnswerOne.addEventListener('click', jsonGuestRight);
}

function jsonGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    jsonLayout();
    userIcon.style.top = '42.6%';
    userIcon.style.left = '55.9%';
}

function jsonLayout(){
    jsonB.style.backgroundColor = 'rgb(26, 216, 211)';
    jsonB.style.color = 'white';
    jsonOne.style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    apisB.style.cursor = 'pointer';
    apisB.style.color = 'rgb(26, 216, 211)';
    apisB.style.border = '1px solid rgb(26, 216, 211)';
}

// SPA

spaB.addEventListener('click', function(){
    if(spaB.style.cursor){
        spaPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function spaPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = '哪種框架屬於 SPA？';
    htmlAnswerOne.textContent = 'React';
    htmlAnswerTwo.textContent = 'Vue';
    htmlAnswerThree.textContent = 'Regular';
    htmlAnswerOne.addEventListener('click', spaGuestRight);
}

function spaGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    spaLayout();
    userIcon.style.top = '53.1%';
    userIcon.style.left = '39.4%';
}

function spaLayout(){
    spaB.style.backgroundColor = 'rgb(26, 216, 211)';
    spaB.style.color = 'white';
}

// APIs

apisB.addEventListener('click', function(){
    if(apisB.style.cursor){
        apisPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function apisPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = '下列何者是接 APIs 的方式？';
    htmlAnswerOne.textContent = 'Fetch';
    htmlAnswerTwo.textContent = 'HTTPs';
    htmlAnswerThree.textContent = 'Promise';
    htmlAnswerOne.addEventListener('click', apisGuestRight);
}

function apisGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    apisLayout();
    userIcon.style.top = '53.1%';
    userIcon.style.left = '57.3%';
}

function apisLayout(){
    apisB.style.backgroundColor = 'rgb(26, 216, 211)';
    apisB.style.color = 'white';
    apisOne.style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    tddB.style.cursor = 'pointer';
    tddB.style.color = 'rgb(26, 216, 211)';
    tddB.style.border = '1px solid rgb(26, 216, 211)';
}

// TDD

tddB.addEventListener('click', function(){
    if(tddB.style.cursor){
        tddPass();
    }else{
        console.log(cssB.style.cursor);
    }
});

function tddPass(){
    questionDiv.style.display = 'flex';
    questionHead.textContent = '為什麼要做 TDD？';
    htmlAnswerOne.textContent = '確保程式邏輯正確';
    htmlAnswerTwo.textContent = '讓 scrum 運作順利';
    htmlAnswerThree.textContent = '資料安全性';
    htmlAnswerOne.addEventListener('click', tddGuestRight);
}

function tddGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    tddLayout();
    userIcon.style.top = '63.8%';
    userIcon.style.left = '49%';
}

function tddLayout(){
    tddB.style.backgroundColor = 'rgb(26, 216, 211)';
    tddB.style.color = 'white';
}

// 滑鼠移入事件

// html

htmlB.addEventListener('mouseover', showBoxRight);
htmlB.addEventListener('mouseleave', noneBoxRight);

function showBoxRight(){
    htmlB.style.width = '105px';
    htmlB.style.height = '32px';
    htmlB.style.lineHeight = '32px';
    htmlB.style.fontSize = '17px';
    showDivRight.style.top = '40px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'HTML <br><br> 超文件標示語言（英語：HyperText Markup Language，簡稱：HTML）是一種用於建立網頁的標準標示語言。 <br><br>';
}

function noneBoxRight(){
    htmlB.style.width = '100px';
    htmlB.style.height = '30px';
    htmlB.style.lineHeight = '30px';
    htmlB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// js

jsB.addEventListener('mouseover', showBoxRightJs);
jsB.addEventListener('mouseleave', noneBoxRightJs);

function showBoxRightJs(){
    jsB.style.width = '105px';
    jsB.style.height = '32px';
    jsB.style.lineHeight = '35px';
    jsB.style.fontSize = '18px';
    showDivRight.style.top = '140px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'JavaScript <br><br> JavaScript 是一門基於原型、函式先行的語言，是一門多範式的語言，它支援物件導向編程，指令式程式設計，以及函數語言程式設計。 <br><br>';
}

function noneBoxRightJs(){
    jsB.style.width = '100px';
    jsB.style.height = '30px';
    jsB.style.lineHeight = '30px';
    jsB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// dom

domB.addEventListener('mouseover', showBoxRightDom);
domB.addEventListener('mouseleave', noneBoxRightDom);

function showBoxRightDom(){
    domB.style.width = '105px';
    domB.style.height = '32px';
    domB.style.lineHeight = '35px';
    domB.style.fontSize = '18px';
    showDivRight.style.top = '240px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'DOM <br><br> 文件物件模型（英語：Document Object Model，縮寫 DOM），是 W3C 組織推薦的處理可延伸標示語言的標準程式埠。 <br><br>';
}

function noneBoxRightDom(){
    domB.style.width = '100px';
    domB.style.height = '30px';
    domB.style.lineHeight = '30px';
    domB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// ajax

ajaxB.addEventListener('mouseover', showBoxRightAjax);
ajaxB.addEventListener('mouseleave', noneBoxRightAjax);

function showBoxRightAjax(){
    ajaxB.style.width = '105px';
    ajaxB.style.height = '32px';
    ajaxB.style.lineHeight = '35px';
    ajaxB.style.fontSize = '18px';
    showDivRight.style.top = '335px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'AJAX <br><br> AJAX 即「Asynchronous JavaScript and XML」（非同步的 JavaScript 與 XML 技術），指的是一套綜合了多項技術的瀏覽器端網頁開發技術。 <br><br>';
}

function noneBoxRightAjax(){
    ajaxB.style.width = '100px';
    ajaxB.style.height = '30px';
    ajaxB.style.lineHeight = '30px';
    ajaxB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// json

jsonB.addEventListener('mouseover', showBoxRightJson);
jsonB.addEventListener('mouseleave', noneBoxRightJson);

function showBoxRightJson(){
    jsonB.style.width = '105px';
    jsonB.style.height = '32px';
    jsonB.style.lineHeight = '35px';
    jsonB.style.fontSize = '18px';
    showDivRight.style.top = '435px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'JSON <br><br> JSON（JavaScript Object Notation）是一種輕量級的資料交換語言，該語言以易於讓人閱讀的文字為基礎，用來傳輸由屬性值或者序列性的值組成的資料物件。 <br><br>';
}

function noneBoxRightJson(){
    jsonB.style.width = '100px';
    jsonB.style.height = '30px';
    jsonB.style.lineHeight = '30px';
    jsonB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// APIs

apisB.addEventListener('mouseover', showBoxRightApis);
apisB.addEventListener('mouseleave', noneBoxRightApis);

function showBoxRightApis(){
    apisB.style.width = '105px';
    apisB.style.height = '32px';
    apisB.style.lineHeight = '35px';
    apisB.style.fontSize = '18px';
    showDivRight.style.top = '445px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'APIs <br><br> 又稱為應用編程介面，就是軟體系統不同組成部分銜接的約定。由於近年來軟體的規模日益龐大，常常需要把複雜的系統劃分成小的組成部分，編程介面的設計十分重要。 <br><br>';
}

function noneBoxRightApis(){
    apisB.style.width = '100px';
    apisB.style.height = '30px';
    apisB.style.lineHeight = '30px';
    apisB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// TDD

tddB.addEventListener('mouseover', showBoxRightTdd);
tddB.addEventListener('mouseleave', noneBoxRightTdd);

function showBoxRightTdd(){
    tddB.style.width = '105px';
    tddB.style.height = '32px';
    tddB.style.lineHeight = '35px';
    tddB.style.fontSize = '18px';
    showDivRight.style.top = '445px';
    showDivRight.style.left = '20px';
    showDivRight.style.width = '200px';
    showDivRight.style.height = 'auto';
    showDivRight.style.padding = '15px 10px 0px 10px';
    showDivRight.innerHTML = 'TDD <br><br> 測試驅動開發（英語：Test-driven development，縮寫為 TDD）是一種軟體開發過程中的應用方法，由極限編程中倡導，以其倡導先寫測試程序，然後編碼實現其功能得名。 <br><br>';
}

function noneBoxRightTdd(){
    tddB.style.width = '100px';
    tddB.style.height = '30px';
    tddB.style.lineHeight = '30px';
    tddB.style.fontSize = '16px';
    showDivRight.style.width = '180px';
    showDivRight.style.height = 'auto';
    showDivRight.innerHTML = '';
    showDivRight.style.padding = '';
}

// css

cssB.addEventListener('mouseover', showBoxLeft);
cssB.addEventListener('mouseleave', noneBoxLeft);

function showBoxLeft(){
    cssB.style.width = '105px';
    cssB.style.height = '32px';
    cssB.style.lineHeight = '35px';
    cssB.style.fontSize = '18px';
    showDivLeft.style.top = '140px';
    showDivLeft.style.right = '20px';
    showDivLeft.style.width = '200px';
    showDivLeft.style.height = 'auto';
    showDivLeft.style.padding = '15px 10px 0px 10px';
    showDivLeft.innerHTML = 'CSS <br><br> 層疊樣式表（英語：Cascading Style Sheets，簡寫CSS），是一種用來為結構化文件（如 HTML 文件或 XML 應用）添加樣式（字型、間距和顏色等）的電腦語言。 <br><br>';
}

function noneBoxLeft(){
    cssB.style.width = '100px';
    cssB.style.height = '30px';
    cssB.style.lineHeight = '30px';
    cssB.style.fontSize = '16px';
    showDivLeft.style.width = '180px';
    showDivLeft.style.height = 'auto';
    showDivLeft.innerHTML = '';
    showDivLeft.style.padding = '';
}

// jQuery

jQueryB.addEventListener('mouseover', showBoxJquery);
jQueryB.addEventListener('mouseleave', noneBoxJquery);

function showBoxJquery(){
    jQueryB.style.width = '105px';
    jQueryB.style.height = '32px';
    jQueryB.style.lineHeight = '35px';
    jQueryB.style.fontSize = '18px';
    showDivLeft.style.top = '240px';
    showDivLeft.style.right = '20px';
    showDivLeft.style.width = '200px';
    showDivLeft.style.height = 'auto';
    showDivLeft.style.padding = '15px 10px 0px 10px';
    showDivLeft.innerHTML = 'jQuery <br><br> jQuery 是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。 <br><br>';
}

function noneBoxJquery(){
    jQueryB.style.width = '100px';
    jQueryB.style.height = '30px';
    jQueryB.style.lineHeight = '30px';
    jQueryB.style.fontSize = '16px';
    showDivLeft.style.width = '180px';
    showDivLeft.style.height = 'auto';
    showDivLeft.innerHTML = '';
    showDivLeft.style.padding = '';
}

// ES6

es6B.addEventListener('mouseover', showBoxEs6);
es6B.addEventListener('mouseleave', noneBoxEs6);

function showBoxEs6(){
    es6B.style.width = '105px';
    es6B.style.height = '32px';
    es6B.style.lineHeight = '35px';
    es6B.style.fontSize = '18px';
    showDivLeft.style.top = '435px';
    showDivLeft.style.right = '20px';
    showDivLeft.style.width = '200px';
    showDivLeft.style.height = 'auto';
    showDivLeft.style.padding = '15px 10px 0px 10px';
    showDivLeft.innerHTML = 'ES6 <br><br> ECMAScript 的第六版修訂，於 2015 年完成標準化。這個標準被部分實現於大部分現代瀏覽器。可以查閱這張兼容性表來查看不同瀏覽器和工具的實現情況。 <br><br>';
}

function noneBoxEs6(){
    es6B.style.width = '100px';
    es6B.style.height = '30px';
    es6B.style.lineHeight = '30px';
    es6B.style.fontSize = '16px';
    showDivLeft.style.width = '180px';
    showDivLeft.style.height = 'auto';
    showDivLeft.innerHTML = '';
    showDivLeft.style.padding = '';
}

// SPA

spaB.addEventListener('mouseover', showBoxSpa);
spaB.addEventListener('mouseleave', noneBoxSpa);

function showBoxSpa(){
    spaB.style.width = '105px';
    spaB.style.height = '32px';
    spaB.style.lineHeight = '35px';
    spaB.style.fontSize = '18px';
    showDivLeft.style.top = '485px';
    showDivLeft.style.right = '20px';
    showDivLeft.style.width = '200px';
    showDivLeft.style.height = 'auto';
    showDivLeft.style.padding = '15px 10px 0px 10px';
    showDivLeft.innerHTML = 'SPA <br><br> SPA 屬於單頁面開發，SPA 必須有一個軟體框架，讓開發者以這個框架為基礎，提供 User 更偏向 Desktop application 的使用經驗。 <br><br>';
}

function noneBoxSpa(){
    spaB.style.width = '100px';
    spaB.style.height = '30px';
    spaB.style.lineHeight = '30px';
    spaB.style.fontSize = '16px';
    showDivLeft.style.width = '180px';
    showDivLeft.style.height = 'auto';
    showDivLeft.innerHTML = '';
    showDivLeft.style.padding = '';
}

// alert 

function answerIsWrong(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '答錯囉';
}

function answerIsRight(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '恭喜答對了';
}

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});




    // 測試
    // finalPass.style.width = '100%';
    // finalPass.style.height = '100%';
    // finalPass.style.fontSize = '120px';
    // finalPass.style.paddingTop = '15%';
    // finalPass.style.color = 'rgb(26,216,211)';
    // finalPass.style.backgroundColor = 'rgba(128,128,128,.9)';
    // finalPass.textContent = '恭喜通關';
    // setTimeout( oneFinal, 1000);

function oneFinal(){
    setTimeout( okFinal, 3000);
}

function okFinal(){
    finalPass.style.fontSize = '0px';
    finalPass.style.width = '0%';
    finalPass.style.height = '0%';
    finalPass.style.paddingTop = '0%';
    finalPass.style.lineHeight = '0px';
    finalPass.style.backgroundColor = 'white';
    finalPass.style.transform = 'rotate(360deg)';
    setTimeout( noneFinal, 3000);
}

function noneFinal(){
    finalPass.style.display = 'none';
}