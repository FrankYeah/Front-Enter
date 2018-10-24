// change userIcon
app.get('#userIcon').addEventListener('click', function(){
    app.get('#fullIcon').style.display = 'flex';
});
app.get('#fullIcon').addEventListener('click', function(event){
    app.get('#fullIcon').style.display = 'none';
});
app.get('#whiteDivIcon').addEventListener('click', function(event){
    event.stopPropagation();
});
app.get('#cuteOne').addEventListener('click', function(){
    app.get('#userIcon').style.background = 'url(../Front-Enter/images/cute.svg) left center / contain no-repeat';
    app.get('#fullIcon').style.display = 'none';
})
app.get('#cuteTwo').addEventListener('click', function(){
    app.get('#userIcon').style.background = 'url(../Front-Enter/images/cute2.svg) left center / contain no-repeat';
    app.get('#fullIcon').style.display = 'none';
})
app.get('#cuteThree').addEventListener('click', function(){
    app.get('#userIcon').style.background = 'url(../Front-Enter/images/cute3.svg) left center / contain no-repeat';
    app.get('#fullIcon').style.display = 'none';
})

// click empty to close div
app.closeQuestion = function(){
    app.get('#questionDiv').style.display = 'none';
    app.get('#htmlAnswerTwo').style.animation = '';
    app.get('#htmlAnswerThree').style.animation = '';
    app.get('#htmlAnswerOne').style.background= '';
    app.get('#htmlAnswerTwo').style.background= '';
    app.get('#htmlAnswerThree').style.background= '';
    app.get('#arrowContinue').style.display = 'none';
}
app.get('#questionBox').addEventListener('click', function(event){
    event.stopPropagation();
    app.closeQuestion();
})

let QClick = 0;
app.get('#questionDiv').addEventListener('click', function(){
    if(QClick==0){
        app.closeQuestion();
    }else{
    }
});

app.qa = function(q, a1, a2, a3){
    app.get('#questionDiv').style.display = 'flex';
    app.get('#questionHead').textContent = q;
    app.get('#htmlAnswerOne').textContent = a1;
    app.get('#htmlAnswerTwo').textContent = a2;
    app.get('#htmlAnswerThree').textContent = a3;
}

app.get('#htmlB').addEventListener('click', function(){
    app.qa('請問 HTML 是什麼？','標籤語言','資料庫工具', '瀏覽器規範');
    app.get('#htmlAnswerOne').addEventListener('click', htmlGuestRight);
    app.get('#htmlAnswerTwo').addEventListener('click', htmlGuestWrongTwo);
    app.get('#htmlAnswerThree').addEventListener('click', htmlGuestWrongThree);
});

app.guestWrong = function(bc){
    app.get(bc).style.animation = 'wobbleHorizontal 0.6s ease 0s 1 alternate';
    app.get(bc).style.background= 'url(../Front-Enter/images/cancel-FC4803.svg)';
    app.get(bc).style.backgroundSize= 'contain';
    app.get(bc).style.backgroundColor= 'white';
    app.get(bc).style.backgroundRepeat= 'no-repeat';
    app.get(bc).style.backgroundOrigin = 'content-box';
}

function htmlGuestWrongTwo(event){
    event.stopPropagation();
    app.guestWrong('#htmlAnswerTwo');
}

function htmlGuestWrongThree(event){
    event.stopPropagation();
    app.guestWrong('#htmlAnswerThree');
}

app.typing = function(top, left,sameText, encourage, event){
    app.get('#userIcon').style.top = top;
    app.get('#userIcon').style.left = left;
    if(event.target.textContent == sameText){
        app.get('#fullType').style.display = 'flex';
        let str = encourage;
        let i = 0;
        function htmlTyping(){
            app.get('#bgMusic').play();
            if (i <= str.length) {
                app.get('#typeWord').innerHTML = str.slice(0, i++) + '_';
                setTimeout(htmlTyping, 60);
            }else{    
                app.get('#typeWord').innerHTML = str;  //end, remove _ 
                app.get('#bgMusic').pause();
                setTimeout(closeFullType, 1500)
            }
        }
        htmlTyping();
    }else{
    }
}

