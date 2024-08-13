
const startBtn=document.getElementById("start");
const stopBtn=document.getElementById("stop");
const resetBtn=document.getElementById("reset");
const timer=document.getElementById("timer");


let interval

let timeLeft=1500


function updateTimer(){
    let minutes=Math.floor(timeLeft/60)
    let seconds=timeLeft%60

    timer.innerHTML=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
}


startBtn.addEventListener('click',()=>{

    interval=setInterval(()=>{
        timeLeft--
        updateTimer()
        if(timeLeft === 0){
            clearInterval(interval)
            alert("Time's Up!")
            timeLeft=1500
            updateTimer()
        }
    },1000)

})

stopBtn.addEventListener('click',()=>{
    clearInterval(interval)

})

resetBtn.addEventListener('click',()=>{
    
    timeLeft=1500
    clearInterval(interval)
    updateTimer()
})