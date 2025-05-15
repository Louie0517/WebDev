
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
    "Sino si Jose Rizal at ano ang kanyang mga kontribusyon sa kasaysayan ng Pilipinas?":
        "Si Jose Rizal ay isang pambansang bayani ng Pilipinas. Isa siyang manunulat, doktor, at repormista. Ang kanyang mga akdang 'Noli Me Tangere' at 'El Filibusterismo' ay tumuligsa sa pagmamalupit ng mga kolonyalistang Espanyol at nagbigay inspirasyon sa kilusang rebolusyonaryo. Siya ay binitay noong Disyembre 30, 1896 sa Bagumbayan (Luneta).",

    "Ano ang naging papel ni Andres Bonifacio sa Rebolusyong Pilipino?":
        "Si Andres Bonifacio ay kilala bilang Ama ng Rebolusyong Pilipino at Supremo ng Katipunan (KKK), isang lihim na samahan na naghangad ng kalayaan ng Pilipinas mula sa Espanya. Pinamunuan niya ang pagsiklab ng rebolusyon noong 1896. Siya ay pinaslang noong 1897 sa utos ng pamahalaang rebolusyonaryo sa Tejeros Convention.",

    "Sino si Emilio Aguinaldo at ano ang kanyang naiambag sa kasarinlan ng Pilipinas?":
        "Si Emilio Aguinaldo ang unang pangulo ng Pilipinas at isa sa mga pangunahing pinuno ng rebolusyon laban sa mga Espanyol. Pinamunuan niya ang proklamasyon ng kasarinlan ng Pilipinas noong Hunyo 12, 1898 sa Kawit, Cavite. Siya rin ang naging pangulo ng Unang Republika ng Pilipinas.",

    "Ano ang buong talambuhay ni Emilio Aguinaldo mula pagkabata hanggang kamatayan?":
        "Si Emilio Aguinaldo ay isinilang noong Marso 22, 1869 sa Cavite el Viejo (ngayon ay Kawit, Cavite). Siya ay naging Kapitan Municipal, naging lider ng Katipunan sa Cavite, idineklara ang kasarinlan ng Pilipinas, at naging unang Pangulo ng Unang Republika ng Pilipinas. Pumanaw siya noong Pebrero 6, 1964.",

    "Sino si Lapu-Lapu at ano ang kahalagahan ng kanyang laban kay Magellan?":
        "Si Lapu-Lapu ay ang datu ng Mactan na itinuturing bilang unang bayani ng Pilipinas. Siya ang namuno sa kanyang mga mandirigma laban kay Ferdinand Magellan sa Labanan sa Mactan noong Abril 27, 1521, na nagresulta sa pagkamatay ni Magellan.",

    "Ano ang mga kontribusyon ni Melchora Aquino sa Rebolusyon?":
        "Si Melchora Aquino, na kilala bilang 'Tandang Sora', ay nagbigay ng suporta, pagkain, at tulong sa mga Katipunero. Siya ay tinaguriang 'Ina ng Rebolusyon'.",

    "Sino si Apolinario Mabini at bakit siya tinawag na 'Dakilang Lumpo'?":
        "Si Apolinario Mabini ay isang matalinong tagapayo ni Aguinaldo at naging unang Punong Ministro ng Pilipinas. Tinawag siyang 'Dakilang Lumpo' dahil sa kanyang kapansanan sa katawan ngunit malawak na isipan.",

    "Ano ang naging papel ni Marcelo H. del Pilar sa kilusang propaganda?":
        "Si Marcelo H. del Pilar ay patnugot ng pahayagang 'La Solidaridad' at kilala sa sagisag na 'Plaridel'. Siya ay lumaban sa katiwalian ng mga prayle sa pamamagitan ng kanyang mga isinulat.",

    "Sino si Gregorio del Pilar at bakit siya tinawag na 'Bayani ng Tirad Pass'?":
        "Isa siyang batang heneral na lumaban upang bigyan ng oras si Aguinaldo na makatakas. Siya ay namatay sa Labanan sa Tirad Pass noong 1899.",

    "Sino si Antonio Luna at ano ang kanyang naiambag sa militar ng Pilipinas?":
        "Si Antonio Luna ay isang heneral at siyentipiko na naging kilala sa kanyang matinding disiplina at estratehiya sa laban. Pinamunuan niya ang mga puwersa laban sa mga Amerikano sa panahon ng Digmaang Pilipino-Amerikano.",

    "Ano ang naging papel ni Juan Luna sa kilusang propaganda at sining sa Pilipinas?":
        "Si Juan Luna ay isang pintor at iskultor na naging simbolo ng makabayang sining. Isa sa kanyang pinakatanyag na likha ay ang 'Spoliarium', na nagpapakita ng pagdurusa ng mga Pilipino sa ilalim ng mga kolonyalista.",

    "Sino si Gabriela Silang at bakit siya tinatawag na 'Joan of Arc ng Ilocos'?":
        "Si Gabriela Silang ay isang babaeng rebolusyonaryo na nagpatuloy sa laban ng kanyang asawang si Diego Silang matapos itong mapatay. Pinamunuan niya ang mga Ilokano sa pakikibaka laban sa mga Kastila.",

    "Ano ang ambag ni Sultan Kudarat sa kasaysayan ng Mindanao?":
        "Si Sultan Kudarat ay isang makapangyarihang lider ng Mindanao na tumutol at lumaban sa mga Espanyol sa pamamagitan ng matatag na pamumuno sa mga Muslim sa Timog Pilipinas.",

    "Sino si Francisco Balagtas at bakit mahalaga ang kanyang panitikan?":
        "Si Francisco Balagtas ay isang makatang Pilipino na sumulat ng 'Florante at Laura'. Ang kanyang mga tula ay sumasalamin sa kalagayan ng bayan sa ilalim ng kolonyalismo.",

    "Ano ang naiambag ni Ninoy Aquino sa demokrasya ng Pilipinas?":
        "Si Benigno 'Ninoy' Aquino Jr. ay isang senador na tumutol sa diktadurya ni Ferdinand Marcos. Ang kanyang pagbabalik sa Pilipinas at pagkamatay noong 1983 ay nagpagising sa damdaming makabayan ng mga Pilipino."
    "Kailan pinangak si rizal?":
    "Si José Rizal ay ipinanganak noong Hunyo 19, 1861 sa Calamba, Laguna, Pilipinas.",
        "ilan ang naging nobya ni rizal":
    "Si Jose Rizal ay nagkaroon ng siyam (9) na kilalang nobya: Segunda Katigbak, Leonor Valenzuela, Leonor Rivera, Consuelo Ortiga, O-Sei-San, Gertrude Beckett, Suzanne Jacoby, Nellie Boustead, at Josephine Bracken."
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
