// personal data

setTimeout(loadAllLoginStuff, 4000);

function loadAllLoginStuff(){
    let getAllMemberData = database.ref('member');
    let dataExist;
    getAllMemberData.orderByChild('mail').equalTo(userLogin.email).on('child_added', function(snapshot) {
        dataExist = snapshot.val();
    });  
    // if firebase have data
    if(dataExist == undefined){
        // if firebase have no data, use google data
        if(userLogin.photoURL){
            app.get("#inputName").value = userLogin.displayName;
            app.get("#inputMail").value = userLogin.email;
            if(userLogin.phoneNumber == undefined){
                app.get("#inputPhone").value = 'phone';
            }
            if(userLogin.displayName == undefined){
                app.get("#inputName").value = 'name';
            }
            app.get("#inputPhoto").style.background = "url('" + userLogin.photoURL + "')";
        }
    }else{
        // if firebase have data, use it
        if(dataExist.name){
            app.get("#inputName").value = dataExist.name;
        }
        app.get("#inputMail").value = dataExist.mail;

        if(dataExist.phone){
            app.get("#inputPhone").value = dataExist.phone;
        }
        if(dataExist.photoUrl){
            app.get("#inputPhoto").style.background = "url('" + dataExist.photoUrl + "')";
        }
    }
    
    app.get("#inputPhoto").style.backgroundPosition= 'center';
    app.get("#inputPhoto").style.backgroundSize= 'cover';
    app.get("#inputPhoto").style.backgroundRepeat= 'no-repeat';
    if(userLogin.email == 'aaa24295234@gmail.com' || userLogin.email == 'frontenter2018@gmail.com'){
        app.get("#managePost").style.display = 'block';
    }
}

app.get("#fixData").addEventListener('click', startFix);
app.get("#makeConfirm").addEventListener('click', startConfirm);
app.get("#makeCancel").addEventListener('click', startCancel);

function startFix(){
    app.get("#inputName").disabled = false;
    app.get("#inputPhone").disabled = false;
    app.get("#inputName").style.backgroundColor = 'white';
    app.get("#inputPhone").style.backgroundColor = 'white';
    app.get("#inputPhone").style.border = '1px solid rgba(230, 230, 230, 0.7)';
    app.get("#inputName").style.border = '1px solid rgba(230, 230, 230, 0.7)';
    app.get("#fixData").style.display = 'none';
    app.get("#confirmCancel").style.display = 'flex';
}

function startConfirm(){
    // disable
    app.get("#inputName").disabled = true;
    app.get("#inputPhone").disabled = true;
    app.get("#inputName").style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get("#inputPhone").style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get("#inputPhone").style.border = '0px solid rgba(230, 230, 230, 0.7)';
    app.get("#inputName").style.border = '0px solid rgba(230, 230, 230, 0.7)';
    // display amend data
    app.get("#fixData").style.display = 'block';
    app.get("#confirmCancel").style.display = 'none';
    // store data to firebase
    let getAllMemberData = database.ref('member');
    let dataExist;
    getAllMemberData.orderByChild('mail').equalTo(userLogin.email).on('child_added', function(snapshot) {
        dataExist = snapshot.val();
    });  
    // if firebase have data
    if(dataExist == undefined){
        // if firebase no data, use google
        if(userLogin.photoURL){
            firebase.database().ref('member/'+newPostKey).set({
                name: app.get("#inputName").value,
                mail : userLogin.email,
                phone : app.get("#inputPhone").value,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : newPostKey
            });
        }
    }else{
        // if firebase have data, use it 
            firebase.database().ref('member/'+ dataExist.uid).set({
                name: app.get("#inputName").value,
                mail : userLogin.email,
                phone : app.get("#inputPhone").value,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : dataExist.uid
            });
    }
    confirmAllDataChange();
}

