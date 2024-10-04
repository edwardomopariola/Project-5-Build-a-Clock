let clock = document.getElementById("clock");

function displayTime(){
    let d = new Date();  //declaring varable for new date.
    let hour = d.getHours(); //declaring variable for hour.
    let min = d.getMinutes(); //declaring variable for minutes.
    let sec = d.getSeconds(); //declaring variable for seconds
    let amOrpm = "AM"; // declaring variable for AM or PM
    if(hour >= 12)
    {
        amOrpm = "PM";
    }
    if(hour > 12)
    {
        hour = hour -12;
    }
    if(hour < 10)
        hour = "0" + hour;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrpm;
}
setInterval(displayTime, 1000);