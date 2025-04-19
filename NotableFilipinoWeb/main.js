// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click(); // Fixed: Changed from next.click() to nextDom.click()
}, timeAutoNext);

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click(); // Fixed: Changed from next.click() to nextDom.click()
    }, timeAutoNext);
}

document.addEventListener("DOMContentLoaded", function() {
    function isInViewport(element) {
        if (!element) return false; // Added null check
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    const aboutUsTitle = document.querySelector('.about-us-content h1');
    const aboutUsText = document.querySelector('.about-us-content p');
    const philMap = document.querySelector('.phil-map');
    
    // Only include elements that exist in the array
    const elementsToAnimate = [aboutUsTitle, aboutUsText, philMap].filter(el => el !== null);
    
    function handleScrollAnimation() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('fade-in');
            } else {
                element.classList.remove('fade-in');
            }
        });
    }
    
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    
    const philMapImg = document.querySelector('.phil-map img');
    if (philMapImg) {
        philMapImg.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const xRotation = 20 * ((y / rect.height) - 0.5);
            const yRotation = -20 * ((x / rect.width) - 0.5);
            
            this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
        
        philMapImg.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
        
        philMapImg.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    // Check if elements exist before adding event listeners
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change icon based on menu state
            if (mainNav.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav') && !e.target.closest('.menu-toggle') && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    }
    
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            alert('Searching for: ' + searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Load the current page inside the iframe
    const iframe = document.getElementById('website-preview');
    const iphoneFrame = document.querySelector('.iphone-frame');
    const phoneShadow = document.querySelector('.phone-shadow');
    
    if (iframe) {
        try {
            // Set the iframe source to the current page
            const currentLocation = window.location.href;
            iframe.src = currentLocation;
        } catch (e) {
            console.error('Error setting iframe source:', e);
        }
    }
    
    if (iphoneFrame) {
        // Variables for smooth movement
        let targetRotateX = 0;
        let targetRotateY = 0;
        let currentRotateX = 0;
        let currentRotateY = 0;
        
        // Add 3D tilt effect controlled by mouse
        document.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768) {
                // Calculate rotation based on mouse position
                const rect = iphoneFrame.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // Calculate distance from center
                const maxRotation = 12;
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                // Calculate target rotation (inverted for natural feel)
                targetRotateY = ((mouseX - centerX) / (window.innerWidth / 2)) * maxRotation;
                targetRotateX = -((mouseY - centerY) / (window.innerHeight / 2)) * maxRotation;
                
                // Update shadow position
                if (phoneShadow) {
                    const shadowX = targetRotateY * -2;
                    const shadowY = targetRotateX * 2;
                    const intensity = Math.abs(targetRotateX) + Math.abs(targetRotateY);
                    
                    phoneShadow.style.transform = `translateX(${shadowX}px) translateY(${shadowY}px) scale(${1 + intensity/50})`;
                    phoneShadow.style.opacity = 0.7 - (intensity / 40);
                }
            }
        });
        
        // Animate frame with requestAnimationFrame for smooth motion
        function animateFrame() {
            // Smooth transition between current and target values (easing)
            currentRotateX += (targetRotateX - currentRotateX) * 0.1;
            currentRotateY += (targetRotateY - currentRotateY) * 0.1;
            
            // Apply transform
            iphoneFrame.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
            
            // Continue animation loop
            requestAnimationFrame(animateFrame);
        }
        
        // Start animation loop
        animateFrame();
        
        // Reset position when mouse leaves the window
        document.addEventListener('mouseleave', function() {
            targetRotateX = 0;
            targetRotateY = 0;
        });
        
        // Add touch interaction for mobile devices
        iphoneFrame.addEventListener('touchmove', function(e) {
            e.preventDefault();
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                const rect = iphoneFrame.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate touch position relative to element center
                const touchX = touch.clientX - rect.left;
                const touchY = touch.clientY - rect.top;
                
                // Calculate rotation (max 15 degrees)
                const maxRotation = 15;
                targetRotateY = ((touchX - centerX) / centerX) * maxRotation;
                targetRotateX = -((touchY - centerY) / centerY) * maxRotation;
            }
        });
        
        // Reset on touch end
        iphoneFrame.addEventListener('touchend', function() {
            targetRotateX = 0;
            targetRotateY = 0;
        });
        
        // Add the fade-in animation for the iPhone
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    if (phoneShadow) {
                        phoneShadow.style.opacity = 0.7;
                    }
                }
            });
        });
        
        observer.observe(iphoneFrame);
        
        // Add initial state for fade-in animation
        iphoneFrame.style.opacity = '0';
        iphoneFrame.style.filter = 'blur(10px)';
        iphoneFrame.style.transform = 'translateY(30px)';
        iphoneFrame.style.transition = 'all 0.8s ease';
        
        if (phoneShadow) {
            phoneShadow.style.opacity = 0;
            phoneShadow.style.transition = 'all 0.8s ease';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Wait for iframe to load
    const iframe = document.getElementById('website-preview');
    
    if (iframe) {
        iframe.onload = function() {
            try {
                // Access iframe content - this may fail due to same-origin policy
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                
                // Find and remove duplicate Read More buttons
                const buttons = iframeDoc.querySelectorAll('.buttons button');
                if (buttons.length > 1) {
                    buttons[1].style.display = 'none';
                }
                
                // Hide any phone frames inside the iframe
                const nestedPhones = iframeDoc.querySelectorAll('.iphone-frame');
                nestedPhones.forEach(function(phone) {
                    phone.style.display = 'none';
                });
                
                // Add scaling class to the body of iframe
                iframeDoc.body.classList.add('phone-content');
            } catch(e) {
                console.log('Cannot access iframe content due to same-origin policy');
                // Consider alternative approaches if same-origin policy is an issue
            }
        };
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('nav a, .footer-links a');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            // Only if the href is an ID on the page
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Scroll to target with smooth behavior
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            }
        });
    }
    
    // Add active class to navigation links when scrolling
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    function highlightNavigation() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // When 30% of the section is visible
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href.substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Intersection Observer for scroll animations
    const sectionContents = document.querySelectorAll('.section-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-section');
                // Once the animation has played, we can remove the observer
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    sectionContents.forEach(content => {
        observer.observe(content);
    });
    
    // Run active navigation on load
    highlightNavigation();
    
    // Handle mobile menu for better scrolling experience
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        // Close mobile menu after clicking a link
        const mobileLinks = mainNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuToggle.textContent = '☰';
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle transparent header on scroll
    const header = document.querySelector('header');
    
    function handleHeaderTransparency() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Initialize header state
    handleHeaderTransparency();
    
    // Update on scroll
    window.addEventListener('scroll', handleHeaderTransparency);
    
    // Animation for sections and elements when scrolled into view
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Gather all elements to animate
    const sectionContents = document.querySelectorAll('.section-content');
    const heroCards = document.querySelectorAll('.hero-card');
    const objectiveItems = document.querySelectorAll('.objective-item');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function handleScrollAnimations() {
        // Animate section contents
        sectionContents.forEach(content => {
            if (isInViewport(content)) {
                content.classList.add('fade-in');
            }
        });
        
        // Animate hero cards
        heroCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('fade-in');
            }
        });
        
        // Animate objective items
        objectiveItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('fade-in');
            }
        });
        
        // Animate timeline items
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }
    
    // Run animations on load and scroll
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Interactive timeline - add click event to show more info
    const timelineContents = document.querySelectorAll('.timeline-content');
    
    timelineContents.forEach(content => {
        const fullText = content.querySelector('p').textContent;
        const shortText = fullText.substring(0, 100) + '...';
        
        // Store the full text in a data attribute
        content.querySelector('p').setAttribute('data-full-text', fullText);
        
        // Show shortened text initially
        if (fullText.length > 100) {
            content.querySelector('p').textContent = shortText;
            
            // Add read more button
            const readMoreBtn = document.createElement('button');
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.className = 'timeline-read-more';
            readMoreBtn.style.backgroundColor = 'var(--accent-color)';
            readMoreBtn.style.border = 'none';
            readMoreBtn.style.padding = '5px 10px';
            readMoreBtn.style.marginTop = '10px';
            readMoreBtn.style.borderRadius = '5px';
            readMoreBtn.style.cursor = 'pointer';
            
            content.appendChild(readMoreBtn);
            
            // Toggle between short and full text
            readMoreBtn.addEventListener('click', function() {
                const paragraph = content.querySelector('p');
                
                if (this.textContent === 'Read More') {
                    paragraph.textContent = paragraph.getAttribute('data-full-text');
                    this.textContent = 'Read Less';
                } else {
                    paragraph.textContent = shortText;
                    this.textContent = 'Read More';
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate all section content elements
    const allSections = document.querySelectorAll('.section');
   
    allSections.forEach(section => {
        // Add initial animation states to section elements
        const headings = section.querySelectorAll('h1, h2, h3');
        const paragraphs = section.querySelectorAll('p');
        const cards = section.querySelectorAll('.hero-card, .objective-item');
        
        // Set initial states
        [...headings, ...paragraphs, ...cards].forEach((element, index) => {
            element.style.opacity = '0';
            element.style.filter = 'blur(10px)';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
            // Add staggered delay based on element index
            element.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
        });
        
        // Create intersection observer for each section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate section headings and paragraphs
                    headings.forEach(heading => heading.classList.add('fade-in'));
                    paragraphs.forEach(paragraph => paragraph.classList.add('fade-in'));
                    
                    // Animate cards with staggered delay
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('fade-in');
                        }, index * 100); // 100ms delay between each card
                    });
                    
                    // Once animation is complete, unobserve the section
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25 // Trigger when 25% of the section is visible
        });
        
        // Observe the section
        observer.observe(section);
    });
    
    // Keep existing scroll-based navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    
    function highlightNavigation() {
        const sections = document.querySelectorAll('.section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href.substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();
});

