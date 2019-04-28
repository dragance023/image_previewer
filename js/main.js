const current = document.getElementById("current");
const slike = document.getElementsByClassName("slike");
let url = 'https://source.unsplash.com/1600x900/?';
const categories = document.querySelector('.categories');


for(let i = 0; i < slike.length; i++) {
    slike[i].addEventListener("click", change);
}

function change(e) {
    let loc = e.target.getAttribute("src");
    current.style.transform = "scale(0)";
    current.style.opacity = "0";

    setTimeout(() => {
        setLocation(loc)
    }, 400);

}

categories.addEventListener('click', e => {
    let newCategory = e.target.textContent.toLowerCase();
    let newUrl = url + newCategory;
    current.setAttribute('src', newUrl);
    
});

function setLocation(loc) {
    current.style.transform = "scale(1)";
    current.setAttribute("src", loc);
    current.style.opacity = "1";
}