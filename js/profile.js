// 個人資料

const displayResult = document.getElementById('displayResult');
const inputName = document.getElementById('inputName');
const inputMail = document.getElementById('inputMail');
const inputPhoto = document.getElementById('inputPhoto');
const inputPhone = document.getElementById('inputPhone');
const fixData = document.getElementById('fixData');
const confirmCancel = document.getElementById('confirmCancel');
const makeConfirm = document.getElementById('makeConfirm');
const makeCancel = document.getElementById('makeCancel');
const managePost = document.getElementById('managePost');
const personalData = document.getElementById('personalData');
const createRightDiv = document.getElementById('createRightDiv');
const createPostPost = document.getElementById('createPostPost');
const createPostEdit = document.getElementById('createPostEdit');
const forDeletePost = document.getElementById('forDeletePost');
const rightCollection = document.getElementById('rightCollection');
const myCollection = document.getElementById('myCollection');

// window.onload = function(){
//     this.setTimeout(loadAllLoginStuff, 2000);
// }

setTimeout(loadAllLoginStuff, 4000);

function loadAllLoginStuff(){
    console.log('login ok')
    let getAllMemberData = database.ref("member");
    let dataExist;
    getAllMemberData.orderByChild("mail").equalTo(userLogin.email).on("child_added", function(snapshot) {
        dataExist = snapshot.val();
    });  
    // 如果 firebase 有資料
    if(dataExist == undefined){
        // firebase 沒有資料 用google的
        if(userLogin.photoURL){
            inputName.value = userLogin.displayName;
            inputMail.value = userLogin.email;
            if(userLogin.phoneNumber == undefined){
                inputPhone.value = 'phone';
            }
            if(userLogin.displayName == undefined){
                inputName.value = 'name';
            }
            inputPhoto.style.background = "url('" + userLogin.photoURL + "')";
            console.log('data from google')
        }
    }else{
        // firebase 有資料 用裡面的
        if(dataExist.name){
            inputName.value = dataExist.name;
        }
        inputMail.value = dataExist.mail;

        if(dataExist.phone){
            inputPhone.value = dataExist.phone;
        }
        if(dataExist.photoUrl){
            inputPhoto.style.background = "url('" + dataExist.photoUrl + "')";
        }
        console.log('data from firebase')
    }
    
    inputPhoto.style.backgroundPosition= 'center';
    inputPhoto.style.backgroundSize= 'cover';
    inputPhoto.style.backgroundRepeat= 'no-repeat';
    if(userLogin.email == 'aaa24295234@gmail.com'){
        managePost.style.display = 'block';
    }
}

fixData.addEventListener('click', startFix);
makeConfirm.addEventListener('click', startConfirm);
makeCancel.addEventListener('click', startCancel);

function startFix(){
    inputName.disabled = false;
    // inputMail.disabled = false;
    inputPhone.disabled = false;
    inputName.style.backgroundColor = 'white';
    // inputMail.style.backgroundColor = 'white';
    inputPhone.style.backgroundColor = 'white';
    inputPhone.style.border = '1px solid rgba(230, 230, 230, 0.7)';
    inputName.style.border = '1px solid rgba(230, 230, 230, 0.7)';
    console.log('abled')
    fixData.style.display = 'none';
    confirmCancel.style.display = 'flex';
}

function startConfirm(){
    // disable
    inputName.disabled = true;
    // inputMail.disabled = true;
    inputPhone.disabled = true;
    inputName.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    // inputMail.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.border = '0px solid rgba(230, 230, 230, 0.7)';
    inputName.style.border = '0px solid rgba(230, 230, 230, 0.7)';
    // 顯示修改資料 
    fixData.style.display = 'block';
    confirmCancel.style.display = 'none';
    // 將資料存上 firebase
    let getAllMemberData = database.ref("member");
    let dataExist;
    getAllMemberData.orderByChild("mail").equalTo(userLogin.email).on("child_added", function(snapshot) {
        dataExist = snapshot.val();
    });  
    // 如果 firebase 有資料
    if(dataExist == undefined){
        // firebase 沒有資料 用google的
        if(userLogin.photoURL){
            firebase.database().ref('member/'+newPostKey).set({
                name: inputName.value,
                mail : userLogin.email,
                phone : inputPhone.value,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : newPostKey
            });
        }
    }else{
        // firebase 有資料 用裡面的
            firebase.database().ref('member/'+ dataExist.uid).set({
                name: inputName.value,
                mail : userLogin.email,
                phone : inputPhone.value,
                photoUrl : userLogin.photoURL,
                creatTime: new Date().getTime(),
                uid : dataExist.uid
            });
    }



    confirmAllDataChange();
}

