sounds = ['applause', 'boo', 'gasp', 'tada', 'vicotry', 'wrong']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListener('click', () => {
        stop()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})