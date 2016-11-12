/**
 * Created by Kondoff on 22-Oct-16.
 */
function timer() {
   
    let startBtn=$('#start-timer');
    let stopBtn=$('#stop-timer');
    
    let secondsElement=$('#seconds');
    let minutesElement=$('#minutes');
    let hoursElement=$('#hours');
    let interval=undefined;

   startBtn.click(function () {
       if(!interval){
           interval=setInterval(step,1000)
       }
   });

    stopBtn.click(function () {
        clearInterval(interval);
        interval=undefined;
    });

    let totalSecond=0;

    function step() {
        totalSecond++;
        secondsElement.text(formatTime(totalSecond % 60));
        let mins=totalSecond/60;
        minutesElement.text(formatTime(mins % 60));
        let hours=totalSecond/3600;
        hoursElement.text(formatTime(hours))
    }
    
    function formatTime(num) {
        return pad(Math.floor(num))
    }
    
    function pad(num) {
        if(num <=9){
            num =`0${num}`;
        }
        return num
    }

}