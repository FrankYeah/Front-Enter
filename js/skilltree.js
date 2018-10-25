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
    app.get('#htmlAnswerOne').addEventListener('click', app.skillTree.guestHtmlRight);
    app.get('#htmlAnswerTwo').addEventListener('click', app.skillTree.guestHtmlWrongTwo);
    app.get('#htmlAnswerThree').addEventListener('click', app.skillTree.guestHtmlWrongThree);
});

app.guestWrong = function(bc){
    app.get(bc).style.animation = 'wobbleHorizontal 0.6s ease 0s 1 alternate';
    app.get(bc).style.background= 'url(../Front-Enter/images/cancel-FC4803.svg)';
    app.get(bc).style.backgroundSize= 'contain';
    app.get(bc).style.backgroundColor= 'white';
    app.get(bc).style.backgroundRepeat= 'no-repeat';
    app.get(bc).style.backgroundOrigin = 'content-box';
}

app.skillTree.guestHtmlWrongTwo = function(event){
    event.stopPropagation();
    app.guestWrong('#htmlAnswerTwo');
}

app.skillTree.guestHtmlWrongThree = function(event){
    event.stopPropagation();
    app.guestWrong('#htmlAnswerThree');
}
// typing func
app.typing = function(top, left,sameText, encourage, event){
    app.get('#userIcon').style.top = top;
    app.get('#userIcon').style.left = left;
    if(event.target.textContent == sameText){
        app.get('#fullType').style.display = 'flex';
        let str = encourage;
        let i = 0;
        app.skillTree.typingWord = function(){
            app.get('#bgMusic').play();
            if (i <= str.length) {
                app.get('#typeWord').innerHTML = str.slice(0, i++) + '_';
                setTimeout(app.skillTree.typingWord, 60);
            }else{    
                app.get('#typeWord').innerHTML = str;  //end, remove _ 
                app.get('#bgMusic').pause();
                setTimeout(function(){app.get('#fullType').style.display = 'none';}, 1500)
            }
        }
        app.skillTree.typingWord();
    }
}

app.skillTree.guestHtmlRight = function(event){
    event.stopPropagation();
    app.get('#htmlAnswerOne').style.background= 'url(../Front-Enter/images/checked-FFD800.svg)';
    app.get('#htmlAnswerOne').style.backgroundSize= 'contain';
    app.get('#htmlAnswerOne').style.backgroundColor= 'white';
    app.get('#htmlAnswerOne').style. backgroundRepeat= 'no-repeat';
    app.get('#htmlAnswerOne').style.backgroundOrigin = 'content-box';
    app.skillTree.winGame('#htmlB', '#htmlOne', '#htmlOne', '#htmlOne', '#cssB', '#cssB');
    app.get('#htmlAnswerTwo').style.animation = '';
    app.get('#htmlAnswerThree').style.animation = '';
    app.get('#arrowContinue').style.display = 'block';
    // type
    app.typing('10.2%', '40%', '標籤語言', '你通過第一關，HTML 是成為前端工程師的橋頭堡，也是網站給人的第一印象，一定要學好才行。', event);
}

app.get('#fullType').addEventListener('click', function(){
    app.get('#fullType').style.display = 'none';
})
app.get('#typeWord').addEventListener('click', function(){
    app.get('#fullType').style.display = 'none';
})
app.skillTree.winGame = function(fullColor, minus, diagonalOne, diagonalTwo, boderColorOne, boderColorTwo){
    app.get(fullColor).style.backgroundColor = 'rgb(26, 216, 211)';
    app.get(fullColor).style.color = 'white';
    app.get(minus).style.background = 'url("../images/minus-symbol.svg") 0% 0% / cover no-repeat ';
    app.get(diagonalOne).style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get(diagonalTwo).style.background = 'url("../images/diagonal-line.svg") 0% 0% / cover no-repeat ';
    app.get(boderColorOne).style.cursor = 'pointer';
    app.get(boderColorOne).style.color = 'rgb(26, 216, 211)';
    app.get(boderColorOne).style.border = '1px solid rgb(26, 216, 211)';
    app.get(boderColorTwo).style.cursor = 'pointer';
    app.get(boderColorTwo).style.color = 'rgb(26, 216, 211)';
    app.get(boderColorTwo).style.border = '1px solid rgb(26, 216, 211)';
}

