
// keyvisual 輪播

const keyvisual = document.getElementById('keyvisual');
const keyvisualLink = document.getElementById('keyvisualLink');
let keyvisualImg = new Array("images/FE_key_visual.png","images/testPic1.jpg","images/testpic2.jpg",);
let keyvisualImg_len = keyvisualImg.length;  // 圖檔數量
let i=1;  
setInterval("changeKevisual()",5000);

function changeKevisual(){
    // keyvisual.style.animation = "opacityOut 2.5s ease 0s infinite alternate";
    keyvisual.style.background  =  "url('" + keyvisualImg[i] + "')";    
    keyvisual.style.backgroundRepeat  =  "no-repeat";  
    keyvisual.style.backgroundSize  =  "100% 630px";

    i++;
    if(i>=keyvisualImg_len) { i=0;}

}