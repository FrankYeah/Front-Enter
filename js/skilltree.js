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

const floatBox = document.getElementById('floatBox');
// html

htmlB.addEventListener('click', htmlPass);

function htmlPass(){
    questionDiv.style.display = 'flex';
    htmlAnswerOne.addEventListener('click', htmlGuestRight);
    htmlAnswerTwo.addEventListener('click', htmlGuestWrong);
    htmlAnswerThree.addEventListener('click', htmlGuestWrong);
}

function htmlGuestWrong(){
    answerIsWrong();
    questionDiv.style.display = 'none';
}

function htmlGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    htmlLayout();
}

function htmlLayout(){
    htmlB.style.backgroundColor = 'rgb(26, 216, 211)';
    htmlB.style.color = 'white';
    htmlOne.style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
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
    htmlAnswerOne.textContent = 'SCSS可用變數控制';
    htmlAnswerTwo.textContent = 'SCSS不能寫在CSS檔案中';
    htmlAnswerThree.textContent = '不同程式語言';
    htmlAnswerOne.addEventListener('click', cssGuestRight);
}

function cssGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    cssLayout();
}

function cssLayout(){
    cssB.style.backgroundColor = 'rgb(26, 216, 211)';
    cssB.style.color = 'white';
    cssOne.style.background = 'url("../images/minus-symbol.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = 'JavaScript 的變數不包括何者？';
    htmlAnswerOne.textContent = 'function';
    htmlAnswerTwo.textContent = 'var';
    htmlAnswerThree.textContent = 'let';
    htmlAnswerOne.addEventListener('click', jsGuestRight);
}

function jsGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    jsLayout();
}

function jsLayout(){
    jsB.style.backgroundColor = 'rgb(26, 216, 211)';
    jsB.style.color = 'white';
    jsOne.style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    jsTwo.style.background = 'url("../images/minus-symbol.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = 'jQuery 與 JS 的比較何者正確？';
    htmlAnswerOne.textContent = '寫法不同';
    htmlAnswerTwo.textContent = 'jQuery是框架的一種';
    htmlAnswerThree.textContent = 'JS相對屬於封裝好的語言';
    htmlAnswerOne.addEventListener('click', jQueryGuestRight);
}

function jQueryGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    jQueryLayout();
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
    questionHead.textContent = 'DOM屬於？';
    htmlAnswerOne.textContent = '瀏覽器上的元素';
    htmlAnswerTwo.textContent = '操作連覽器的語言';
    htmlAnswerThree.textContent = '簡化版的 HTML';
    htmlAnswerOne.addEventListener('click', domGuestRight);
}

function domGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    domLayout();
}

function domLayout(){
    domB.style.backgroundColor = 'rgb(26, 216, 211)';
    domB.style.color = 'white';
    domOne.style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = 'ajax能做什麼？';
    htmlAnswerOne.textContent = '動態載入DOM';
    htmlAnswerTwo.textContent = '加速與伺服器的連線';
    htmlAnswerThree.textContent = '一種安全加密的方式';
    htmlAnswerOne.addEventListener('click', ajaxGuestRight);
}

function ajaxGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    ajaxLayout();
}

function ajaxLayout(){
    ajaxB.style.backgroundColor = 'rgb(26, 216, 211)';
    ajaxB.style.color = 'white';
    ajaxOne.style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    ajaxTwo.style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = '哪個不是ES6的新功能？';
    htmlAnswerOne.textContent = 'await異步處理';
    htmlAnswerTwo.textContent = '箭頭符號';
    htmlAnswerThree.textContent = 'let、const 變數';
    htmlAnswerOne.addEventListener('click', es6GuestRight);
}

function es6GuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    es6Layout();
}

function es6Layout(){
    es6B.style.backgroundColor = 'rgb(26, 216, 211)';
    es6B.style.color = 'white';
    es6One.style.background = 'url("../images/minus-symbol.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = 'json是什麼？';
    htmlAnswerOne.textContent = '資料庫常用的結構';
    htmlAnswerTwo.textContent = '操作事件的工具';
    htmlAnswerThree.textContent = '正規表達式的一種';
    htmlAnswerOne.addEventListener('click', jsonGuestRight);
}

function jsonGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    jsonLayout();
}

function jsonLayout(){
    jsonB.style.backgroundColor = 'rgb(26, 216, 211)';
    jsonB.style.color = 'white';
    jsonOne.style.background = 'url("../images/minus-symbol.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = '哪種框架屬於SPA？';
    htmlAnswerOne.textContent = 'React';
    htmlAnswerTwo.textContent = 'Vue';
    htmlAnswerThree.textContent = 'Regular';
    htmlAnswerOne.addEventListener('click', spaGuestRight);
}

function spaGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    spaLayout();
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
    questionHead.textContent = '下列何者不是接APIs的方式？';
    htmlAnswerOne.textContent = 'HTTPs';
    htmlAnswerTwo.textContent = 'XMLHttpRequest';
    htmlAnswerThree.textContent = 'Fetch';
    htmlAnswerOne.addEventListener('click', apisGuestRight);
}

function apisGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    apisLayout();
}

function apisLayout(){
    apisB.style.backgroundColor = 'rgb(26, 216, 211)';
    apisB.style.color = 'white';
    apisOne.style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
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
    questionHead.textContent = '為什麼要做TDD？';
    htmlAnswerOne.textContent = '確保程式運作邏輯正確';
    htmlAnswerTwo.textContent = '為了讓scrum運作順利';
    htmlAnswerThree.textContent = '資料安全性';
    htmlAnswerOne.addEventListener('click', tddGuestRight);
}

function tddGuestRight(){
    answerIsRight();
    questionDiv.style.display = 'none';
    tddLayout();
}

function tddLayout(){
    tddB.style.backgroundColor = 'rgb(26, 216, 211)';
    tddB.style.color = 'white';
}

// 滑鼠移入事件

htmlB.addEventListener('mousemove', showBoxRight);
htmlB.addEventListener('mousout', noneBoxRight);

function showBoxRight(e){
    // floatBox.style.left = floatBox.getBoundingClientRect().right + 'px';
   
}
window.addEventListener('scroll',getNumbera);
function getNumbera(){
    console.log(document.documentElement.scrollHeight)  // 總高度？
    console.log(document.documentElement.clientHeight)  // 當前瀏覽器高度
    console.log(document.documentElement.scrollTop)     // 已經滾動多少 px
    console.log(document.documentElement.getBoundingClientRect());
}

function noneBoxRight(){
    floatBox.style.left = '0';
    floatBox.style.top = '0';
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