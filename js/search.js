btn = document.querySelector('.btn')
search = document.querySelector('.Search')

btn.addEventListner('click', () => {
    search.classList.add('active')
})