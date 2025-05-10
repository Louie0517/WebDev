

 
 function goBack() {
            alert("Navigating back to home page");
        }

    
    document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".toggle-btn").addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    let modeIcon = document.getElementById('mode-icon');

    if (document.body.classList.contains('dark-mode')) {
        modeIcon.innerHTML = '<i class="bx bx-sun"></i>'; // light mode
    } else {
        modeIcon.innerHTML = '<i class="bx bx-moon"></i>'; // dark mode
    }
}

document.getElementById("translate-btn").addEventListener("click", function () {
    let googleTranslateElement = document.querySelector(".goog-te-combo");
    if (googleTranslateElement) {
        googleTranslateElement.click(); 
    } else {
        alert("Translation option not found!");
    }
});
