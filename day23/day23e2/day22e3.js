let ke = document.querySelector(".keyp")
let d = document.createElement('div')
d.style.display = 'none'
d.className = "any"
ke.after(d)
document.body.addEventListener('keypress', (e) => {
    ke.innerHTML = `You pressed:  `
    let c = document.createElement('span')
    c.innerText = e.key.toUpperCase()
    c.style.color = "green"
    d.innerHTML = e.keyCode
    d.style.display = 'flex'
    ke.append(c)
})