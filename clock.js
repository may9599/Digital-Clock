function updateClock(){
const now = new Date();
    let hours= now.getHours();
    let minutes= now.getMinutes();
    let seconds= now.getSeconds();

    hours = (hours <10 ? "0": "")+ hours;
    minutes = (minutes <10 ? "0": "")+ minutes;
    seconds = (minutes <10 ? "0" : "")+ seconds;

    const timeString =`${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;

}

setInterval(updateClock, 1000);

updateClock();


// function updateClock() {
//     const now = new Date();  // Step 1
//     let hours = now.getHours();     // Step 2
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
  
//     // Step 3 - Add 0 before single digits (like 08 instead of 8)
//     hours = (hours < 10 ? "0" : "") + hours;
//     minutes = (minutes < 10 ? "0" : "") + minutes;
//     seconds = (seconds < 10 ? "0" : "") + seconds;
  
//     // Step 4 - Format time as HH:MM:SS
//     const timeString = `${hours}:${minutes}:${seconds}`;
  
//     // Step 5 - Display in HTML
//     document.getElementById("clock").textContent = timeString;
//   }
  
//   // Step 6 - Run updateClock every 1000ms (1 second)
//   setInterval(updateClock, 1000);
  
//   // Step 7 - Call it once immediately so we don’t wait a second to see the time
//   updateClock();
  