function htmlGuestRight(event){
    event.stopPropagation();
    app.get('#htmlAnswerOne').style.background= 'url(../Front-Enter/images/checked-FFD800.svg)';
    app.get('#htmlAnswerOne').style.backgroundSize= 'contain';
    app.get('#htmlAnswerOne').style.backgroundColor= 'white';
    app.get('#htmlAnswerOne').style. backgroundRepeat= 'no-repeat';
    app.get('#htmlAnswerOne').style.backgroundOrigin = 'content-box';
    htmlLayout();
    app.get('#htmlAnswerTwo').style.animation = '';
    app.get('#htmlAnswerThree').style.animation = '';
    app.get('#arrowContinue').style.display = 'block';
    // type
    app.typing('10.2%', '40%', '標籤語言', '你通過第一關，HTML 是成為前端工程師的橋頭堡，也是網站給人的第一印象，一定要學好才行。', event);
}

function closeFullType(){
    app.get('#fullType').style.display = 'none';
}
app.get('#fullType').addEventListener('click', function(){
    app.get('#fullType').style.display = 'none';
})
app.get('#typeWord').addEventListener('click', function(){
    app.get('#fullType').style.display = 'none';
})
function htmlLayout(){
    app.get('#htmlB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#htmlB').style.color = 'white';
    app.get('#htmlOne').style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get('#cssB').style.cursor = 'pointer';
    app.get('#cssB').style.color = 'rgb(26, 216, 211)';
    app.get('#cssB').style.border = '1px solid rgb(26, 216, 211)';
}

// css 
app.get('#cssB').addEventListener('click', function(){
    if(app.get('#cssB').style.cursor){
        cssPass();
    }else{
    }
});

function cssPass(){
    app.qa('SCSS 跟 CSS 差別？','SCSS 用變數控制','SCSS 非縮排語法', '不同程式語言');
    app.get('#htmlAnswerOne').addEventListener('click', cssGuestRight);
}

function cssGuestRight(){
    cssLayout();
    app.typing('10.2%','55%', 'SCSS 用變數控制', '哇，你竟然連 CSS 也略懂略懂。如果階層樣式學得好，就具備基礎網頁設計師的能力了，這時候，對於細節的掌握就更加重要囉。', event);
}

function cssLayout(){
    app.get('#cssB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#cssB').style.color = 'white';
    app.get('#cssOne').style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    app.get('#jsB').style.cursor = 'pointer';
    app.get('#jsB').style.color = 'rgb(26, 216, 211)';
    app.get('#jsB').style.border = '1px solid rgb(26, 216, 211)';
}

// js 
app.get('#jsB').addEventListener('click', function(){
    if(app.get('#jsB').style.cursor){
        jsPass();
    }else{
    }
});

function jsPass(){
    app.qa('何者非 JS 定義變數的方式？','function','var', 'let');
    app.get('#htmlAnswerOne').addEventListener('click', jsGuestRight);
}

function jsGuestRight(){
    jsLayout();
    app.typing('20.2%', '53%', 'function', '恭喜你通過 JavaScript 關卡。JavaScript 也是小編最喜歡的語言，掌握它，就等於邁入前端工程師的行列，它不只能為你帶來一份工作，也擴展你的視野，擁有接軌科技的能力。', event);
}

function jsLayout(){
    app.get('#jsB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#jsB').style.color = 'white';
    app.get('#jsOne').style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get('#jsTwo').style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    app.get('#jQueryB').style.cursor = 'pointer';
    app.get('#jQueryB').style.color = 'rgb(26, 216, 211)';
    app.get('#jQueryB').style.border = '1px solid rgb(26, 216, 211)';
    app.get('#domB').style.cursor = 'pointer';
    app.get('#domB').style.color = 'rgb(26, 216, 211)';
    app.get('#domB').style.border = '1px solid rgb(26, 216, 211)';
}

// jQuery
app.get('#jQueryB').addEventListener('click', function(){
    if(app.get('#jQueryB').style.cursor){
        jQueryPass();
    }else{
    }
});

