let inputDarkMode =  document.getElementById('darkMode');
let html = document.querySelector('html');

function dark() {
    if (inputDarkMode.checked) {
        html.className = 'dark'
        systemTheme()
    } else {
        html.className = ' '
    }
}

function systemTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'
    
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'
    
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')

    return false;
}
