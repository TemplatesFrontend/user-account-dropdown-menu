// function menuToggle() {
//     const toggleMenu = document.querySelector('.menu');
//     toggleMenu.classList.toggle('active');
// }

const menu_toggle =document.querySelector('#menuToggle');
const menu =document.querySelector('.menu');
var body = document.querySelector('body');


function toggle(event) {
    if(menu.classList.contains("active")) {
        menu.classList.remove("active");
        body.style.transition= "1s";
        
        body.style.backgroundColor= "#ffccbc";
        
    } else {
        menu.classList.add("active");
        
        body.style.transition= "1s";
        body.style.backgroundColor = "#000" 

    }
    
} 

menu_toggle.addEventListener('click', toggle, false);

