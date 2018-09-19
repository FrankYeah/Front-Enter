//判斷滾動，改變 header、logo 顏色

const webSeach = document.getElementById('webSeach');
const logo = document.getElementById('logo');
const headerP1 = document.getElementById('headerP1');
const headerP2 = document.getElementById('headerP2');
const headerP3 = document.getElementById('headerP3');
const header = document.getElementById('header');

window.addEventListener('scroll',winScroll);
function winScroll(){
    if(document.documentElement.scrollTop>100 && document.documentElement.scrollTop<150){
        console.log('123')
        webSeach.src = "";
        logo.src = "images/FE_logo-4.png";
        headerP1.style.color="rgb(128,128,128)"
        headerP2.style.color="rgb(128,128,128)"
        headerP3.style.color="rgb(128,128,128)"
        header.style.backgroundColor="white";
      }else if(document.documentElement.scrollTop<100){
        console.log('333')
        webSeach.src = "images/FE_search.png";
        logo.src = "images/FE_logo-1.png";
        headerP1.style.color="white"
        headerP2.style.color="white"
        headerP3.style.color="white"
        header.style.backgroundColor="";
      }
}

