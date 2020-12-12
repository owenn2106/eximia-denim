const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 2})

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li, .cta')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        // Animate Links

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        }
        );

        // Burger Animation

        burger.classList.toggle('toggle');
    });
    
}

navSlide();