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
const arrowContinue = document.getElementById('arrowContinue');
const fullIcon = document.getElementById('fullIcon');
const cuteOne = document.getElementById('cuteOne');
const cuteTwo = document.getElementById('cuteTwo');
const cuteThree = document.getElementById('cuteThree');
const typeWord = document.getElementById('typeWord');

// 變化 userIcon

userIcon.addEventListener('click', changeMyIcon);

function changeMyIcon(){
    fullIcon.style.display = 'flex';
}

fullIcon.addEventListener('click', function(event){
    fullIcon.style.display = 'none';
});

whiteDivIcon.addEventListener('click', function(event){
    event.stopPropagation();
});

cuteOne.addEventListener('click', function(){

    userIcon.style.background = 'url(../Front-Enter/images/cute.svg)';
    userIcon.style.backgroundSize = 'cover';
    fullIcon.style.display = 'none';

})

cuteTwo.addEventListener('click', function(){

    userIcon.style.background = 'url(../Front-Enter/images/cute2.svg)';
    userIcon.style.backgroundSize = 'cover';
    fullIcon.style.display = 'none';

})

cuteThree.addEventListener('click', function(){

    userIcon.style.background = 'url(../Front-Enter/images/cute3.svg)';
    userIcon.style.backgroundSize = 'cover';
    fullIcon.style.display = 'none';

})

// 點擊空白關閉視窗

