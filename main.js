
gsap.registerPlugin(ScrollTrigger);

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
})

// typewriter effect
document.addEventListener('DOMContentLoaded', function () {
    const text = "Know our Heroes.";
    const typewriter = document.querySelector('#typewriter');
    const section = document.getElementById('home');
    
    let i = 0;
    let typingInterval;
    let currentlyVisible = false;

    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval); 
        }
    }

    function resetTypewriter() {
        typewriter.textContent = ''; 
        i = 0; 
    }

    function isInViewPort(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0; 
    }

    window.addEventListener('scroll', () => {
        const inView = isInViewPort(section);

        if (inView && !currentlyVisible) {
            currentlyVisible = true;
            resetTypewriter(); 
            typingInterval = setInterval(type, 100); 
        } else if (!inView && currentlyVisible) {
            currentlyVisible = false;
            clearInterval(typingInterval); 
        }
    });
});


// tracktor of hover effect on navbar depends on scroll screeen
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
