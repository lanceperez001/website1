toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getEelemntById('close')


toggle.addEventListener('click', () => {
    documnet.bodyclassList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.ClassList.add('show-modal')
})

close.addEventListener('click', () => {
    modal.ClassList.remove('show-modal')
})

close.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})