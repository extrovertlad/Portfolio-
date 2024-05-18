const header = document.querySelector("header");
window.addEventListener("scroll", Function () {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

Let menu = document.querySelector('#menu-icons');
Let navlist = document.querySelector('.navlist');

menu.onclick =  () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll =  () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
