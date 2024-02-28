sounds = ['applause', 'boo', 'gasp', 'tada', 'vicotry', 'wrong']

sounds.ForEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound

    document.getElementById('buttons').appendChild(btn)
})