const circle = document.getElementById('circle')
const container = document.getElementById('container')
const kraterArea = document.getElementById('krater-area')
const background = document.getElementById('background')
const tsvg = document.getElementById('tsvg')
const xsvg = document.getElementById('xsvg')
const mode = document.getElementById('mode')
const circle2 = document.getElementById('circle2')
const circle3 = document.getElementById('circle3')
const circle4 = document.getElementById('circle4')
const circle5 = document.getElementById('circle5')
const container2 = document.getElementById('container2')
const container3 = document.getElementById('container3')
const container4 = document.getElementById('container4')
const container5 = document.getElementById('container5')

const clickButton = () => {
    if (circle.classList.contains('active')) {
        circle.classList.remove('active')
        circle2.classList.remove('ci2-active')
        circle3.classList.remove('ci2-active')
        circle4.classList.remove('ci2-active')
        circle5.classList.remove('th-active')
        container2.classList.remove('ct-active')
        container3.classList.remove('ct-active')
        container4.classList.remove('ct-active')
        container5.classList.remove('th-ct-tactive')
        container.classList.remove('container-active')
        kraterArea.classList.remove('krater-area-active')
        background.classList.remove('background-active')
        tsvg.style.display = 'block'
        xsvg.style.display = 'none'
        mode.classList.replace('dark','light')
    }
    else {
        circle.classList.add('active')
        circle2.classList.add('ci2-active')
        circle3.classList.add('ci2-active')
        circle4.classList.add('ci2-active')
        circle5.classList.add('th-active')
        container2.classList.add('ct-active')
        container3.classList.add('ct-active')
        container4.classList.add('ct-active')
        container5.classList.add('th-ct-active')
        container.classList.add('container-active')
        kraterArea.classList.add('krater-area-active')
        background.classList.add('background-active')
        tsvg.style.display = 'none'
        xsvg.style.display = 'block'
        mode.classList.replace('light','dark')
    }
}
