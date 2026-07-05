
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 150,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 200
  });

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  if (selectedTheme === 'dark') {
    themeButton.querySelector('i').classList.replace('bx-moon', 'bx-sun');
  }
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  const currentTheme = getCurrentTheme();
  localStorage.setItem('selected-theme', currentTheme);
  const icon = themeButton.querySelector('i');
  icon.classList.toggle('bx-moon');
  icon.classList.toggle('bx-sun');
});

  ScrollReveal().reveal(" .education", {
    origin: "top"
  });
  ScrollReveal().reveal(" .internship", {
    origin: "top"
  });
  ScrollReveal().reveal(".project-title" , {
    origin: "top"
  });
  ScrollReveal().reveal(".projects", {
    origin: "top"
  });
