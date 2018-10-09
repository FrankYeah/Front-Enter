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
const createPostDelete = document.getElementById('createPostDelete');
const forDeletePost = document.getElementById('forDeletePost');

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

// 管理貼文 managePost

managePost.addEventListener('click', createPostLayout);

function createPostLayout(){
    displayResult.style.display = 'none';
    createRightDiv.style.display = 'flex';
}

// 重現個人資料

personalData.addEventListener('click', letPersonalAppear);

function letPersonalAppear(){
    displayResult.style.display = 'flex';
    createRightDiv.style.display = 'none';
    forDeletePost.style.display = 'none';
}

// 發佈貼文

createPostPost.addEventListener('click', function(){
    window.location = 'backstage.html';
})

// 編輯貼文

createPostEdit.addEventListener('click', readyToEditPost);

function readyToEditPost(){
    console.log('go edit');
    let getAllEditData = database.ref("article");
    let editData;
    getAllEditData.orderByChild("skill").on("child_added", function(snapshot) {
        editData = snapshot.val();
        console.log(editData);

    });
}

// 刪除貼文

createPostDelete.addEventListener('click', readyToDeletePost)

function readyToDeletePost(){
    forDeletePost.innerHTML = '';
    console.log('go delete');
    let getAllDeleteData = database.ref("article");
    let deleteData;
    getAllDeleteData.orderByChild("skill").on("child_added", function(snapshot) {
        deleteData = snapshot.val();
        console.log(deleteData);
        createDeleteLayout(deleteData);
    });
}

// 建立 刪除 layout 

function createDeleteLayout(deleteData){
    forDeletePost.style.display = 'flex';
    createDeleteButton(deleteData);
}

function createDeleteButton(deleteData){
    let newElement = document.createElement('p');
    newElement.textContent = deleteData.name;
    newElement.className = 'create-delete-button';
    newElement.id = deleteData.creatTime;
    document.getElementById('forDeletePost').appendChild(newElement);
    newElement.onclick = function(){
        console.log(this.textContent);
        // 對比到此人，再去刪除
        let getAllDeleteData = database.ref("article");
        getAllDeleteData.orderByChild("name").equalTo(this.textContent).on("child_added", function(snapshot) {
            // 刪除資料
            firebase.database().ref('/article/' + snapshot.val().uid).remove().then(function(){
            youDeleteAnArticle(snapshot.val().name);
            setTimeout(function(){window.location.reload()} , 2000)

            });

        });  



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