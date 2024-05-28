//click user
let coloruser=document.getElementById("form_user")
let supuser = document.getElementById("supmenu-user");
let supuser1 = document.getElementById("supmenu-user1");

let menuphone=document.getElementById("menu_phone")

let fullheart=document.querySelectorAll("#fullheart")
let heart=document.querySelectorAll("#heart")

function ToggleMenu() {
    
    supuser.classList.toggle("open-class")
    supuser1.classList.toggle("open-class1")
    coloruser.classList.toggle("color-user")
    menuphone.classList.toggle("open-menu-phone")
}


document.querySelectorAll('.like').forEach(function(heart) {
    heart.addEventListener('click', function() {
        heart.style.display = 'none';
        heart.nextElementSibling.style.display = 'block';
    });
});

document.querySelectorAll('.like1').forEach(function(fullheart) {
    fullheart.addEventListener('click', function() {
        fullheart.style.display = 'none';
        fullheart.previousElementSibling.style.display = 'block';
    });
});




