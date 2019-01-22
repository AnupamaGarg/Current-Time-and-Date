





let getTimeStamp=() =>{
    var now = new Date();
    return ((now.getMonth() + 1) + "/" +
        (now.getDate()) + "/" +
        now.getFullYear() + " " +
        now.getHours() + ":" +
        ((now.getMinutes() < 10)
            ? ("0" + now.getMinutes())
            : (now.getMinutes())) + ":" +

        ((now.getSeconds() < 10)
            ? ("0" + now.getSeconds())
            : (now.getSeconds())));
}
let button = document.getElementById("button")
button.addEventListener("click", function () {
    
    let currentTime = getTimeStamp()
    document.getElementById("time-date").textContent = currentTime
    console.log(getTimeStamp())
    
      
      


})


