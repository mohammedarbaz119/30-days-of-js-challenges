let c = document.getElementsByTagName("h1")
console.log(c)
console.log(c.length)
c.item(0).style.backgroundColor = "red";
for (let i = 0; i < c.length; i++) {
    console.log(c[i])
}