// Enhanced scroll.js for better transitions between sections
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const links = document.querySelectorAll('nav a, .footer-links a');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Scroll to target with smooth behavior
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            }
        });
    }
    
    // Better section transitions with Intersection Observer
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
   // Apply transition effect to all section elements
sections.forEach(section => {
    // Add the initial state for animations
    const sectionContent = section.querySelector('.section-content, .about-us-content, .carousel');
    if (sectionContent) {
        sectionContent.style.opacity = '0';
        sectionContent.style.filter = 'blur(10px)';
        sectionContent.style.transform = 'translateY(50px)';
        sectionContent.style.transition = 'all 0.8s ease';
    }
    
    // Add transition to heroes grid
    const heroesGrid = section.querySelector('.heroes-grid');
    if (heroesGrid) {
        const heroCards = heroesGrid.querySelectorAll('.hero-card');
        heroCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.filter = 'blur(10px)';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.8s ease';
            card.style.transitionDelay = `${0.1 + index * 0.1}s`;
        });
    }
    
    // Add transition to objectives grid
    const objectivesContainer = section.querySelector('.objectives-container');
    if (objectivesContainer) {
        const objectiveItems = objectivesContainer.querySelectorAll('.objective-item');
        objectiveItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.filter = 'blur(10px)';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'all 0.8s ease';
            item.style.transitionDelay = `${0.1 + index * 0.1}s`;
        });
    }
});