function jQueryPass(){
    app.qa('jQuery 與 JS 之比較何者正確？','jQuery 含錢字符號','JS 是一種框架', 'jQuery 並未開源');
    app.get('#htmlAnswerOne').addEventListener('click', jQueryGuestRight);
}

function jQueryGuestRight(){
    jQueryLayout();
    app.typing('20.2%', '42%', 'jQuery 含錢字符號', 'jQuery 是相當方便的 JavaScript 函式庫，它幫你把程式封裝好，只要加上經典的 $ 字號作為前綴，就能使用眾多功能。', event);
}

function jQueryLayout(){
    app.get('#jQueryB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#jQueryB').style.color = 'white';
}

// DOM
app.get('#domB').addEventListener('click', function(){
    if(app.get('#domB').style.cursor){
        domPass();
    }else{

    }
});

function domPass(){
    app.qa('如何在不同螢幕寬度下改變樣式？','透過 media 操作','使用事件物件', '變數控制');
    app.get('#htmlAnswerOne').addEventListener('click', domGuestRight);
}

function domGuestRight(){
    domLayout();
    app.typing('31.7%', '48.5%', '透過 media 操作', 'RWD 很神奇吧，它讓你在手機、平板上，都能方便觀看網頁，而不用放大縮小視窗，是讓使用者體驗升級的良方。', event);
}

function domLayout(){
    app.get('#domB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#domB').style.color = 'white';
    app.get('#domOne').style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get('#ajaxB').style.cursor = 'pointer';
    app.get('#ajaxB').style.color = 'rgb(26, 216, 211)';
    app.get('#ajaxB').style.border = '1px solid rgb(26, 216, 211)';
}

//ajax
app.get('#ajaxB').addEventListener('click', function(){
    if(app.get('#ajaxB').style.cursor){
        ajaxPass();
    }else{
    }
});

function ajaxPass(){
    app.qa('GitHub 不能做什麼？','測試程式正確性','程式碼倉庫', '共同軟體開發');
    app.get('#htmlAnswerOne').addEventListener('click', ajaxGuestRight);
}

function ajaxGuestRight(){
    ajaxLayout();
    app.typing('42.6%', '48.5%', '測試程式正確性', '在學習程式語言之前，很難想像有 GitHub 的存在吧，竟然有個倉庫專門在管理程式語言，還能讓人複製、共同編輯，並記錄每一次的 commit ，是一款優秀的協作工具。', event);
}

function ajaxLayout(){
    app.get('#ajaxB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#ajaxB').style.color = 'white';
    app.get('#ajaxOne').style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get('#ajaxTwo').style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get('#es6B').style.cursor = 'pointer';
    app.get('#es6B').style.color = 'rgb(26, 216, 211)';
    app.get('#es6B').style.border = '1px solid rgb(26, 216, 211)';
    app.get('#jsonB').style.cursor = 'pointer';
    app.get('#jsonB').style.color = 'rgb(26, 216, 211)';
    app.get('#jsonB').style.border = '1px solid rgb(26, 216, 211)';
}

// ES6
app.get('#es6B').addEventListener('click', function(){
    if(app.get('#es6B').style.cursor){
        es6Pass();
    }else{
    }
});

function es6Pass(){
    app.qa('何者不屬於 CSS 預處理器？','Gulp','SCSS', 'PostCSS');
    app.get('#htmlAnswerOne').addEventListener('click', es6GuestRight);
}

function es6GuestRight(){
    es6Layout();
    app.typing('42.6%', '40.9%', 'Gulp', 'css 屬於程式設計入門款，而預處理器能以更有效率的方式，撰寫階層樣式，如果你擁有 JavaScript 的基本概念，學起來會特別快唷。', event);
}

function es6Layout(){
    app.get('#es6B').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#es6B').style.color = 'white';
    app.get('#es6One').style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    app.get('#spaB').style.cursor = 'pointer';
    app.get('#spaB').style.color = 'rgb(26, 216, 211)';
    app.get('#spaB').style.border = '1px solid rgb(26, 216, 211)';
}