// css 
app.get('#cssB').addEventListener('click', function(){
    if(app.get('#cssB').style.cursor){
        app.qa('SCSS 跟 CSS 差別？','SCSS 用變數控制','SCSS 非縮排語法', '不同程式語言');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#cssB', '#cssOne', '#htmlOne', '#htmlOne', '#jsB', '#jsB');
            app.typing('10.2%','55%', 'SCSS 用變數控制', '哇，你竟然連 CSS 也略懂略懂。如果階層樣式學得好，就具備基礎網頁設計師的能力了，這時候，對於細節的掌握就更加重要囉。', event);
        });
    }
});

// js 
app.get('#jsB').addEventListener('click', function(){
    if(app.get('#jsB').style.cursor){
        app.qa('何者非 JS 定義變數的方式？','function','var', 'let');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#jsB', '#jsTwo', '#jsOne', '#jsOne', '#jQueryB', '#rwdB');
            app.typing('20.2%', '53%', 'function', '恭喜你通過 JavaScript 關卡。JavaScript 也是小編最喜歡的語言，掌握它，就等於邁入前端工程師的行列，它不只能為你帶來一份工作，也擴展你的視野，擁有接軌科技的能力。', event);
        });
    }
});

// jQuery
app.get('#jQueryB').addEventListener('click', function(){
    if(app.get('#jQueryB').style.cursor){
        app.qa('jQuery 與 JS 之比較何者正確？','jQuery 含錢字符號','JS 是一種框架', 'jQuery 並未開源');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.get('#jQueryB').style.backgroundColor = 'rgb(26, 216, 211)';
            app.get('#jQueryB').style.color = 'white';
            app.typing('20.2%', '42%', 'jQuery 含錢字符號', 'jQuery 是相當方便的 JavaScript 函式庫，它幫你把程式封裝好，只要加上經典的 $ 字號作為前綴，就能使用眾多功能。', event);
        });
    }
});

// rwd
app.get('#rwdB').addEventListener('click', function(){
    if(app.get('#rwdB').style.cursor){
        app.qa('如何在不同螢幕寬度下改變樣式？','透過 media 操作','使用事件物件', '變數控制');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#rwdB', '#jsTwo', '#rwdOne', '#rwdOne', '#githubB', '#githubB');
            app.typing('31.7%', '48.5%', '透過 media 操作', 'RWD 很神奇吧，它讓你在手機、平板上，都能方便觀看網頁，而不用放大縮小視窗，是讓使用者體驗升級的良方。', event);
        });
    }
});

//github
app.get('#githubB').addEventListener('click', function(){
    if(app.get('#githubB').style.cursor){
        app.qa('GitHub 不能做什麼？','測試程式正確性','程式碼倉庫', '共同軟體開發');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#githubB', '#jsTwo', '#githubOne', '#githubTwo', '#scssB', '#webpackB');
            app.typing('42.6%', '48.5%', '測試程式正確性', '在學習程式語言之前，很難想像有 GitHub 的存在吧，竟然有個倉庫專門在管理程式語言，還能讓人複製、共同編輯，並記錄每一次的 commit ，是一款優秀的協作工具。', event);
        });
    }
});

// SCSS
app.get('#scssB').addEventListener('click', function(){
    if(app.get('#scssB').style.cursor){
        app.qa('何者不屬於 CSS 預處理器？','Gulp','SCSS', 'PostCSS');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#scssB', '#scssOne', '#githubOne', '#githubTwo', '#bootstrapB', '#bootstrapB');
            app.typing('42.6%', '40.9%', 'Gulp', 'css 屬於程式設計入門款，而預處理器能以更有效率的方式，撰寫階層樣式，如果你擁有 JavaScript 的基本概念，學起來會特別快唷。', event);
        });
    }
});

// webpack
app.get('#webpackB').addEventListener('click', function(){
    if(app.get('#webpackB').style.cursor){
        app.qa('使用 Webpack 需要安裝？','Node.js','Babel', 'styled-components');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#webpackB', '#webpackOne', '#githubOne', '#githubTwo', '#reactB', '#reactB');
            app.typing('42.6%', '55.9%', 'Node.js', '你已經越來越厲害，掌握了近期火紅的打包工具，Webpack 和 React 是絕配，是幫助瀏覽器進行「翻譯」的良方。', event);
        });
    }
});

