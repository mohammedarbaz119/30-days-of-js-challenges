let c = document.querySelector('button')
c.addEventListener('click', e => {
    console.log(e.target)
})
c.addEventListener('dblclick', e => {
    console.log(e.target.textContent)
})

document.body.addEventListener('keypress', e => {
    document.querySelector('p').innerHTML += e.keyCode
})
let inp = document.querySelector('#c')
inp.style.fontSize = '35px'
let add = document.querySelector("#add")
add.addEventListener('click', () => {
    inp.value++
    inp.style.color = "green"
})
let sub = document.querySelector('#sub')
sub.addEventListener('click', () => {
    inp.value--
    inp.style.color = "red"

})