// json
app.get('#jsonB').addEventListener('click', function(){
    if(app.get('#jsonB').style.cursor){
        jsonPass();
    }else{
    }
});

function jsonPass(){
    app.qa('使用 Webpack 需要安裝？','Node.js','Babel', 'styled-components');
    app.get('#htmlAnswerOne').addEventListener('click', jsonGuestRight);
}

function jsonGuestRight(){
    jsonLayout();
    app.typing('42.6%', '55.9%', 'Node.js', '你已經越來越厲害，掌握了近期火紅的打包工具，Webpack 和 React 是絕配，是幫助瀏覽器進行「翻譯」的良方。', event);
}

function jsonLayout(){
    app.get('#jsonB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#jsonB').style.color = 'white';
    app.get('#jsonOne').style.background = 'url("../Front-Enter/images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    app.get('#apisB').style.cursor = 'pointer';
    app.get('#apisB').style.color = 'rgb(26, 216, 211)';
    app.get('#apisB').style.border = '1px solid rgb(26, 216, 211)';
}

// SPA
app.get('#spaB').addEventListener('click', function(){
    if(app.get('#spaB').style.cursor){
        spaPass();
    }else{
    }
});

function spaPass(){
    app.qa('Bootstrap 是一種？','樣式擴充元件','打包工具', '套件管理工具');
    app.get('#htmlAnswerOne').addEventListener('click', spaGuestRight);
}

function spaGuestRight(){
    spaLayout();
    app.typing('53.1%', '39.4%', '樣式擴充元件', '看來你學蠻快的，Bootstrap 能做到的，css 也能做到，如果有時間，不仿試試手刻 Bootstrap 的特效，精進樣式調校的能力。', event);
}

function spaLayout(){
    app.get('#spaB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#spaB').style.color = 'white';
}

// APIs
app.get('#apisB').addEventListener('click', function(){
    if(app.get('#apisB').style.cursor){
        apisPass();
    }else{
    }
});

function apisPass(){
    app.qa('React 有何特性？','建置單頁式網站','不存在異步問題', '不需要 Babel 編譯');
    app.get('#htmlAnswerOne').addEventListener('click', apisGuestRight);
}

function apisGuestRight(){
    apisLayout();
    app.typing('53.1%', '57.3%', '建置單頁式網站', '你太強了，React 是不容易掌握的框架，能讓使用者的體驗更好，你所使用的 facebook 就是運用這套框架呢。', event);
}

function apisLayout(){
    app.get('#apisB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#apisB').style.color = 'white';
    app.get('#apisOne').style.background = 'url("../Front-Enter/images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get('#tddB').style.cursor = 'pointer';
    app.get('#tddB').style.color = 'rgb(26, 216, 211)';
    app.get('#tddB').style.border = '1px solid rgb(26, 216, 211)';
}

// TDD
app.get('#tddB').addEventListener('click', function(){
    if(app.get('#tddB').style.cursor){
        tddPass();
    }else{

    }
});

function tddPass(){
    app.qa('為什麼要做單元測試？','確保程式邏輯正確','讓 scrum 運作順利', '資料安全性');
    app.get('#htmlAnswerOne').addEventListener('click', tddGuestRight);
}

function tddGuestRight(){
    tddLayout();
    app.typing('63.8%', '49%', '確保程式邏輯正確', '終於抵達最後一關了，單元測試是為了確保函式的正確性，而進行的作業。雖然單元測試是最後一關，但工程的世界無止盡，身為一位 geek 就是要不斷學習精進唷。', event);
}

function tddLayout(){
    app.get('#tddB').style.backgroundColor = 'rgb(26, 216, 211)';
    app.get('#tddB').style.color = 'white';
}

// mouse over
// html

app.get('#htmlB').addEventListener('mouseover', showBoxRight);
app.get('#htmlB').addEventListener('mouseleave', noneBoxRight);

