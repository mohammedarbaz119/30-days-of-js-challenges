let w = document.querySelector('.w')
let ins = document.querySelector('#num')
let genra = document.querySelector("#gen")
let p = document.createElement('p')
genra.after(p)
ins.addEventListener('blur', () => {


    if (!parseInt(ins.value)) {

        p.style.color = "red"
        p.style.fontSize = '25px'
        genra.disabled = true

        p.textContent = 'not a number'
    }
    w.innerHTML = ''
})

genra.addEventListener("click", () => {
    try {
        let n = ins.value
        for (i = 0; i <= n; i++) {
            let c = document.createElement('div')
            c.textContent = i
            c.style.width = '150px'
            c.style.height = '100px'
            c.style.margin = '10px'
            c.style.color = "white"
            c.style.fontSize = '30px'
            c.className = 'c'
            if (i % 2 == 0) {

                c.style.backgroundColor = "green"
            }
            else if (prime(i)) {
                c.style.backgroundColor = "red"
            }
            else {
                c.style.backgroundColor = "yellow"
            }
            w.append(c)
        }

    }
    catch (err) {
        console.log(err)
    }
})
function prime(i) {
    for (let c = 2; c <= Math.sqrt(i); c++) {
        if (i % c == 0) {
            return false
        }
    }
    return true
}