// Use Intersection Observer to detect when sections come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in class to section content
            const sectionContent = entry.target.querySelector('.section-content, .about-us-content, .carousel');
            if (sectionContent) {
                sectionContent.classList.add('fade-in');
            }
            
            // Add fade-in class to hero cards
            const heroCards = entry.target.querySelectorAll('.hero-card');
            if (heroCards.length > 0) {
                heroCards.forEach(card => {
                    card.classList.add('fade-in');
                });
            }
            
            // Add fade-in class to objective items
            const objectiveItems = entry.target.querySelectorAll('.objective-item');
            if (objectiveItems.length > 0) {
                objectiveItems.forEach(item => {
                    item.classList.add('fade-in');
                });
            }
            
            // Also highlight corresponding nav link
            const sectionId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        } else {
            // Remove fade-in class when section leaves viewport (for re-animation on scroll up)
            const sectionContent = entry.target.querySelector('.section-content, .about-us-content, .carousel');
            if (sectionContent && !entry.isIntersecting && entry.boundingClientRect.top > 0) {
                // Only remove when scrolling upward
                sectionContent.classList.remove('fade-in');
                
                // Remove fade-in from hero cards
                const heroCards = entry.target.querySelectorAll('.hero-card');
                if (heroCards.length > 0) {
                    heroCards.forEach(card => {
                        card.classList.remove('fade-in');
                    });
                }
                
                // Remove fade-in from objective items
                const objectiveItems = entry.target.querySelectorAll('.objective-item');
                if (objectiveItems.length > 0) {
                    objectiveItems.forEach(item => {
                        item.classList.remove('fade-in');
                    });
                }
            }
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: '-60px 0px' // Adjusted for fixed header
});

// Observe all sections
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Fix iPhone frame content display
const iframe = document.getElementById('website-preview');