function showBoxRight(){
    app.get('#htmlB').style.width = '105px';
    app.get('#htmlB').style.height = '32px';
    app.get('#htmlB').style.lineHeight = '32px';
    app.get('#htmlB').style.fontSize = '17px';
    app.get('#showDivRight').style.top = '40px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'HTML <br><br> 超文件標示語言（英語：HyperText Markup Language，簡稱：HTML）是一種用於建立網頁的標準標示語言。 <br><br>';
}

function noneBoxRight(){
    app.get('#htmlB').style.width = '100px';
    app.get('#htmlB').style.height = '30px';
    app.get('#htmlB').style.lineHeight = '30px';
    app.get('#htmlB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// js
app.get('#jsB').addEventListener('mouseover', showBoxRightJs);
app.get('#jsB').addEventListener('mouseleave', noneBoxRightJs);

function showBoxRightJs(){
    app.get('#jsB').style.width = '105px';
    app.get('#jsB').style.height = '32px';
    app.get('#jsB').style.lineHeight = '35px';
    app.get('#jsB').style.fontSize = '18px';
    app.get('#showDivRight').style.top = '140px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'JavaScript <br><br> JavaScript 是一門基於原型、函式先行的語言，是一門多範式的語言，它支援物件導向編程，指令式程式設計，以及函數語言程式設計。 <br><br>';
}

function noneBoxRightJs(){
    app.get('#jsB').style.width = '100px';
    app.get('#jsB').style.height = '30px';
    app.get('#jsB').style.lineHeight = '30px';
    app.get('#jsB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// dom
app.get('#domB').addEventListener('mouseover', showBoxRightDom);
app.get('#domB').addEventListener('mouseleave', noneBoxRightDom);

function showBoxRightDom(){
    app.get('#domB').style.width = '105px';
    app.get('#domB').style.height = '32px';
    app.get('#domB').style.lineHeight = '35px';
    app.get('#domB').style.fontSize = '18px';
    app.get('#showDivRight').style.top = '240px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'RWD <br><br> 響應式網頁設計（英語：Responsive web design，通常縮寫為 RWD），是一種網頁設計的技術做法，該設計可使網站在不同的裝置上瀏覽時，對應不同解析度皆有適合的呈現，減少使用者進行縮放、平移和捲動等操作行為。 <br><br>';
}

function noneBoxRightDom(){
    app.get('#domB').style.width = '100px';
    app.get('#domB').style.height = '30px';
    app.get('#domB').style.lineHeight = '30px';
    app.get('#domB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// ajax
app.get('#ajaxB').addEventListener('mouseover', showBoxRightAjax);
app.get('#ajaxB').addEventListener('mouseleave', noneBoxRightAjax);

function showBoxRightAjax(){
    app.get('#ajaxB').style.width = '105px';
    app.get('#ajaxB').style.height = '32px';
    app.get('#ajaxB').style.lineHeight = '35px';
    app.get('#ajaxB').style.fontSize = '18px';
    app.get('#showDivRight').style.top = '335px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'GitHub <br><br> GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務，由 GitHub 公司（曾稱 Logical Awesome）開發者使用 Ruby on Rails 編寫而成。 <br><br>';
}

function noneBoxRightAjax(){
    app.get('#ajaxB').style.width = '100px';
    app.get('#ajaxB').style.height = '30px';
    app.get('#ajaxB').style.lineHeight = '30px';
    app.get('#ajaxB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// json
app.get('#jsonB').addEventListener('mouseover', showBoxRightJson);
app.get('#jsonB').addEventListener('mouseleave', noneBoxRightJson);

function showBoxRightJson(){
    app.get('#jsonB').style.width = '105px';
    app.get('#jsonB').style.height = '32px';
    app.get('#jsonB').style.lineHeight = '35px';
    app.get('#jsonB').style.fontSize = '18px';
    app.get('#showDivRight').style.top = '435px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'Webpack <br><br> Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成優化過的程式碼。 <br><br>';
}

function noneBoxRightJson(){
    app.get('#jsonB').style.width = '100px';
    app.get('#jsonB').style.height = '30px';
    app.get('#jsonB').style.lineHeight = '30px';
    app.get('#jsonB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// APIs
app.get('#apisB').addEventListener('mouseover', showBoxRightApis);
app.get('#apisB').addEventListener('mouseleave', noneBoxRightApis);

function showBoxRightApis(){
    app.get('#apisB').style.width = '105px';
    app.get('#apisB').style.height = '32px';
    app.get('#apisB').style.lineHeight = '35px';
    app.get('#apisB').style.fontSize = '18px';
    app.get('#showDivRight').style.top = '445px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'React <br><br> React 是一個為資料提供彩現為 HTML 視圖的開源 JavaScript 庫。React 視圖通常採用包含以自訂 HTML 標記規定的其他元件的元件彩現。 <br><br>';
}

function noneBoxRightApis(){
    app.get('#apisB').style.width = '100px';
    app.get('#apisB').style.height = '30px';
    app.get('#apisB').style.lineHeight = '30px';
    app.get('#apisB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// TDD
app.get('#tddB').addEventListener('mouseover', showBoxRightTdd);
app.get('#tddB').addEventListener('mouseleave', noneBoxRightTdd);

function showBoxRightTdd(){
    app.get('#tddB').style.width = '105px';
    app.get('#tddB').style.height = '32px';
    app.get('#tddB').style.lineHeight = '35px';
    app.get('#tddB').style.fontSize = '18px';
    app.get('#showDivRight').style.top = '445px';
    app.get('#showDivRight').style.left = '20px';
    app.get('#showDivRight').style.width = '200px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').style.padding = '15px 10px 0px 10px';
    app.get('#showDivRight').innerHTML = 'Unit Testing <br><br> 在電腦編程中，單元測試（英語：Unit Testing）又稱為模組測試，是針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作。程式單元是應用的最小可測試部件。 <br><br>';
}

function noneBoxRightTdd(){
    app.get('#tddB').style.width = '100px';
    app.get('#tddB').style.height = '30px';
    app.get('#tddB').style.lineHeight = '30px';
    app.get('#tddB').style.fontSize = '16px';
    app.get('#showDivRight').style.width = '180px';
    app.get('#showDivRight').style.height = 'auto';
    app.get('#showDivRight').innerHTML = '';
    app.get('#showDivRight').style.padding = '';
}

// css
app.get('#cssB').addEventListener('mouseover', showBoxLeft);
app.get('#cssB').addEventListener('mouseleave', noneBoxLeft);
function showBoxLeft(){
    app.get('#cssB').style.width = '105px';
    app.get('#cssB').style.height = '32px';
    app.get('#cssB').style.lineHeight = '35px';
    app.get('#cssB').style.fontSize = '18px';
    app.get('#showDivLeft').style.top = '140px';
    app.get('#showDivLeft').style.right = '20px';
    app.get('#showDivLeft').style.width = '200px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').style.padding = '15px 10px 0px 10px';
    app.get('#showDivLeft').innerHTML = 'CSS <br><br> 層疊樣式表（英語：Cascading Style Sheets，簡寫CSS），是一種用來為結構化文件（如 HTML 文件或 XML 應用）添加樣式（字型、間距和顏色等）的電腦語言。 <br><br>';
}

function noneBoxLeft(){
    app.get('#cssB').style.width = '100px';
    app.get('#cssB').style.height = '30px';
    app.get('#cssB').style.lineHeight = '30px';
    app.get('#cssB').style.fontSize = '16px';
    app.get('#showDivLeft').style.width = '180px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').innerHTML = '';
    app.get('#showDivLeft').style.padding = '';
}

// jQuery
app.get('#jQueryB').addEventListener('mouseover', showBoxJquery);
app.get('#jQueryB').addEventListener('mouseleave', noneBoxJquery);

function showBoxJquery(){
    app.get('#jQueryB').style.width = '105px';
    app.get('#jQueryB').style.height = '32px';
    app.get('#jQueryB').style.lineHeight = '35px';
    app.get('#jQueryB').style.fontSize = '18px';
    app.get('#showDivLeft').style.top = '240px';
    app.get('#showDivLeft').style.right = '20px';
    app.get('#showDivLeft').style.width = '200px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').style.padding = '15px 10px 0px 10px';
    app.get('#showDivLeft').innerHTML = 'jQuery <br><br> jQuery 是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。 <br><br>';
}

function noneBoxJquery(){
    app.get('#jQueryB').style.width = '100px';
    app.get('#jQueryB').style.height = '30px';
    app.get('#jQueryB').style.lineHeight = '30px';
    app.get('#jQueryB').style.fontSize = '16px';
    app.get('#showDivLeft').style.width = '180px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').innerHTML = '';
    app.get('#showDivLeft').style.padding = '';
}

// ES6
app.get('#es6B').addEventListener('mouseover', showBoxEs6);
app.get('#es6B').addEventListener('mouseleave', noneBoxEs6);

function showBoxEs6(){
    app.get('#es6B').style.width = '105px';
    app.get('#es6B').style.height = '32px';
    app.get('#es6B').style.lineHeight = '35px';
    app.get('#es6B').style.fontSize = '18px';
    app.get('#showDivLeft').style.top = '435px';
    app.get('#showDivLeft').style.right = '20px';
    app.get('#showDivLeft').style.width = '200px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').style.padding = '15px 10px 0px 10px';
    app.get('#showDivLeft').innerHTML = 'SCSS <br><br> Sass 是一個將指令碼解析成 CSS 的手稿語言，即 SassScript。Sass 包括兩套語法。最開始的語法叫做「縮排語法」，使用縮排來區分程式碼塊，並且用換行將不同規則分隔開。而較新的語法叫做「SCSS」。 <br><br>';
}

function noneBoxEs6(){
    app.get('#es6B').style.width = '100px';
    app.get('#es6B').style.height = '30px';
    app.get('#es6B').style.lineHeight = '30px';
    app.get('#es6B').style.fontSize = '16px';
    app.get('#showDivLeft').style.width = '180px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').innerHTML = '';
    app.get('#showDivLeft').style.padding = '';
}

// SPA
app.get('#spaB').addEventListener('mouseover', showBoxSpa);
app.get('#spaB').addEventListener('mouseleave', noneBoxSpa);

function showBoxSpa(){
    app.get('#spaB').style.width = '105px';
    app.get('#spaB').style.height = '32px';
    app.get('#spaB').style.lineHeight = '35px';
    app.get('#spaB').style.fontSize = '18px';
    app.get('#showDivLeft').style.top = '485px';
    app.get('#showDivLeft').style.right = '20px';
    app.get('#showDivLeft').style.width = '200px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').style.padding = '15px 10px 0px 10px';
    app.get('#showDivLeft').innerHTML = 'bootstrap <br><br> Bootstrap 是一組用於網站和網路應用程式開發的開源前端框架，提供字體排印、表單、按鈕、導航及其他各種元件及 Javascript 擴充套件，旨在使動態網頁和 Web 應用的開發更加容易。 <br><br>';
}

function noneBoxSpa(){
    app.get('#spaB').style.width = '100px';
    app.get('#spaB').style.height = '30px';
    app.get('#spaB').style.lineHeight = '30px';
    app.get('#spaB').style.fontSize = '16px';
    app.get('#showDivLeft').style.width = '180px';
    app.get('#showDivLeft').style.height = 'auto';
    app.get('#showDivLeft').innerHTML = '';
    app.get('#showDivLeft').style.padding = '';
}

// alert 
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(function(){
    app.loading();
}, 1000)

app.get('#userIcon').addEventListener('mouseover', function(){
 // Number of online users is the number of objects in the presence list.
listRef.on('value', function(snap) {
    app.get('#userIcon').innerHTML = snap.numChildren() + ' 人也在玩';
}); 
});

app.get('#userIcon').addEventListener('mouseleave', function(){
    app.get('#userIcon').innerHTML = '';
})

// display how many person on site
let listRef = database.ref('counter');
let userRef = listRef.push();
// Add ourselves to presence list when online.
let presenceRef = database.ref('.info/connected');
presenceRef.on('value', function(snap) {
  if (snap.val()) {
    // Remove ourselves when we disconnect.
    userRef.onDisconnect().remove();
     userRef.set(true);
  }
});