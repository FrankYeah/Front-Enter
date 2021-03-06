// personal data
setTimeout(function(){
    let getAllMemberData = database.ref('member');
    let dataExist;
    getAllMemberData.orderByChild('mail').equalTo(userLogin.email).on('child_added', function(snapshot) {
        dataExist = snapshot.val();
    });  
    // if firebase have data
    if(dataExist == undefined){
        // if firebase have no data, use google data
        if(userLogin.photoURL){
            app.get('#inputName').value = userLogin.displayName;
            app.get('#inputMail').value = userLogin.email;
            if(userLogin.phoneNumber == undefined){
                app.get('#inputPhone').value = 'phone';
            }
            if(userLogin.displayName == undefined){
                app.get('#inputName').value = 'name';
            }
            app.get('#inputPhoto').style.background = "url('" + userLogin.photoURL + "')";
        }
    }else{
        // if firebase have data, use it
        if(dataExist.name){
            app.get('#inputName').value = dataExist.name;
        }
        app.get('#inputMail').value = dataExist.mail;

        if(dataExist.phone){
            app.get('#inputPhone').value = dataExist.phone;
        }
        if(dataExist.photoUrl){
            app.get('#inputPhoto').style.background = "url('" + dataExist.photoUrl + "')";
        }
    }
    
    app.get('#inputPhoto').style.backgroundPosition= 'center';
    app.get('#inputPhoto').style.backgroundSize= 'cover';
    app.get('#inputPhoto').style.backgroundRepeat= 'no-repeat';
    if(userLogin.email == 'aaa24295234@gmail.com' || userLogin.email == 'frontenter2018@gmail.com'){
        app.get('#managePost').style.display = 'block';
    }
}, 4000);

app.get('#fixData').addEventListener('click', function(){
    app.get('#inputName').disabled = false;
    app.get('#inputPhone').disabled = false;
    app.get('#inputName').style.backgroundColor = 'white';
    app.get('#inputPhone').style.backgroundColor = 'white';
    app.get('#inputPhone').style.border = '1px solid rgba(230, 230, 230, 0.7)';
    app.get('#inputName').style.border = '1px solid rgba(230, 230, 230, 0.7)';
    app.get('#fixData').style.display = 'none';
    app.get('#confirmCancel').style.display = 'flex';
});

app.get('#makeConfirm').addEventListener('click',function (){
    // disable
    app.get('#inputName').disabled = true;
    app.get('#inputPhone').disabled = true;
    app.get('#inputName').style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get('#inputPhone').style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get('#inputName').style.border = '0px solid rgba(230, 230, 230, 0.7)';
    app.get('#inputPhone').style.border = '0px solid rgba(230, 230, 230, 0.7)';
    // display amend data
    app.get('#fixData').style.display = 'block';
    app.get('#confirmCancel').style.display = 'none';
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
                name: app.get('#inputName').value,
                mail : userLogin.email,
                phone : app.get('#inputPhone').value,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : newPostKey
            });
        }
    }else{
        // if firebase have data, use it 
            firebase.database().ref('member/'+ dataExist.uid).set({
                name: app.get('#inputName').value,
                mail : userLogin.email,
                phone : app.get('#inputPhone').value,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : dataExist.uid
            });
    }
    app.get('#alertBigBox').style.display = 'flex';
    app.get('#alertWord').innerHTML = '資料修改成功';
});

app.get('#makeCancel').addEventListener('click', function (){
    // disable
    app.get('#inputName').disabled = true;
    app.get('#inputPhone').disabled = true;
    app.get('#inputName').style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get('#inputPhone').style.backgroundColor = 'rgba(230, 230, 230, 0)';
    app.get('#inputPhone').style.border = '0px solid rgba(230, 230, 230, 0.7)';
    app.get('#inputName').style.border = '0px solid rgba(230, 230, 230, 0.7)';
    // display amend data
    app.get('#fixData').style.display = 'block';
    app.get('#confirmCancel').style.display = 'none';
    // cancel amend logic
    cancelToFixData();
});

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
            app.get('#inputName').value = userLogin.name;
        }
    }else{
        // if firebase have data
        app.get('#inputName').value =  dataExist.name;
        app.get('#inputPhone').value = dataExist.phone;
    }
}

