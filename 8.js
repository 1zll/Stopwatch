let timer;
let totalSeconds=0;

function startStopwatch(){
    timer=setInterval(updateStopwatch,10); //10ミリ秒ごとに更新
}

function stopStopwatch(){
    clearInterval(timer);
}

function resetStopwatch(){
    totalSeconds=0;
    displayTime();
    clearInterval(timer);
}

function displayTime(){
    const hours=Math.floor(totalSeconds/3600);
    const minutes=Math.floor((totalSeconds%3600)/60);
    const seconds=(totalSeconds%60).toFixed(2);
    const formattedTime=`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById('display').textContent = formattedTime;
}

function padZero(value){
    return value<10?`0${value}` : value;
}

function updateStopwatch(){
    totalSeconds+=0.01; //10ミリ秒ごとに増加
    displayTime();
}