let clock = document.getElementById("clock"); // Using the DOM element I declared a varible with id "clock"

function displayTime(){
    let d = new Date();  //declaring varable for new date.
    let hour = d.getHours(); //declaring variable for hour between 0-23.
    let min = d.getMinutes(); //declaring variable for minutes between 0-59
    let sec = d.getSeconds(); //declaring variable for seconds between 0-59
    let amOrpm = "AM"; // declaring variable for AM or PM
    if(hour >= 12) // if hour is greater than or equal to 12, the time move to midday("pm")
    {
        amOrpm = "PM";
    }
    if(hour > 12) // if the hour is greater than 12 we subtract hour from 12
    {
        hour = hour -12;
    }
    if(hour < 10)
        hour = "0" + hour;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrpm; // Using the DOM element with my ID "clock" follow by hr, min, sec
}
setInterval(displayTime, 1000);