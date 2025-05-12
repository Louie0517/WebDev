
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
                start: "top bottom", // Trigger animation when section enters viewport
                end: "bottom 20%", // End point of trigger
                scrub: true,
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
       const objectives = document.querySelectorAll('.resource-card-1, .resource-card-2, .resource-card-3');

       objectives.forEach((card, index) => {
           gsap.from(card, 
               {opacity: 0, y: 60 },
               {opacity: 1, y: 0, duration: 0.7, delay: index * 0.2 ,
            
               scrollTrigger: {
                   trigger: card, 
                   start: "top 80%", 
                   end: "top 20%",
                  scrub: true,
               }
            }
           );
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { scale: 1.1, duration: 0.2, ease: "power1.out"});
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { scale: 1, duration: 0.2, ease: "power1.in"});
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
  

const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');


const heroesInfo = {
    "Jose Rizal": "Si Jose Rizal ay isang pambansang bayani ng Pilipinas. Isa siyang manunulat, doktor, at repormista. Ang kanyang mga akdang 'Noli Me Tangere' at 'El Filibusterismo' ay tumuligsa sa pagmamalupit ng mga kolonyalistang Espanyol at nagbigay inspirasyon sa kilusang rebolusyonaryo. Siya ay binitay noong Disyembre 30, 1896 sa Bagumbayan (Luneta).",
    "Andres Bonifacio": "Si Andres Bonifacio ay kilala bilang Ama ng Rebolusyong Pilipino at Supremo ng Katipunan (KKK), isang lihim na samahan na naghangad ng kalayaan ng Pilipinas mula sa Espanya. Pinamunuan niya ang pagsiklab ng rebolusyon noong 1896. Siya ay pinaslang noong 1897 sa utos ng pamahalaang rebolusyonaryo sa Tejeros Convention.",
    "Emilio Aguinaldo": "Si Emilio Aguinaldo ang unang pangulo ng Pilipinas at isa sa mga pangunahing pinuno ng rebolusyon laban sa mga Espanyol. Pinamunuan niya ang proklamasyon ng kasarinlan ng Pilipinas noong Hunyo 12, 1898 sa Kawit, Cavite. Siya rin ang naging pangulo ng Unang Republika ng Pilipinas.",
    "Buhay ni Emilio Aguinaldo": "Si Emilio Aguinaldo ay isinilang noong Marso 22, 1869 sa Cavite el Viejo (ngayon ay Kawit, Cavite). Siya ay anak nina Carlos Aguinaldo at Trinidad Famy, at ikapito sa walong magkakapatid. Nagtapos siya ng elementarya sa kanyang bayan at pumasok sa Colegio de San Juan de Letran, subalit hindi niya natapos ang pag-aaral dahil sa karamdaman. Sa kabila nito, naging aktibo siya sa pamahalaang lokal at nahalal bilang Kapitan Municipal ng Kawit sa murang edad. Noong 1896, sa pagsiklab ng Himagsikang Pilipino, naging isa siya sa mga lider ng Katipunan sa Cavite. Pinamunuan niya ang maraming labanan laban sa mga Espanyol at naging isang kilalang heneral. Noong Hunyo 12, 1898, idineklara niya ang kasarinlan ng Pilipinas mula sa Espanya sa kanyang tahanan sa Kawit, Cavite. Noong 1899, siya ay nahalal bilang kauna-unahang Pangulo ng Unang Republika ng Pilipinas. Subalit, sa pagsisimula ng Digmaang Pilipino-Amerikano, siya ay nadakip ng mga puwersang Amerikano noong 1901 sa Palanan, Isabela. Matapos ang pagkakadakip, nanumpa siya ng katapatan sa Estados Unidos at tuluyang tumigil sa aktibong pulitika. Si Emilio Aguinaldo ay pumanaw noong Pebrero 6, 1964 sa edad na 94.",
    "Sino si Lapu-Lapu": "Si Lapu-Lapu ay ang datu ng Mactan na itinuturing bilang unang bayani ng Pilipinas. Siya ang namuno sa kanyang mga mandirigma laban kay Ferdinand Magellan sa Labanan sa Mactan noong Abril 27, 1521, na nagresulta sa pagkamatay ng mananakop na Portuges.",
    "Melchora Aquino": "Si Melchora Aquino, na mas kilala bilang 'Tandang Sora', ay tinaguriang Ina ng Rebolusyon. Siya ay nagbigay ng kanlungan, pagkain, at suporta sa mga Katipunero. Sa kabila ng kanyang edad, naging mahalaga ang kanyang ambag sa kilusang rebolusyonaryo.",
    "Apolinario Mabini": "Si Apolinario Mabini ay kilala bilang 'Dakilang Lumpo' at 'Utak ng Rebolusyon'. Kahit may kapansanan, siya ang naging pangunahing tagapayo ni Pangulong Emilio Aguinaldo at ang unang Punong Ministro ng Pilipinas. Kinikilala siya sa kanyang katalinuhan at integridad sa serbisyo para sa bayan.",
    "Marcelo H. del Pilar": "Si Marcelo H. del Pilar ay isang makabayang manunulat at lider ng propaganda movement. Siya ang patnugot ng pahayagang 'La Solidaridad' na tumuligsa sa pagmamalupit ng mga prayle at nagpahayag ng adhikaing reporma para sa mga Pilipino. Gumamit siya ng sagisag-panulat na 'Plaridel'.",
    "Gregorio del Pilar": "Si Gregorio del Pilar ay isa sa pinakabatang heneral ng rebolusyon. Kilala siya bilang 'Bayani ng Tirad Pass', kung saan matapang niyang pinigil ang mga Amerikano upang bigyan ng oras si Aguinaldo na makatakas. Siya ay namatay sa edad na 24 sa Labanan sa Tirad Pass noong 1899.",
    "Ang sarap ko no" : "Oo sobrang sarap mo Brent. aaUghh Fuck!!"
};



chatIcon.addEventListener("click", () => {
    chatBox.style.display = (chatBox.style.display === "none" || !chatBox.style.display) ? "flex" : "none";
});

closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
});

const sendChatMessage = () => {
    const message = messageInput.value.trim();
    if (message) {
        const userMessageElement = document.createElement("div");
        userMessageElement.className = "message user-message";
        userMessageElement.textContent = message;
        chatMessages.appendChild(userMessageElement);

        messageInput.value = "";

        setTimeout(() => {
            const botMessageElement = document.createElement("div");
            botMessageElement.className = "message bot-message";

            const botReply = heroesInfo[message] || "Paumanhin, wala akong impormasyon tungkol diyan. Maaari kang magtanong tungkol sa mga bayani tulad nina Jose Rizal, Andres Bonifacio, at iba pa.";
            botMessageElement.textContent = botReply;

            chatMessages.appendChild(botMessageElement);
        }, 1000);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};


sendMessage.addEventListener("click", sendChatMessage);
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatMessage();
});