if (iframe) {
    iframe.onload = function() {
        try {
            // Get the current viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Calculate scaling factor for iPhone 13 display
            const iPhoneWidth = 390; // iPhone 13 width in pixels
            const scale = viewportWidth <= 768 ? 0.25 : 0.3;
            
            // Apply transform to fit content within iframe
            iframe.style.transform = `scale(${scale})`;
            iframe.style.transformOrigin = 'top left';
            iframe.style.width = `${100/scale}%`;
            iframe.style.height = `${100/scale}%`;
            
            // Add custom CSS to iframe to ensure it looks good on mobile
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc) {
                // Add a style tag with custom CSS
                const styleTag = iframeDoc.createElement('style');
                styleTag.textContent = `
                    body {
                        overflow-x: hidden;
                        width: 100%;
                        max-width: 100%;
                        transform-origin: top left;
                    }
                    
                    /* Adjust carousel and other responsive elements for mobile view */
                    .carousel {
                        height: auto !important;
                        min-height: 300px !important;
                    }
                    
                    header {
                        position: relative !important;
                    }
                    
                    /* Hide duplicate elements in iframe */
                    .iphone-frame, .phone-shadow {
                        display: none !important;
                    }
                `;
                iframeDoc.head.appendChild(styleTag);
                
                // Disable scrolling inside iframe
                iframeDoc.body.style.overflow = 'hidden';
            }
        } catch(e) {
            console.log('Cannot access iframe content due to same-origin policy');
        }
    };
}
                
              
    // Make the iPhone frame responsive for all devices
    function adjustIphoneFrame() {
        const iphoneFrame = document.querySelector('.iphone-frame');
        if (iphoneFrame) {
            // Adjust frame size based on viewport width
            const viewportWidth = window.innerWidth;
            
            if (viewportWidth < 480) {
                // Extra small devices
                iphoneFrame.style.width = '240px';
                iphoneFrame.style.height = '480px';
            } else if (viewportWidth < 576) {
                // Small devices
                iphoneFrame.style.width = '260px';
                iphoneFrame.style.height = '520px';
            } else if (viewportWidth < 768) {
                // Medium devices
                iphoneFrame.style.width = '280px';
                iphoneFrame.style.height = '560px';
            } else {
                // Large devices
                iphoneFrame.style.width = '300px';
                iphoneFrame.style.height = '600px';
            }
        }
    }
    
    // Run initially and on window resize
    adjustIphoneFrame();
    window.addEventListener('resize', adjustIphoneFrame);
});

