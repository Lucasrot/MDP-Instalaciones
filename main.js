'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})
function newFunction() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


// Seleccionar los enlaces que deben tener el efecto de scroll
const links = document.querySelectorAll('a[href^="#"]');

// Recorrer cada enlace y agregar un evento de clic
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevenir que se siga el enlace por defecto
    event.preventDefault();

    // Obtener el destino del enlace
    const href = link.getAttribute('href');

    // Seleccionar el elemento correspondiente al destino
    const target = document.querySelector(href);

    // Hacer scroll hasta el elemento con efecto suave
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll('.section-1, .parallax-section, #Nosotros, #Producto, #Contacto');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('appeared');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('section-appear');
    observer.observe(section);
});



const $form = document.querySelector("#form")


$form.addEventListener("submit", handleSubmit)