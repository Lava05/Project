const list_items = document.querySelector('.header .nav-bar .nav-list .list-items');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('header.container');

list_items.addEventListener('click',() => {
    list_items.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>
    {
var scroll_position = window.scrollY;
if(scroll_position > 250){
    header.style.backgroundColor = '#29323c';
}
else{
    header.style.backgroundColor = 'transparent';
}
    })