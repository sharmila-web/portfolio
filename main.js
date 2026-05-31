// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
/-----toggle icon navbar-----/



let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}



/----scroll section active link---/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onclick = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// BUTTON ANIMATION

const projectBtn = document.querySelector(".project-btn");

projectBtn.addEventListener("click", () => {
  alert("Projects Section Coming Soon 🚀");
});

    /---------------------------STICKY NAVBAR-------/
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100 );


     /-----REMOVE TOGGLE ICON AND NAVBAR----/

    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');

};

 /--------SCROOL REVEAL-------/

 ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200,
  });


  ScrollReveal().reveal('.home-content , heading' , { orgin: 'top' });
  ScrollReveal().reveal('.home-img, .sevices-container, .portfolio-box,.contact-form',{ orgin: 'button' });
  ScrollReveal().reveal('.home-contact h1, .about-img', { orgin: left});
  ScrollReveal().reveal('.home-contact p, .about-content', { orgin: right });