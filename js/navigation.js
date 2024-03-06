nsv = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    consol.log(window.scrollY)
    if (window.scrollY > 223) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}