let h1 = document.querySelector('h1')
h1.style.fontSize = '60px'
h1.innerHTML = h1.innerHTML.toLocaleUpperCase()
let h4 = document.querySelector('h4')
h4.style.fontSize = '40px'



const url = 'https://restcountries.com/v2/all'
let cc = document.querySelector('.cc')
let country
const puchi = async () => {
    try {
        let res = await fetch(url)
        country = await res.json()
        h4.innerHTML = `Total no of countries:${country.length}`
        country.forEach(({ name }) => {
            let c = document.createElement('div')
            c.innerText = `${name}`
            c.className = 'd'

            cc.appendChild(c)
        });
    }
    catch (err) {
        console.log(err)
    }
}
puchi()
