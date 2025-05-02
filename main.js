
gsap.registerPlugin(ScrollTrigger);


// GSAP Scrolling Animation Example: Section Fade-In
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        gsap.from(section, {
            opacity: 0,
            y: 50, // Slide up effect
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Trigger animation when section enters viewport
                end: "bottom 60%", // End point of trigger
                toggleActions: "play reset play reset", // Play once
            },
        });
    });
});

// Menu Toggle (No Changes to This Part)
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
});


// Typewriter Effect (No Changes to This Part)
document.addEventListener('DOMContentLoaded', function () {
    const text = "Know our, Heroes.";
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





document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);


    // Select all objective items
    const objectives = document.querySelectorAll('tag-about');

    objectives.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0, // Start invisible
            y: 90, // Move up from 50px
            duration: 0.2, // Animation duration
            delay: index * 0.2, // Delay for staggering (optional)
            scrollTrigger: {
                trigger: item, // Each objective triggers the animation individually
                start: "top 80%", // Animation starts when the element enters the viewport
                toggleActions: "play reset play reset", // Play the animation only once
            },
        });
    });
});

// Navbar Highlight Effect (No Changes to This Part)
document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all objective items
    const objectives = document.querySelectorAll('.objective-item');

    objectives.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 90, 
            duration: 0.2, 
            delay: index * 0.2, 
            scrollTrigger: {
                trigger: item, 
                start: "top 90%", 
                toggleActions: "play reset play reset", 
            },
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollHorizontal = document.querySelector('.obj-images'); 
    const images = document.querySelectorAll('.obj-images .slide'); 

    const totalWidth = scrollHorizontal.scrollWidth; 
    gsap.to(scrollHorizontal, {
        x: `-${totalWidth - scrollHorizontal.offsetWidth}px`, 
        duration: 10, 
        repeat: -1, 
        ease: "linear", 
        modifiers: {
            x: (x) => `${parseFloat(x) % totalWidth}px`, 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollHorizontal = document.querySelector('.obj-images');
    const slides = document.querySelectorAll('.obj-images .slide');
    
    // Initialize animation speed
    let animationSpeed = 20;
    let animation;
    
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Set up entrance animations for slides
    function setupEntranceAnimations() {
        slides.forEach((slide, index) => {
            // Initial state
            gsap.set(slide, { 
                opacity: 0,
                scale: 0.8,
                y: 20
            });
            
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate in when visible
                        gsap.to(slide, {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power2.out",
                            onComplete: () => {
                                slide.classList.add('active');
                            }
                        });
                        
                        // Only trigger once
                        observer.unobserve(slide);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(slide);
        });
    }
    
    // Start the scrolling animation
    function startAnimation() {
        // Clear any existing animation
        if (animation) {
            animation.kill();
        }
        
        const totalWidth = scrollHorizontal.scrollWidth / 2; // Divide by 2 because we duplicated slides
        
        animation = gsap.to(scrollHorizontal, {
            x: `-${totalWidth}px`,
            duration: animationSpeed,
            repeat: -1,
            ease: "linear",
            modifiers: {
                x: (x) => `${parseFloat(x) % totalWidth}px`,
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
       const objectives = document.querySelectorAll('.resource-card');

       objectives.forEach((item, index) => {
           gsap.from(item, {
               opacity: 0, 
               y: 90, 
               duration: 0.7, 
               delay: index * 0.2, 
               scrollTrigger: {
                   trigger: item, 
                   start: "top 80%", 
                   toggleActions: "play reset play reset", 
               },
           });
       });
   });
   
   // botton animation 

gsap.to("#learn-more", {
    y: -10,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

document.querySelector("#learn-more").addEventListener("mouseenter", () => {
    gsap.to("learn-more", { scale: 1.2, duration: 0.3});
});

document.querySelector("#learn-more").addEventListener("mouseleave", () => {
    gsap.to("#learn-more", { scale: 1, duration: 0.2});
});

document.getElementById("learn-more").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
  

document.querySelectorAll(".resource-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3, boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)" });
    });
  
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" });
    });
  });


  
gsap.to(".about-button", {
    y: -10,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});


document.querySelector(".about-button").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
  
