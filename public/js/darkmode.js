const moon = document.getElementById('moon');

function addDarkMode(){
    window.classList.add("darkmode");
}

moon.addEventListener('click', addDarkMode);
