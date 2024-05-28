
document.querySelectorAll('.menu_items').forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        var subMenu = menuItem.querySelector('.sub-menu-phone');
        var rotate = menuItem.querySelector('.ic')
        subMenu.classList.toggle('open-menu-phone');
    });
});