function startCancel(){
    // disable
    app.get("#inputName").disabled = true;
    app.get("#inputPhone").disabled = true;
    app.get("#inputName").style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get("#inputPhone").style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get("#inputPhone").style.border = '0px solid rgba(230, 230, 230, 0.7)';
    app.get("#inputName").style.border = '0px solid rgba(230, 230, 230, 0.7)';
    // display amend data
    app.get("#fixData").style.display = 'block';
    app.get("#confirmCancel").style.display = 'none';
    // cancel amend logic
    cancelToFixData();
}

    function cancelToFixData(){
        let getAllMemberData = database.ref('member');
        let dataExist;
        getAllMemberData.orderByChild('mail').equalTo(userLogin.email).on('child_added', function(snapshot) {
            dataExist = snapshot.val();
        });  
        // if firebase have data
        if(dataExist == undefined){
            // firebase no data, use google
            if(userLogin.photoURL){
                app.get("#inputName").value = userLogin.name;
            }
        }else{
            // if firebase have data
            app.get("#inputName").value =  dataExist.name;
            app.get("#inputPhone").value = dataExist.phone;
        }
    }

// click post management, clear, display post、edit、delete
// log out

document.getElementById('logoutTest').onclick = logoutMeOut;

function logoutMeOut(){
    firebase.auth().signOut().then(function() {
        window.location.reload();
    }, function(error) {

    })
}

// set log in auth

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        userLogin = user;
        if(userLogin.email == 'aaa24295234@gmail.com' || userLogin.email == 'frontenter2018@gmail.com'){
            }else{

            }
    } else {
        userLogin = null;
        window.location = 'index.html' ; 
    }
  });

// re display personal data

app.get("#personalData").addEventListener('click', letPersonalAppear);

function letPersonalAppear(){
    app.get("#displayResult").style.display = 'flex';
    app.get("#createRightDiv").style.display = 'none';
    app.get("#forDeletePost").style.display = 'none';
    app.get("#rightCollection").style.display = 'none';
    app.get("#forDeletePost").innerHTML = '';
}

// send the post

app.get("#createPostPost").addEventListener('click', function(){
    window.location = 'backstage.html';
})

// manage Post

app.get("#managePost").addEventListener('click', createPostLayout);

function createPostLayout(){
    // hide personal data
    app.get("#displayResult").style.display = 'none';
    app.get("#rightCollection").style.display = 'none';
    // send the post, edit show up
    app.get("#createRightDiv").style.display = 'flex';
    app.get("#forDeletePost").style.display = 'flex';
    // create post
        createUpPost();
}

// create post

function createUpPost(){
    let getAllDeleteData = database.ref('article');
    getAllDeleteData.orderByChild('skill').on('child_added', function(snapshot) {
        let myAllData = snapshot.val();
        bigPostDiv(myAllData);
        postButton(myAllData);
        editImg(myAllData);
        deleteImg(myAllData);
    });
}

function bigPostDiv(myAllData){
    let newElement = document.createElement('div');
    newElement.className = 'big-post-div';
    newElement.id = myAllData.creatTime;
    document.getElementById('forDeletePost').appendChild(newElement);
}

function postButton(myAllData){
    let newElement = document.createElement('div');
    newElement.className = 'post-button';
    newElement.textContent = myAllData.name;
    document.getElementById(myAllData.creatTime).appendChild(newElement);
}

function editImg(myAllData){
    let newElement = document.createElement('div');
    newElement.className = 'imgEdit';
    document.getElementById(myAllData.creatTime).appendChild(newElement);
    newElement.onclick = function(){
        window.location = 'edit.html?id=' + myAllData.creatTime;
    }
}

function deleteImg(myAllData){
    let newElement = document.createElement('div');
    newElement.className = 'imgDelete';
    document.getElementById(myAllData.creatTime).appendChild(newElement);
    newElement.onclick = function(){
        if (confirm('確定要刪除此貼文？')) {
            let getAllDeleteData = database.ref('article');
            getAllDeleteData.orderByChild('creatTime').equalTo(myAllData.creatTime).on('child_added', function(snapshot) {
                // delete post
                firebase.database().ref('/article/' + snapshot.val().uid).remove().then(function(){
                youDeleteAnArticle(myAllData.name);
                setTimeout(function(){window.location.reload()} , 1000)
                });
            });  
        } else {

        }
    }
}

