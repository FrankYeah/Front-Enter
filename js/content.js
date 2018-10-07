// 抓 firebase 資料庫 json 資料

let x = 0;
let articleId = (new URL(document.location)).searchParams.get("id");  //取得url的id
let getAllData = database.ref("article");
let data;
getAllData.orderByChild("creatTime").equalTo(Number(articleId)).on("child_added", function(snapshot) {
    data = snapshot.val();
    createLayout(data);
});

function createLayout(data){
    keyvisualBorn(data);
    mainChartBorn();
    mainHeaderBorn(data);
    mainUnderlineBorn();
    preCityBorn();
    tagCityBorn(data);
    // preSkillBorn();
    // tagSkillBorn(data);
    preTechnologyBorn();
    tagTechnologyBorn(data);
    // preFeeBorn();
    // tagFeeBorn(data);
    preTotalDayBorn();
    tagTotalDayBorn(data);
    preWeekHourBorn();
    tagWeekHourBorn(data);
    preFoundYearBorn();
    tagFoundYearBorn(data);
    preTeachWayBorn();
    tagTeachWayBorn(data);
    preClassTypeBorn();
    tagClassTypeBorn(data);
    // preTeacherNumBorn();
    // tagTeacherNumBorn(data);
    mainContentBorn();
    mainContentHeaderBorn();
    mainContentTitleBorn(data);
    coreContentBorn(data);
    contactPhoneBorn(data);
    contactMailBorn(data);
}

function keyvisualBorn(data){
    document.getElementById('section').style.background  =  "url('" + data.rectangleUrl + "')"; 
    document.getElementById('section').style.backgroundRepeat  =  "no-repeat";  
    document.getElementById('section').style.backgroundSize  =  "cover";
    document.getElementById('section').style.backgroundPositionY  =  "center";
}

function mainChartBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'mainChart';
    newElement.className = 'main-chart';
    document.getElementById('mainId').appendChild(newElement);
}

function mainHeaderBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-header';
    newElement.textContent = data.name;
    document.getElementById('mainChart').appendChild(newElement);
}

function mainUnderlineBorn(){
    let newElement = document.createElement('div');
    newElement.className = 'main-underline';
    document.getElementById('mainChart').appendChild(newElement);
}

function preCityBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '學習城市/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagCityBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.city;
    document.getElementById('mainChart').appendChild(newElement);
}

function preSkillBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '技能/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagSkillBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.skill;
    document.getElementById('mainChart').appendChild(newElement);
}

function preTechnologyBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '技術/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTechnologyBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.style.lineHeight = '28px';
    newElement.textContent = data.technology;
    document.getElementById('mainChart').appendChild(newElement);
}

function preFeeBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '費用/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagFeeBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = '新台幣 ' + data.fee + ' 元 / 月';
    document.getElementById('mainChart').appendChild(newElement);
}

function preTotalDayBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '課程天數/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTotalDayBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.totalDay + ' 天';
    document.getElementById('mainChart').appendChild(newElement);
}

function preWeekHourBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '每周時數/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagWeekHourBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.weekHour + ' 小時';
    document.getElementById('mainChart').appendChild(newElement);
}

function preFoundYearBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '創辦/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagFoundYearBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.foundYear + ' 年';
    document.getElementById('mainChart').appendChild(newElement);
}

function preTeachWayBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '教學方式/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTeachWayBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.teachWay;
    document.getElementById('mainChart').appendChild(newElement);
}

function preClassTypeBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '班類/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagClassTypeBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.classType;
    document.getElementById('mainChart').appendChild(newElement);
}

function preTeacherNumBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-pre';
    newElement.textContent = '導師數/'
    document.getElementById('mainChart').appendChild(newElement);
}

function tagTeacherNumBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-tag';
    newElement.textContent = data.teacherNum + ' 名';
    document.getElementById('mainChart').appendChild(newElement);
}

function mainContentBorn(){
    let newElement = document.createElement('div');
    newElement.id = 'mainContent';
    newElement.className = 'main-content';
    document.getElementById('mainId').appendChild(newElement);
}

function mainContentHeaderBorn(){
    let newElement = document.createElement('p');
    newElement.className = 'main-content-header';
    newElement.textContent = '';
    document.getElementById('mainContent').appendChild(newElement);
}

function mainContentTitleBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'main-content-title';
    newElement.textContent = data.topic;
    document.getElementById('mainContent').appendChild(newElement);
}

function coreContentBorn(data){
    let newElement = document.createElement('p');
    newElement.innerHTML = data.content;
    document.getElementById('mainContent').appendChild(newElement);
}

function contactPhoneBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'contact-phone';
    newElement.innerHTML = '<br>'  + data.phone;
    document.getElementById('contact').appendChild(newElement);
}

function contactMailBorn(data){
    let newElement = document.createElement('p');
    newElement.className = 'contact-mail';
    newElement.innerHTML = "<br>" + data.mail;
    document.getElementById('contact').appendChild(newElement);
}

// alert 

const alertBigBox = document.getElementById('alertBigBox');
const alertButton = document.getElementById('alertButton');
const alertWord = document.getElementById('alertWord');
alertBigBox.style.display = 'none';

alertButton.addEventListener('click', ()=>{
    alertBigBox.style.display = 'none';
});