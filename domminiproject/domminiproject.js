let ul = document.querySelector('ul')
let c = ul.children
for (let i = 0; i < c.length; i++) {
    if (c[i].textContent.includes("Done")) {
        c[i].style.backgroundColor = "green"

    }
    else if (c[i].textContent.includes("Ongoing")) {
        c[i].style.backgroundColor = "yellow"
    }
    else {
        c[i].style.backgroundColor = "red"
    }
}
let d = document.createElement('div')
document.querySelector('h2').after(d)
d.setAttribute('class', 'center')

setInterval(() => {
    document.querySelector('span').style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    let dada = new Date()
    let daR = dada.getFullYear()
    let dam = dada.getMonth() + 1
    let dad = dada.getDate()
    let dah = dada.getHours()
    let das = dada.getMinutes()
    let dass = dada.getSeconds()
    if (dam < 10) {
        damm = `0${dam}`

    }
    else {
        damm = `${dam}`
    }
    if (dad < 10) {
        dadd = `0${dad}`

    }
    else {
        dadd = `${dad}`
    }
    if (dass < 10) {
        dass = `0${dass}`
    }
    if (dah < 10) {
        dah = `0${dah}`
    }
    const puchee = `${daR}-${damm}-${dadd} ${dah}:${das}:${dass}`
    d.innerHTML = puchee



    d.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

}, 1000)

