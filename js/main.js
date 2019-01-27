var curent = document.getElementById("curent");
var slike = document.getElementsByClassName("slike");

for(var i = 0; i < slike.length; i++) {
    slike[i].addEventListener("click", change);
}

function change() {
    var loc = this.getAttribute("src");
    curent.style.opacity = "0";
    setTimeout(setLocation, 800);
    console.log(loc)

    
    function setLocation() {
        curent.setAttribute("src", loc);
        curent.style.opacity = "1";
    }


}
