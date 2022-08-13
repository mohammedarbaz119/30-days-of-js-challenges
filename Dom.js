let c = document.querySelectorAll("h1")
console.log(c)
console.log(c.length)
c.item(0).style.backgroundColor = "red";
for (let i = 0; i < c.length; i++) {
    console.log(c[i])
}
let p = document.querySelector('p')
console.log(p)
let es = document.querySelector('#e')
console.log(es)
let nodelist = document.querySelectorAll('p')
console.log(nodelist)
for (let index = 0; index < nodelist.length; index++) {
    console.log(nodelist[index].textContent)

}
nodelist[3].className = "f"
let cc = document.getElementsByClassName("f")[0]
cc.innerHTML = "this a modified paragraph"
c[3].textContent = "new dehbfwfefuhre deewana"
nodelist[4].textContent = "yes ismail deewana"
c[2].setAttribute('class', 'new')
nodelist.forEach((t, i) => {
    t.setAttribute('class', `new${i}`)
})
let p2 = document.querySelector(".new2")
p2.style.backgroundColor = "red"
c.forEach((t, i) => {
    t.style.margin = "0"
    t.style.color = "blue"
    t.style.border = "1px solid white"
    t.style.fontSize = "40px"
    i % 2 == 0 ? t.style.backgroundColor = "red" : t.style.backgroundColor = "blue"
    i % 2 == 0 ? t.textContent = "red" : t.textContent = "blue"
})

let a =[1,2,3,3,4]
p2.textContent=a