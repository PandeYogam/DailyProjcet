document.addEventListener("DOMContentLoaded", function() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const dateTarget = "24 Sept 2023";

    function countdown(){
        const dateTargetDate = new Date(dateTarget);
        const currentDate = new Date();
        
        const totalSeconds = (dateTargetDate - currentDate) / 1000;
        
        const seconds = Math.floor(totalSeconds) % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 60 / 60) % 24;
        const days = Math.floor(totalSeconds / 60 / 60 / 24);
        
        // Pastikan elemen dengan ID 'days' sudah ada sebelum mengakses innerHTML
        secondsEl.innerHTML = formatTime(seconds) ;
        minutesEl.innerHTML = formatTime(minutes) ;
        hoursEl.innerHTML = formatTime(hours) ;
        daysEl.innerHTML = formatTime(days) ;

        console.log(days, hours, minutes, seconds);


    }

    function formatTime(time) {
        return time < 10? `0${time}` : time;
    }

    countdown();

    setInterval(countdown, 1000);
});
