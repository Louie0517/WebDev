document.addEventListener('DOMContentLoaded', () => {
    // Setup dark mode toggle
    const toggleButton = document.querySelector(".toggle-btn");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        let modeIcon = document.getElementById('mode-icon');
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.innerHTML = '<i class="bx bx-sun"></i>'; // light mode icon
        } else {
            modeIcon.innerHTML = '<i class="bx bx-moon"></i>'; // dark mode icon
        }
    }

    // go back to main page
    function goBack() {
        window.location.href = "http://127.0.0.1:5501/WEB.HTML";
    }


    // Setup translation button - English to Tagalog
    const translateBtn = document.getElementById("translate-btn");
    if (translateBtn) {
        // Add a variable to track translation state
        let isTagalog = false;
        
        translateBtn.addEventListener("click", function() {
            // Toggle between English and Tagalog
            if (isTagalog) {
                // Currently in Tagalog, switch back to English
                translatePageToEnglish();
                isTagalog = false;
                translateBtn.innerHTML = '<i class="bx bx-globe"></i> Translate to Tagalog';
            } else {
                // Currently in English, translate to Tagalog
                translatePageToTagalog();
                isTagalog = true;
                translateBtn.innerHTML = '<i class="bx bx-globe"></i> Switch to English';
            }
        });
        
        // Initialize the button text
        translateBtn.innerHTML = '<i class="bx bx-globe"></i> Translate to Tagalog';
    }
    
    // Translation dictionaries
    const englishToTagalog = {
        // Common elements
        "Home": "Tahanan",
        "Back": "Bumalik",
        "Read Page": "Basahin ang Pahina",
        "Stop": "Itigil",
        "Translate to Tagalog": "Isalin sa Tagalog",
        "Switch to English": "Lumipat sa Ingles",
        
        // Biography terms
        "Biography": "Talambuhay",
        "Works": "Mga Akda",
        "Life": "Buhay",
        "Early life": "Maagang buhay",
        "Education": "Edukasyon",
        "Writings": "Mga Sulatin",
        "Legacy": "Pamana",
        "Notable Works": "Kilalang Mga Akda",
        
        // Hero section
        "José Rizal": "José Rizal",
        "National Hero of the Philippines": "Pambansang Bayani ng Pilipinas",
        "Writer": "Manunulat",
        "Physician": "Manggagamot",
        "Nationalist": "Nasyonalista",
        "Reformist": "Repormista",
        "Polymath": "Iskolar sa Maraming Larangan",
        
        // Biography sections
        "José Protasio Rizal Mercado y Alonso Realonda": "José Protasio Rizal Mercado y Alonso Realonda",
        "Born": "Ipinanganak",
        "Died": "Pumanaw",
        "Known for": "Kilala para sa",
        "Propaganda Movement": "Kilusang Propaganda",
        "Philippine Revolution": "Rebolusyong Pilipino", 
        "Noli Me Tángere": "Noli Me Tángere",
        "El Filibusterismo": "El Filibusterismo",
        "Calamba, Laguna": "Calamba, Laguna",
        "Bagumbayan, Manila": "Bagumbayan, Maynila",
        
        // Common biography terms
        "early life": "maagang buhay",
        "childhood": "pagkabata",
        "education": "edukasyon",
        "family": "pamilya",
        "exile": "pagpapatapon",
        "execution": "pagbitay",
        "martyrdom": "pagkamartir",
        "revolution": "rebolusyon",
        "reform": "reporma",
        "Spanish colonial period": "panahon ng pananakop ng Espanya",
        
        // Works related terms
        "novels": "mga nobela",
        "essays": "mga sanaysay",
        "poetry": "tula",
        "letters": "mga liham",
        "published": "nailathala",
        "written": "isinulat",
        "author": "may-akda",
        "chapter": "kabanata",
        "characters": "mga tauhan",
        "symbolism": "simbolismo",
        "themes": "mga tema",
        
    };
    
    
    function translatePageToTagalog() {
        
        document.body.classList.add('translating');
        
        
        translateHeadingsAndParagraphs();
        
        // Remove translation animation class after transition
        setTimeout(() => {
            document.body.classList.remove('translating');
        }, 500);
    }
    
    function translateHeadingsAndParagraphs() {
        // Translate headings (h1, h2, h3, etc.)
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            translateElement(heading);
        });
        
        // Translate paragraphs
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            translateElement(paragraph);
        });
        
        // Translate spans and other text elements
        const spans = document.querySelectorAll('span, div.hero-title, div.hero-subtitle, div.main-title');
        spans.forEach(span => {
            translateElement(span);
        });
        
        // Translate work cards specific elements
        const workTitles = document.querySelectorAll('.work-title');
        workTitles.forEach(title => {
            translateElement(title);
        });
        
        const workYears = document.querySelectorAll('.work-year');
        workYears.forEach(year => {
            translateElement(year);
        });
        
        const workDescriptions = document.querySelectorAll('.work-description');
        workDescriptions.forEach(desc => {
            translateElement(desc);
        });
        
       
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            translateElement(button);
        });
    }
    
    function translateElement(element) {
       
        if (!element.textContent || element.textContent.trim() === '') {
            return;
        }
        
       
        if (!element.dataset.originalText) {
            element.dataset.originalText = element.textContent;
        }
        
        
        const text = element.textContent.trim();
        
        
        if (englishToTagalog[text]) {
            element.textContent = englishToTagalog[text];
            return;
        }
        
        let translatedText = element.textContent;
        
        // Sort keys by length (descending) to prioritize translating longer phrases first
        const sortedKeys = Object.keys(englishToTagalog).sort((a, b) => b.length - a.length);
        
        for (const english of sortedKeys) {
            const tagalog = englishToTagalog[english];
            
           
            const regex = new RegExp('\\b' + english + '\\b', 'gi');
            translatedText = translatedText.replace(regex, tagalog);
        }
        
        // Update the element text
        element.textContent = translatedText;
    }
    
    // Function to translate page back to English
    function translatePageToEnglish() {
       
        location.reload();
    }

    // Setup read button with toggle functionality
    const readButton = document.getElementById('readButton');
    
    if (readButton) {
        let isReading = false;
        const originalButtonText = readButton.textContent || "Read Page";
        const originalButtonHtml = readButton.innerHTML;
        
        readButton.addEventListener('click', () => {
            if (isReading) {
                // Stop reading
                speechSynthesis.cancel();
                readButton.innerHTML = originalButtonHtml; // Restore original button content
                isReading = false;
            } else {
                // Start reading
                // Cancel any ongoing speech first
                speechSynthesis.cancel();
                
                // Get the main content elements
                const bioText = document.querySelector('.biography-text');
                const heroSubtitle = document.querySelector('.hero-subtitle');
                const heroTitle = document.querySelector('.hero-title');
                
                // Combine the text in a meaningful order
                let textToRead = '';
                
                if (heroTitle) {
                    textToRead += heroTitle.textContent + '. ';
                }
                
                if (heroSubtitle) {
                    textToRead += heroSubtitle.textContent + '. ';
                }
                
                if (bioText) {
                    textToRead += bioText.textContent + '. ';
                }
                
                // Read work cards content if they exist
                const workTitles = document.querySelectorAll('.work-title');
                const workDescriptions = document.querySelectorAll('.work-description');
                
                for (let i = 0; i < workTitles.length; i++) {
                    textToRead += workTitles[i].textContent + '. ';
                    if (i < workDescriptions.length) {
                        textToRead += workDescriptions[i].textContent + '. ';
                    }
                }
                
                // Create utterance and configure speech
                if (textToRead.trim().length > 0) {
                    const utterance = new SpeechSynthesisUtterance(textToRead);
                    utterance.lang = 'en-US';
                    utterance.rate = 1.0; // Normal speed
                    utterance.pitch = 1.0; // Normal pitch
                    
                    // Change button to stop button
                    readButton.innerHTML = '<i class="bx bx-stop-circle"></i> Stop'; // Add a stop icon
                    isReading = true;
                    
                    // Start speaking
                    speechSynthesis.speak(utterance);
                    
                    // Reset button when speech ends naturally
                    utterance.onend = function() {
                        readButton.innerHTML = originalButtonHtml;
                        isReading = false;
                    };
                } else {
                    console.warn("No readable text found on the page.");
                    alert("No readable text found on the page.");
                }
            }
        });
    } else {
        console.error("Error: #readButton not found in the DOM.");
    }
    
    // Back button functionality
    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", goBack);
    }
    
    function goBack() {
        alert("Navigating back to home page");
    }
});
