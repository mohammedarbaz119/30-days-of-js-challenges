let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOM Day 2'

console.log(title)
let titl
for (let i = 0; i < 3; i++) {
    titl = document.createElement('h1')
    titl.className = 'title'
    titl.style.fontSize = '24px'
    titl.textContent = i
    document.body.appendChild(titl)
    console.log(titl)

}
let h1s = document.querySelectorAll('h1')
h1s.forEach(l => {
    document.body.removeChild(l)
})
let c = document.createElement('div')
c.style.fontSize = '60px'
c.textContent = "yesss"
document.body.append(c)