questionBox.addEventListener('click', function(event){
    event.stopPropagation();
    questionDiv.style.display = 'none';
    htmlAnswerTwo.style.animation = "";
    htmlAnswerThree.style.animation = "";
    htmlAnswerOne.style.background= '';
    htmlAnswerTwo.style.background= '';
    htmlAnswerThree.style.background= '';
    arrowContinue.style.display = 'none';
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
        arrowContinue.style.display = 'none';
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
    htmlAnswerTwo.style.animation = "wobbleHorizontal 0.6s ease 0s 1 alternate";
    htmlAnswerTwo.style.background= 'url(../Front-Enter/images/cancel-FC4803.svg)';
    htmlAnswerTwo.style.backgroundSize= 'contain';
    htmlAnswerTwo.style.backgroundColor= 'white';
    htmlAnswerTwo.style.backgroundRepeat= 'no-repeat';
    htmlAnswerTwo.style.backgroundOrigin = 'content-box';
    // answerIsWrong();
}

function htmlGuestWrongThree(event){
    event.stopPropagation();
    htmlAnswerThree.style.animation = "wobbleHorizontal 0.6s ease 0s 1 alternate";
    htmlAnswerThree.style.background= 'url(../Front-Enter/images/cancel-FC4803.svg)';
    htmlAnswerThree.style.backgroundSize= 'contain';
    htmlAnswerThree.style.backgroundColor= 'white';
    htmlAnswerThree.style. backgroundRepeat= 'no-repeat';
    htmlAnswerThree.style.backgroundOrigin = 'content-box';
    // answerIsWrong();
}

function htmlGuestRight(event){
    event.stopPropagation();
    htmlAnswerOne.style.background= 'url(../Front-Enter/images/checked-FFD800.svg)';
    htmlAnswerOne.style.backgroundSize= 'contain';
    htmlAnswerOne.style.backgroundColor= 'white';
    htmlAnswerOne.style. backgroundRepeat= 'no-repeat';
    htmlAnswerOne.style.backgroundOrigin = 'content-box';
    htmlLayout();
    htmlAnswerTwo.style.animation = "";
    htmlAnswerThree.style.animation = "";
    userIcon.style.top = '10.2%';
    userIcon.style.left = '40%';
    arrowContinue.style.display = 'block';

    //打字效果
    if(this.textContent == '標籤語言'){
        let str = '你通過第一關，HTML 是成為前端工程師的橋頭堡，也是網站給人的第一印象，一定要學好才行。';
        let i = 0;
        function htmlTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(htmlTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        htmlTyping();
    }else{
    }
    //打字效果
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

    //打字效果
    if(this.textContent == 'SCSS 用變數控制'){
        let str = '哇，你竟然連 CSS 也略懂略懂。如果階層樣式學得好，就具備基礎網頁設計師的能力了，這時候，對於細節的掌握就更加重要囉。';
        let i = 0;
        function cssTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(cssTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        cssTyping();
    }else{
    }
    //打字效果

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

    //打字效果
    if(this.textContent == 'function'){
        let str = '恭喜 JavaScript 關卡通過。JavaScript 同時也是小編最喜歡的語言，掌握它，就等於邁入前端工程師的行列，它不只能為你帶來一份工作，也擴展你的視野，擁有接軌科技的能力。';
        let i = 0;
        function jsTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(jsTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        jsTyping();
    }else{
    }
    //打字效果

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

    //打字效果
    if(this.textContent == 'jQuery 含錢字符號'){
        let str = 'jQuery 是相當方便的 JavaScript 函式庫，它幫你把程式封裝好，只要加上經典的 $ 字號作為前綴，就能使用眾多功能。';
        let i = 0;
        function jqueryTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(jqueryTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        jqueryTyping();
    }else{
    }
    //打字效果

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
    questionHead.textContent = '如何在不同螢幕寬度下改變樣式？';
    htmlAnswerOne.textContent = '透過 media 操作';
    htmlAnswerTwo.textContent = '使用事件物件';
    htmlAnswerThree.textContent = '變數控制';
    htmlAnswerOne.addEventListener('click', domGuestRight);
}

function domGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    domLayout();
    userIcon.style.top = '31.7%';
    userIcon.style.left = '48.5%';

    //打字效果
    if(this.textContent == '透過 media 操作'){
        let str = 'RWD 很神奇吧，它讓你在手機、平板上，都能方便觀看網頁，而不用放大縮小視窗，是讓使用者體驗升級的良方。';
        let i = 0;
        function rwdTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(rwdTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        rwdTyping();
    }else{
    }
    //打字效果

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
    questionHead.textContent = 'GitHub 不能做什麼？';
    htmlAnswerOne.textContent = '測試程式正確性';
    htmlAnswerTwo.textContent = '程式碼倉庫';
    htmlAnswerThree.textContent = '共同軟體開發';
    htmlAnswerOne.addEventListener('click', ajaxGuestRight);
}

function ajaxGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    ajaxLayout();
    userIcon.style.top = '42.6%';
    userIcon.style.left = '48.5%';

    //打字效果
    if(this.textContent == '測試程式正確性'){
        let str = '在學習程式語言之前，很難想像有 GitHub 的存在吧，竟然有個倉庫專門在管理程式語言，還能讓人複製、共同編輯，並記錄每一次的 commit ，是一款優秀的協作工具。';
        let i = 0;
        function githubTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(githubTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        githubTyping();
    }else{
    }
    //打字效果   
    
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
    questionHead.textContent = '何者不屬於 CSS 預處理器？';
    htmlAnswerOne.textContent = 'Gulp';
    htmlAnswerTwo.textContent = 'SCSS';
    htmlAnswerThree.textContent = 'PostCSS';
    htmlAnswerOne.addEventListener('click', es6GuestRight);
}

function es6GuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    es6Layout();
    userIcon.style.top = '42.6%';
    userIcon.style.left = '40.9%';

    //打字效果
    if(this.textContent == 'Gulp'){
        let str = 'css 屬於程式設計入門款，而預處理器能以更有效率的方式，撰寫階層樣式，如果你擁有 JavaScript 的基本概念，學起來會特別快唷。';
        let i = 0;
        function scssTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(scssTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        scssTyping();
    }else{
    }
    //打字效果   

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
    questionHead.textContent = '使用 Webpack 需要安裝？';
    htmlAnswerOne.textContent = 'Node.js';
    htmlAnswerTwo.textContent = 'Babel';
    htmlAnswerThree.textContent = 'styled-components';
    htmlAnswerOne.addEventListener('click', jsonGuestRight);
}

function jsonGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    jsonLayout();
    userIcon.style.top = '42.6%';
    userIcon.style.left = '55.9%';

    //打字效果
    if(this.textContent == 'Node.js'){
        let str = '你已經越來越厲害，掌握了近期火紅的打包工具，Webpack 和 React 是絕配，是幫助瀏覽器進行「翻譯」的良方。';
        let i = 0;
        function webpackTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(webpackTyping, 60);
                console.log('cscs')
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        webpackTyping();
    }else{
    }
    //打字效果   

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
    questionHead.textContent = 'Bootstrap 是一種？';
    htmlAnswerOne.textContent = '樣式擴充元件';
    htmlAnswerTwo.textContent = '打包工具';
    htmlAnswerThree.textContent = '套件管理工具';
    htmlAnswerOne.addEventListener('click', spaGuestRight);
}

function spaGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    spaLayout();
    userIcon.style.top = '53.1%';
    userIcon.style.left = '39.4%';

    //打字效果
    if(this.textContent == '樣式擴充元件'){
        let str = '看來你學蠻快的，Bootstrap 能做到的，css 也能做到，如果有時間，不仿試試手刻 Bootstrap 的特效，精進樣式調校的能力。';
        let i = 0;
        function bootstrapTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(bootstrapTyping, 60);
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        bootstrapTyping();
    }else{
    }
    //打字效果   

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
    questionHead.textContent = 'React 有何特性？';
    htmlAnswerOne.textContent = '建置單頁式網站';
    htmlAnswerTwo.textContent = '不存在異步問題';
    htmlAnswerThree.textContent = '不需要 Babel 編譯';
    htmlAnswerOne.addEventListener('click', apisGuestRight);
}

function apisGuestRight(){
    // answerIsRight();
    // questionDiv.style.display = 'none';
    apisLayout();
    userIcon.style.top = '53.1%';
    userIcon.style.left = '57.3%';

    //打字效果
    if(this.textContent == '建置單頁式網站'){
        let str = '你太強了，React 是不容易掌握的框架，能讓使用者的體驗更好，你所使用的 facebook 就是運用這套框架呢。';
        let i = 0;
        function reactTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(reactTyping, 60);
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        reactTyping();
    }else{
    }
    //打字效果   

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
    questionHead.textContent = '為什麼要做單元測試？';
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

    //打字效果
    if(this.textContent == '確保程式邏輯正確'){
        let str = '終於抵達最後一關了，單元測試是為了確保函式的正確性，而進行的作業。雖然單元測試是最後一關，但工程的世界無止盡，身為一位 geek 就是要不斷學習精進唷。';
        let i = 0;
        function unittestTyping(){
            if (i <= str.length) {
                typeWord.innerHTML = str.slice(0, i++) + '_';
                setTimeout(unittestTyping, 60);
            
            }else{    
                typeWord.innerHTML = str;//結束打字,移除 _ 光標
            }
        }
        unittestTyping();
    }else{
    }
    //打字效果  

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
    showDivRight.innerHTML = 'RWD <br><br> 響應式網頁設計（英語：Responsive web design，通常縮寫為 RWD），是一種網頁設計的技術做法，該設計可使網站在不同的裝置上瀏覽時，對應不同解析度皆有適合的呈現，減少使用者進行縮放、平移和捲動等操作行為。 <br><br>';
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
    showDivRight.innerHTML = 'GitHub <br><br> GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務，由 GitHub 公司（曾稱 Logical Awesome）開發者使用 Ruby on Rails 編寫而成。 <br><br>';
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
    showDivRight.innerHTML = 'Webpack <br><br> Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成優化過的程式碼。 <br><br>';
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
    showDivRight.innerHTML = 'React <br><br> React 是一個為資料提供彩現為 HTML 視圖的開源 JavaScript 庫。React 視圖通常採用包含以自訂 HTML 標記規定的其他元件的元件彩現。 <br><br>';
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
    showDivRight.innerHTML = 'Unit Testing <br><br> 在電腦編程中，單元測試（英語：Unit Testing）又稱為模組測試，是針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作。程式單元是應用的最小可測試部件。 <br><br>';
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
    showDivLeft.innerHTML = 'SCSS <br><br> Sass 是一個將指令碼解析成 CSS 的手稿語言，即 SassScript。Sass 包括兩套語法。最開始的語法叫做「縮排語法」，使用縮排來區分程式碼塊，並且用換行將不同規則分隔開。而較新的語法叫做「SCSS」。 <br><br>';
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
    showDivLeft.innerHTML = 'bootstrap <br><br> Bootstrap 是一組用於網站和網路應用程式開發的開源前端框架，提供字體排印、表單、按鈕、導航及其他各種元件及 Javascript 擴充套件，旨在使動態網頁和 Web 應用的開發更加容易。 <br><br>';
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


// 關閉 loading

setTimeout(letLoadingNone, 1000)
function letLoadingNone(){
    loadingAnimation.style.height = '0px';
    loadingAnimation.style.opacity = '0.9';
    loadingDrawing.style.height = '0px';
    loadingDrawing.style.opacity = '0.9';
    loadingImg.style.marginBottom = '-1000px';
    header.style.animation = 'headerGoUp 0.9s ease 0s 1 alternate';
    myAside.style.animation = 'asideBottom 0.9s ease 0s 1 alternate';
    setTimeout(displayNoneLoading, 600)
    function displayNoneLoading(){
        loadingAnimation.style.display = 'none';
    }
}