// alert 
app.get("#alertBigBox").style.display = 'none';
app.get("#alertButton").addEventListener('click', ()=>{
    app.get("#alertBigBox").style.display = 'none';
});

// close loading
setTimeout(function(){
    loadingAnimation.style.height = '0px';
    loadingAnimation.style.opacity = '0.9';
    loadingDrawing.style.height = '0px';
    loadingDrawing.style.opacity = '0.9';
    loadingImg.style.marginBottom = '-1000px';
    header.style.animation = 'headerGoUp 0.9s ease 0s 1 alternate';
    myAside.style.animation = 'asideBottom 0.9s ease 0s 1 alternate';
    setTimeout(function(){
        loadingAnimation.style.display = 'none';
    }
    , 600)
}
, 1000)