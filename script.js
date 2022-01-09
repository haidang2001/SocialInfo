const toggle = document.getElementById('toggle')
const main = document.getElementsByClassName('main')[0]
const buttonleft = document.getElementsByClassName('button-left')[0]
const buttonright = document.getElementsByClassName('button-right')[0]
const moon = document.getElementsByClassName('moon')[0]
const sun = document.getElementsByClassName('sun')[0]

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle("dark",e.target.checked)
    main.classList.toggle('maindark')
    
    buttonleft.classList.toggle('buttonDark')
    buttonright.classList.toggle('buttonDark')
})
moon.addEventListener('click', () => {
    moon.classList.toggle('fa-moon')
    moon.classList.toggle('fa-sun')
})
// sun.addEventListener('click', () => {
//     sun.classList.remove('fa-sun')
//     sun.classList.add('fa-moon')
// })
