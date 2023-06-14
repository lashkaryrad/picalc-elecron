let inputDarkMode =  document.getElementById('darkMode');
let html= document.querySelector('html')

function dark() {
    if (inputDarkMode.checked) {
        html.className = 'dark'
    } else {
        html.className = ''
    }
}