// click edit post

app.get("#createPostEdit").addEventListener('click', displayMyImg);

function displayMyImg(){

    const xx = document.querySelectorAll('div.imgDelete');
    for(let i=0; i<xx.length; i++){
        xx[i].style.display='block';
    }

    const yy = document.querySelectorAll('div.imgEdit');
    for(let i=0; i<yy.length; i++){
        yy[i].style.display='block';
    }

    const zz = document.querySelectorAll('div.big-post-div');
    for(let i=0; i<zz.length; i++){
        zz[i].style.color='rgb(26, 216, 211)';
        zz[i].style.backgroundColor='white';
        zz[i].style.border='1px solid rgb(26, 216, 211)';
    }
}

// click collection

app.get("#myCollection").addEventListener('click', createCollectionLayout);

function createCollectionLayout(){
    app.get("#rightCollection").innerHTML = '';
    app.get("#displayResult").style.display = 'none';
    app.get("#rightCollection").style.display = 'flex';
    app.get("#createRightDiv").style.display = 'none';
    createCollectionDiv();

}

function createCollectionDiv(){

    let getLocal;
    getLocal = JSON.parse(window.localStorage.getItem(`collection`));
    if(getLocal == ''){
        app.get("#rightCollection").textContent = '無收藏';
    }else{
        for(let i = 0; i<getLocal.length ; i++){
            inCollectionDiv(i);
            inCollectionImg(getLocal,i);
            inCollectionWord(getLocal,i);
            inCollectionDelete(i);
        }
    }

}

function inCollectionDiv(i){
    let newElement = document.createElement('div');
    newElement.id = 'inCollectionDiv' + i;
    newElement.className = 'in-collection-div';
    document.getElementById('rightCollection').appendChild(newElement);
}

function inCollectionImg(getLocal, i){
    let newElement = document.createElement('div');
    newElement.id = 'inCollectionImg' + i;
    newElement.style.background = "url('" + getLocal[i].photo + "')";   
    newElement.style.backgroundSize = 'cover';
    newElement.className = 'in-collection-img';
    document.getElementById('inCollectionDiv' + i).appendChild(newElement);
    newElement.onclick = function(){
        window.location = '/Front-Enter/content.html?id=' + getLocal[i].creatTime;
    }
}

function inCollectionWord(getLocal, i){
    let newElement = document.createElement('div');
    newElement.id = 'inCollectionWord' + i;
    newElement.className = 'in-collection-word';
    newElement.textContent = getLocal[i].name;
    document.getElementById('inCollectionDiv' + i).appendChild(newElement);
}

function inCollectionDelete(i){
    let newElement = document.createElement('div');
    newElement.id = 'inCollectionDelete' + i;
    newElement.className = 'in-collection-delete';
    document.getElementById('inCollectionDiv' + i).appendChild(newElement);
    newElement.onclick = function(){

        let getLocal;
        getLocal = JSON.parse(window.localStorage.getItem(`collection`));
        getLocal.splice(i, 1);
        localStorage.setItem(`collection`, JSON.stringify(getLocal)); 
        createCollectionLayout();

    }
}


// alert 

function youDeleteAnArticle(x){
    app.get("#alertBigBox").style.display = 'flex';
    app.get("#alertWord").innerHTML = x + '已刪除，準備重新載入';
}

function confirmAllDataChange(){
    app.get("#alertBigBox").style.display = 'flex';
    app.get("#alertWord").innerHTML = '資料修改成功';
}

app.get("#alertBigBox").style.display = 'none';
app.get("#alertButton").addEventListener('click', ()=>{
    app.get("#alertBigBox").style.display = 'none';
});


// close loading

setTimeout(letLoadingNone, 3500)
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