// bootstrap
app.get('#bootstrapB').addEventListener('click', function(){
    if(app.get('#bootstrapB').style.cursor){
        app.qa('Bootstrap 是一種？','樣式擴充元件','打包工具', '套件管理工具');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.get('#bootstrapB').style.backgroundColor = 'rgb(26, 216, 211)';
            app.get('#bootstrapB').style.color = 'white';
            app.typing('53.1%', '39.4%', '樣式擴充元件', '看來你學蠻快的，Bootstrap 能做到的，css 也能做到，如果有時間，不仿試試手刻 Bootstrap 的特效，精進樣式調校的能力。', event);
        });
    }
});

// react
app.get('#reactB').addEventListener('click', function(){
    if(app.get('#reactB').style.cursor){
        app.qa('React 有何特性？','建置單頁式網站','不存在異步問題', '不需要 Babel 編譯');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.skillTree.winGame('#reactB', '#jsTwo', '#reactOne', '#reactOne', '#tddB', '#tddB');
            app.typing('53.1%', '57.3%', '建置單頁式網站', '你太強了，React 是不容易掌握的框架，能讓使用者的體驗更好，你所使用的 facebook 就是運用這套框架呢。', event);
        });
    }
});

// TDD
app.get('#tddB').addEventListener('click', function(){
    if(app.get('#tddB').style.cursor){
        app.qa('為什麼要做單元測試？','確保程式邏輯正確','讓 scrum 運作順利', '資料安全性');
        app.get('#htmlAnswerOne').addEventListener('click', function(){
            app.get('#tddB').style.backgroundColor = 'rgb(26, 216, 211)';
            app.get('#tddB').style.color = 'white';
            app.typing('63.8%', '49%', '確保程式邏輯正確', '終於抵達最後一關了，單元測試是為了確保函式的正確性，而進行的作業。雖然單元測試是最後一關，但工程的世界無止盡，身為一位 geek 就是要不斷學習精進唷。', event);
        });
    }
});

// mouse over
app.skillTree.showBox = function(word, divBox, topNum, Lnum, Rnum, innerWord){
    app.get(word).style.width = '105px';
    app.get(word).style.height = '32px';
    app.get(word).style.lineHeight = '32px';
    app.get(word).style.fontSize = '17px';
    app.get(divBox).style.top = topNum;
    app.get(divBox).style.left = Lnum;
    app.get(divBox).style.right = Rnum;
    app.get(divBox).style.width = '200px';
    app.get(divBox).style.height = 'auto';
    app.get(divBox).style.padding = '15px 10px 0px 10px';
    app.get(divBox).innerHTML = innerWord;
}

app.skillTree.noneBox = function(word, divBox){
    app.get(word).style.width = '100px';
    app.get(word).style.height = '30px';
    app.get(word).style.lineHeight = '30px';
    app.get(word).style.fontSize = '16px';
    app.get(divBox).style.width = '180px';
    app.get(divBox).style.height = 'auto';
    app.get(divBox).innerHTML = '';
    app.get(divBox).style.padding = '';
}

