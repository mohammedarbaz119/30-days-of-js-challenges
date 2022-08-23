let wrap = document.querySelector('.wr')
let add = document.querySelector('.add')
let name = document.querySelector("#name")
let score = document.querySelector('#score')

add.addEventListener("click",()=>{
    let div = document.createElement('div')
    let scor = document.createElement('div')
    let nam = document.createElement('div')
    let rembut = document.createElement('button')
    rembut.textContent="remove"
    rembut.className="rem"
    scor.textContent=score.value
    nam.textContent=name.value
    scor.style.backgroundColor="red"
    scor.style.color="white"
    scor.className='sc'
    nam.style.backgroundColor="black"
    scor.style.padding='8px'
    nam.className='na'
    nam.style.color="white"
    nam.style.padding='8px'
    div.style.backgroundColor="yellow"
    div.className="div"
  
    div.appendChild(nam)
    div.appendChild(scor)
    div.appendChild(rembut)
    wrap.append(div)

    rembut.addEventListener('click',()=>{
        wrap.removeChild(rembut.parentNode)
    })
})
console.log(window.outerWidth,window.innerWidth)