function startCancel(){
    // disable
    inputName.disabled = true;
    // inputMail.disabled = true;
    inputPhone.disabled = true;
    inputName.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    // inputMail.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.backgroundColor = 'rgba(230, 230, 230, 0)';
    inputPhone.style.border = '0px solid rgba(230, 230, 230, 0.7)';
    inputName.style.border = '0px solid rgba(230, 230, 230, 0.7)';
    // 顯示修改資料 
    fixData.style.display = 'block';
    confirmCancel.style.display = 'none';
    // 取消修改邏輯
    cancelToFixData();
}

    function cancelToFixData(){
        let getAllMemberData = database.ref("member");
        let dataExist;
        getAllMemberData.orderByChild("mail").equalTo(userLogin.email).on("child_added", function(snapshot) {
            dataExist = snapshot.val();
        });  
        // 如果 firebase 有資料
        if(dataExist == undefined){
            // firebase 沒有資料 用google的
            if(userLogin.photoURL){
                inputName.value = userLogin.name;

            }
        }else{
            // firebase 有資料 用裡面的
            inputName.value =  dataExist.name;
            inputPhone.value = dataExist.phone;
        }
    }

//點擊貼文管理後，清空，顯示發布貼文、編輯貼文、刪除貼文



//登出功能

document.getElementById('logoutTest').onclick = logoutMeOut;

function logoutMeOut(){
    firebase.auth().signOut().then(function() {
        console.log("User sign out!");
        window.location.reload();
    }, function(error) {
    console.log("User sign out error!");
    })
}

//設定登入權限

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        userLogin = user;
        if(userLogin.email == "aaa24295234@gmail.com"){
            }else{
                // window.location = 'profile.html';
            }
    } else {
        userLogin = null;
        console.log("User is not logined yet.");
        window.location = 'index.html' ; 
    }
  });

// 重現個人資料

personalData.addEventListener('click', letPersonalAppear);

function letPersonalAppear(){
    displayResult.style.display = 'flex';
    createRightDiv.style.display = 'none';
    forDeletePost.style.display = 'none';
    rightCollection.style.display = 'none';
    forDeletePost.innerHTML = '';
}

// 發佈貼文

createPostPost.addEventListener('click', function(){
    window.location = 'backstage.html';
})

// 管理貼文 managePost

managePost.addEventListener('click', createPostLayout);

function createPostLayout(){
    // 將個人資料隱藏
    displayResult.style.display = 'none';
    rightCollection.style.display = 'none';
    // 發布貼文 編輯貼文顯現
    createRightDiv.style.display = 'flex';
    forDeletePost.style.display = 'flex';
    // 將目前貼文建立
        createUpPost();
}

// 貼文建立

function createUpPost(){
    let getAllDeleteData = database.ref("article");
    getAllDeleteData.orderByChild("skill").on("child_added", function(snapshot) {
        let myAllData = snapshot.val();
        console.log(myAllData)
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
    console.log(newElement.parentNode.id);
    newElement.onclick = function(){
        window.location = 'edit.html?id=' + myAllData.creatTime;
    }
}

function deleteImg(myAllData){
    let newElement = document.createElement('div');
    newElement.className = 'imgDelete';
    document.getElementById(myAllData.creatTime).appendChild(newElement);
    console.log(newElement.parentNode.id);
    newElement.onclick = function(){
        if (confirm("確定要刪除此貼文？")) {
            let getAllDeleteData = database.ref("article");
            getAllDeleteData.orderByChild("creatTime").equalTo(myAllData.creatTime).on("child_added", function(snapshot) {
                // 刪除資料
                firebase.database().ref('/article/' + snapshot.val().uid).remove().then(function(){
                youDeleteAnArticle(myAllData.name);
                setTimeout(function(){window.location.reload()} , 1000)
                });
            });  
        } else {
        }
    }
}

// 點擊 編輯貼文

createPostEdit.addEventListener('click', displayMyImg);

function displayMyImg(){

    const xx = document.querySelectorAll("div.imgDelete");
    for(let i=0; i<xx.length; i++){
        xx[i].style.display="block";
    }

    const yy = document.querySelectorAll("div.imgEdit");
    for(let i=0; i<yy.length; i++){
        yy[i].style.display="block";
    }

    const zz = document.querySelectorAll("div.big-post-div");
    for(let i=0; i<zz.length; i++){
        zz[i].style.color='rgb(26, 216, 211)';
        zz[i].style.backgroundColor='white';
        zz[i].style.border='1px solid rgb(26, 216, 211)';
    }
}

// 點擊收藏

myCollection.addEventListener('click', createCollectionLayout);

function createCollectionLayout(){
    rightCollection.innerHTML = '';
    displayResult.style.display = 'none';
    rightCollection.style.display = 'flex';
    createRightDiv.style.display = 'none';
    createCollectionDiv();

}

function createCollectionDiv(){
    let getLocal;
    getLocal = JSON.parse(window.localStorage.getItem(`collection`));
    for(let i = 0; i<getLocal.length ; i++){
        inCollectionDiv(i);
        inCollectionImg(getLocal,i);
        inCollectionWord(getLocal,i);
        inCollectionDelete(i);
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
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = x + '已刪除，準備重新載入';
}

function confirmAllDataChange(){
    alertBigBox.style.display = 'flex';
    alertWord.innerHTML = '資料修改成功';
}

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});


// 關閉 loading

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