document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Move timeline above contact section (DOM manipulation)
    const timelineSection = document.querySelector('#timeline');
    const contactSection = document.querySelector('#contact');
    
    if (timelineSection && contactSection) {
        // Get the parent element
        const parent = timelineSection.parentNode;
        
        // Insert timeline before contact section
        if (parent === contactSection.parentNode) {
            parent.insertBefore(timelineSection, contactSection);
        }
    }

    // Step 2: Fix scroll effects to work when scrolling up
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Gather all elements to animate
    const sectionContents = document.querySelectorAll('.section-content');
    const heroCards = document.querySelectorAll('.hero-card');
    const objectiveItems = document.querySelectorAll('.objective-item');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function handleScrollAnimations() {
        // Animate section contents - updated to work in both scroll directions
        sectionContents.forEach(content => {
            if (isInViewport(content)) {
                content.classList.add('fade-in');
            } else {
                // Remove class when not in viewport to allow re-animation
                content.classList.remove('fade-in');
            }
        });
        
        // Animate hero cards - updated to work in both scroll directions
        heroCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('fade-in');
            } else {
                card.classList.remove('fade-in');
            }
        });
        
        // Animate objective items - updated to work in both scroll directions
        objectiveItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('fade-in');
            } else {
                item.classList.remove('fade-in');
            }
        });
        
        // Animate timeline items - updated to work in both scroll directions
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }
    
    // Update intersection observer options for better scroll detection
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionContent = entry.target.querySelector('.section-content, .about-us-content, .carousel');
            const heroCards = entry.target.querySelectorAll('.hero-card');
            const objectiveItems = entry.target.querySelectorAll('.objective-item');
            
            if (entry.isIntersecting) {
                // Add fade-in class when section is visible
                if (sectionContent) {
                    sectionContent.classList.add('fade-in');
                }
                
                heroCards.forEach(card => {
                    card.classList.add('fade-in');
                });
                
                objectiveItems.forEach(item => {
                    item.classList.add('fade-in');
                });
            } else {
                // This is the key fix - we need to detect scroll direction
                // Check if we're scrolling up (element is above viewport)
                const isScrollingUp = entry.boundingClientRect.bottom < 0;
                
                if (isScrollingUp) {
                    // Remove animations when element is scrolled past (above)
                    if (sectionContent) {
                        sectionContent.classList.remove('fade-in');
                    }
                    
                    heroCards.forEach(card => {
                        card.classList.remove('fade-in');
                    });
                    
                    objectiveItems.forEach(item => {
                        item.classList.remove('fade-in');
                    });
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-60px 0px'
    });
    
    // Apply observer to all sections
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Step 3: Fix phone display for consistent content across screen sizes
    const iframe = document.getElementById('website-preview');
    const iphoneFrame = document.querySelector('.iphone-frame');
    
    if (iframe && iphoneFrame) {
        iframe.onload = function() {
            try {
                // Get the iframe document
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                
                // Apply responsive styles to iframe content
                const styleTag = iframeDoc.createElement('style');
                styleTag.textContent = `
                    body {
                        overflow-x: hidden;
                        width: 100%;
                        max-width: 100%;
                        transform-origin: top left;
                        zoom: 1;
                        -moz-transform: scale(1);
                        -moz-transform-origin: top left;
                    }
                    
                    /* Ensure content size is consistent regardless of device */
                    .container {
                        width: 100%;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 15px;
                    }
                    
                    /* Hide duplicate elements in iframe */
                    .iphone-frame, .phone-shadow {
                        display: none !important;
                    }
                `;
                iframeDoc.head.appendChild(styleTag);
                
                // Disable scrolling inside iframe
                iframeDoc.body.style.overflow = 'hidden';
                
                // Use fixed size content within the iframe
                iframe.style.width = '390px';  // iPhone 13 width
                iframe.style.height = '844px'; // iPhone 13 height
                iframe.style.transformOrigin = 'top left';
                
                // Apply consistent scaling based on screen size
                function updateIframeScale() {
                    const frameWidth = iphoneFrame.clientWidth;
                    const frameHeight = iphoneFrame.clientHeight;
                    
                    // Calculate content scale to fit inside phone frame
                    const scaleX = (frameWidth * 0.85) / 390;
                    const scaleY = (frameHeight * 0.85) / 844;
                    const scale = Math.min(scaleX, scaleY);
                    
                    // Apply scaling
                    iframe.style.transform = `scale(${scale})`;
                    
                    // Center content within frame
                    const scaledWidth = 390 * scale;
                    const scaledHeight = 844 * scale;
                    
                    iframe.style.left = `${(frameWidth - scaledWidth) / 2}px`;
                    iframe.style.top = `${(frameHeight - scaledHeight) / 2}px`;
                }
                
                // Make iframe content responsive
                updateIframeScale();
                window.addEventListener('resize', updateIframeScale);
            } catch(e) {
                console.log('Cannot access iframe content due to same-origin policy');
            }
        };
        
        // Make the iPhone frame responsive but maintain aspect ratio
        function adjustIphoneFrame() {
            const viewportWidth = window.innerWidth;
            const baseWidth = 300;
            const baseHeight = 600;
            const aspectRatio = baseHeight / baseWidth;
            
            let newWidth;
            if (viewportWidth < 480) {
                newWidth = Math.min(viewportWidth * 0.8, 240);
            } else if (viewportWidth < 768) {
                newWidth = Math.min(viewportWidth * 0.6, 280);
            } else {
                newWidth = 300;
            }
            
            const newHeight = newWidth * aspectRatio;
            
            iphoneFrame.style.width = `${newWidth}px`;
            iphoneFrame.style.height = `${newHeight}px`;
            
            // Update iframe scale after frame resize
            if (iframe.contentDocument || iframe.contentWindow) {
                const frameWidth = iphoneFrame.clientWidth;
                const frameHeight = iphoneFrame.clientHeight;
                
                const scaleX = (frameWidth * 0.85) / 390;
                const scaleY = (frameHeight * 0.85) / 844;
                const scale = Math.min(scaleX, scaleY);
                
                iframe.style.transform = `scale(${scale})`;
                
                const scaledWidth = 390 * scale;
                const scaledHeight = 844 * scale;
                
                iframe.style.left = `${(frameWidth - scaledWidth) / 2}px`;
                iframe.style.top = `${(frameHeight - scaledHeight) / 2}px`;
            }
        }
        
        window.addEventListener('resize', adjustIphoneFrame);
        adjustIphoneFrame();
    }
    
    // Step 4: Remove search button
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        const searchButton = searchContainer.querySelector('button');
        const searchInput = searchContainer.querySelector('input');
        
        // Remove search button
        if (searchButton) {
            searchButton.remove();
        }
        
        // Update search input styles if needed
        if (searchInput) {
            searchInput.style.borderRadius = '20px';  // Make input rounded on all sides
            searchInput.style.paddingRight = '15px';  // Add padding to right side
            
            // Remove enter key search functionality
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent default behavior
                }
            });
        }
    }
    
    // Run animations on load and scroll
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
});