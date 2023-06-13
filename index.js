const circle = document.getElementById('circle')
const container = document.getElementById('container')
const kraterArea = document.getElementById('krater-area')
const background = document.getElementById('background')
const mode = document.getElementById('mode')
const clickButton = () => {
    if (circle.classList.contains('active')) {
        circle.classList.remove('active')
        container.classList.remove('container-active')
        kraterArea.classList.remove('krater-area-active')
        background.classList.remove('background-active')
        mode.classList.replace('dark','light')
    }
    else {
        circle.classList.add('active')
        container.classList.add('container-active')
        kraterArea.classList.add('krater-area-active')
        background.classList.add('background-active')
        mode.classList.replace('light','dark')
    }
}