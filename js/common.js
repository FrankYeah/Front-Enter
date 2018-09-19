//判斷滾動，改變 header、logo 顏色

const webSeach = document.getElementById('webSeach');
const logo = document.getElementById('logo');
const headerP1 = document.getElementById('headerP1');
const headerP2 = document.getElementById('headerP2');
const headerP3 = document.getElementById('headerP3');
const header = document.getElementById('header');

window.addEventListener('scroll',winScroll);
function winScroll(){
    if(document.documentElement.scrollTop>100){
        webSeach.src = "";
        logo.src = "images/FE_logo-4.png";
        headerP1.style.color="rgb(128,128,128)";headerP3.style.color="rgb(128,128,128)";headerP2.style.color="rgb(128,128,128)";
        header.style.backgroundColor="white";
      }else if(document.documentElement.scrollTop<100){
        webSeach.src = "images/FE_search.png";
        logo.src = "images/FE_logo-1.png";
        headerP1.style.color="white";headerP3.style.color="white";headerP2.style.color="white";
        header.style.backgroundColor="";
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

// 遊戲上下跳動

const testGo = document.getElementById('testGo');
window.addEventListener('click',upAndDown)

function upAndDown(){
    console.log('hi')
    header.style.animation = "myfirst 2s infinite";
}