// html
app.get('#htmlB').addEventListener('mouseover', function(){ app.skillTree.showBox('#htmlB','#showDivRight', '40px', '20px', '0px','HTML <br><br> 超文件標示語言（英語：HyperText Markup Language，簡稱：HTML）是一種用於建立網頁的標準標示語言。 <br><br>' ) });
app.get('#htmlB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#htmlB', '#showDivRight'); });
// js
app.get('#jsB').addEventListener('mouseover', function(){ app.skillTree.showBox('#jsB','#showDivRight', '140px', '20px', '0px', 'JavaScript <br><br> JavaScript 是一門基於原型、函式先行的語言，是一門多範式的語言，它支援物件導向編程，指令式程式設計，以及函數語言程式設計。 <br><br>' ) });
app.get('#jsB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#jsB', '#showDivRight'); });
// dom
app.get('#rwdB').addEventListener('mouseover', function(){ app.skillTree.showBox('#rwdB','#showDivRight', '240px', '20px', '0px', 'RWD <br><br> 響應式網頁設計（英語：Responsive web design，通常縮寫為 RWD），是一種網頁設計的技術做法，該設計可使網站在不同的裝置上瀏覽時，對應不同解析度皆有適合的呈現，減少使用者進行縮放、平移和捲動等操作行為。 <br><br>' ) });
app.get('#rwdB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#rwdB', '#showDivRight'); });
// ajax
app.get('#githubB').addEventListener('mouseover', function(){ app.skillTree.showBox('#githubB','#showDivRight', '335px', '20px', '0px', 'GitHub <br><br> GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務，由 GitHub 公司（曾稱 Logical Awesome）開發者使用 Ruby on Rails 編寫而成。 <br><br>' ) });
app.get('#githubB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#githubB', '#showDivRight'); });
// json
app.get('#webpackB').addEventListener('mouseover', function(){ app.skillTree.showBox('#webpackB','#showDivRight', '435px', '20px','0px', 'Webpack <br><br> Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成優化過的程式碼。 <br><br>' ) });
app.get('#webpackB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#webpackB', '#showDivRight'); });
// APIs
app.get('#reactB').addEventListener('mouseover', function(){ app.skillTree.showBox('#reactB','#showDivRight', '445px', '20px','0px', 'React <br><br> React 是一個為資料提供彩現為 HTML 視圖的開源 JavaScript 庫。React 視圖通常採用包含以自訂 HTML 標記規定的其他元件的元件彩現。 <br><br>' ) });
app.get('#reactB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#reactB', '#showDivRight'); });
// TDD
app.get('#tddB').addEventListener('mouseover', function(){ app.skillTree.showBox('#tddB','#showDivRight', '445px', '20px','0px', 'Unit Testing <br><br> 在電腦編程中，單元測試（英語：Unit Testing）又稱為模組測試，是針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作。程式單元是應用的最小可測試部件。 <br><br>' ) });
app.get('#tddB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#tddB', '#showDivRight'); });
// css
app.get('#cssB').addEventListener('mouseover', function(){ app.skillTree.showBox('#cssB','#showDivLeft', '140px','0px', '20px', 'CSS <br><br> 層疊樣式表（英語：Cascading Style Sheets，簡寫CSS），是一種用來為結構化文件（如 HTML 文件或 XML 應用）添加樣式（字型、間距和顏色等）的電腦語言。 <br><br>' ) });
app.get('#cssB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#cssB', '#showDivLeft'); });
// jQuery
app.get('#jQueryB').addEventListener('mouseover', function(){ app.skillTree.showBox('#jQueryB','#showDivLeft', '240px', '0px','20px','jQuery <br><br> jQuery 是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。 <br><br>' ) });
app.get('#jQueryB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#jQueryB', '#showDivLeft'); });
// ES6
app.get('#scssB').addEventListener('mouseover', function(){ app.skillTree.showBox('#scssB','#showDivLeft', '435px', '0px', '20px','SCSS <br><br> Sass 是一個將指令碼解析成 CSS 的手稿語言，即 SassScript。Sass 包括兩套語法。最開始的語法叫做「縮排語法」，使用縮排來區分程式碼塊，並且用換行將不同規則分隔開。而較新的語法叫做「SCSS」。 <br><br>' ) });
app.get('#scssB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#scssB', '#showDivLeft'); });
// SPA
app.get('#bootstrapB').addEventListener('mouseover', function(){ app.skillTree.showBox('#bootstrapB','#showDivLeft', '485px', '0px', '20px','bootstrap <br><br> Bootstrap 是一組用於網站和網路應用程式開發的開源前端框架，提供字體排印、表單、按鈕、導航及其他各種元件及 Javascript 擴充套件，旨在使動態網頁和 Web 應用的開發更加容易。 <br><br>' ) });
app.get('#bootstrapB').addEventListener('mouseleave', function(){ app.skillTree.noneBox('#bootstrapB', '#showDivLeft'); });

// alert 
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(function(){
    app.loading();
}, 1000)

 // Number of online users is the number of objects in the presence list.
app.get('#userIcon').addEventListener('mouseover', function(){
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