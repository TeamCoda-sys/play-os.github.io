var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + "";
document.getElementById("clock").innerHTML = time;

function opop() {
    window.location.href = "menu.html";
}