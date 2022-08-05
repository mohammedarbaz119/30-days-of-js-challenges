let cc = document.querySelector('.cc')
for (let i = 0; i <= 100; i++) {
    let c = document.createElement('div')
    c.textContent = `${i}`
    c.style.fontSize = '40px'
    c.style.color = "white"


    c.className = 'c'
    if (i % 2 == 0) {
        c.style.backgroundColor = "green"
    }
    else if (prime(i)) {
        c.style.backgroundColor = "yellow"

    }
    else {
        c.style.backgroundColor = "red"
    }
    cc.append(c)
}
function prime(i) {
    for (let c = 2; c <= Math.sqrt(i); c++) {
        if (i % c == 0) {
            return false
        }
    }
    return true
}