// click post management, clear, display post、edit、delete  // log out
document.getElementById('logoutTest').onclick = function(){
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
app.get('#personalData').addEventListener('click', function(){
    app.get('#displayResult').style.display = 'flex';
    app.get('#createRightDiv').style.display = 'none';
    app.get('#forDeletePost').style.display = 'none';
    app.get('#rightCollection').style.display = 'none';
    app.get('#forDeletePost').innerHTML = '';
});

// send the post
app.get('#createPostPost').addEventListener('click', function(){
    window.location = 'backstage.html';
})

// manage Post
app.get('#managePost').addEventListener('click', function(){
    app.get('#displayResult').style.display = 'none';
    app.get('#rightCollection').style.display = 'none';
    app.get('#createRightDiv').style.display = 'flex';
    app.get('#forDeletePost').style.display = 'flex';
    let getAllDeleteData = database.ref('article');
    getAllDeleteData.orderByChild('skill').on('child_added', function(snapshot) {
        let myAllData = snapshot.val();
        app.createElement('div', 'big-post-div', myAllData.creatTime, 'forDeletePost', '', '');
        app.createElement('div', 'post-button', '', myAllData.creatTime, myAllData.name, '');
        editImg(myAllData);
        deleteImg(myAllData);
    });
});

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
                app.get('#alertBigBox').style.display = 'flex';
                app.get('#alertWord').innerHTML = myAllData.name + '已刪除，準備重新載入';
                setTimeout(function(){window.location.reload()} , 1000)
                });
            });  
        } 
    }
}

// click edit post
app.get('#createPostEdit').addEventListener('click', function(){
    const imgDeleteIt = document.querySelectorAll('div.imgDelete');
    for(let i=0; i<imgDeleteIt.length; i++){
        imgDeleteIt[i].style.display='block';
    }
    const imgEditIt = document.querySelectorAll('div.imgEdit');
    for(let i=0; i<imgEditIt.length; i++){
        imgEditIt[i].style.display='block';
    }
    const imgPostIt = document.querySelectorAll('div.big-post-div');
    for(let i=0; i<imgPostIt.length; i++){
        imgPostIt[i].style.color='rgb(26, 216, 211)';
        imgPostIt[i].style.backgroundColor='white';
        imgPostIt[i].style.border='1px solid rgb(26, 216, 211)';
    }
});

// click collection
app.get('#myCollection').addEventListener('click',createCollectionLayout);
function createCollectionLayout(){
    app.get('#forDeletePost').innerHTML = '';
    app.get('#rightCollection').innerHTML = '';
    app.get('#displayResult').style.display = 'none';
    app.get('#rightCollection').style.display = 'flex';
    app.get('#createRightDiv').style.display = 'none';
    (function(){
        let getLocal;
        getLocal = JSON.parse(window.localStorage.getItem(`collection`));
        if(getLocal == ''){
            app.get('#rightCollection').textContent = '可以前往探索頁面進行收藏唷。';
        }else{
            for(let i = 0; i<getLocal.length ; i++){
                app.createElement('div', 'in-collection-div', 'inCollectionDiv' + i, 'rightCollection', '', '');
                app.collect.collectionImg(getLocal,i);
                app.createElement('div', 'in-collection-word', 'inCollectionWord' + i, 'inCollectionDiv' + i, getLocal[i].name, '');
                app.collect.collectionDelete(i);
            }
        }
    })()
}

app.collect.collectionImg = (getLocal, i) => {
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

app.collect.collectionDelete = (i) => {
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
app.get('#alertBigBox').style.display = 'none';
app.get('#alertButton').addEventListener('click', ()=>{
    app.get('#alertBigBox').style.display = 'none';
});

// close loading
setTimeout(() => {
    app.loading();
},3500)