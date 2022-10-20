
let c = document.querySelectorAll('.s')
let d =document.querySelectorAll('.i')
let el;
c.forEach(l=>{l.addEventListener('dragstart',()=>{

l.classList.add('d')
})
})
c.forEach(l=>{l.addEventListener('dragend',()=>{
    
    l.classList.remove('d')
})
})

d.forEach(l=>{l.addEventListener('dragover',(e)=>{
    e.preventDefault();
    const dar = document.querySelector('.d')
    l.appendChild(dar)
    let c =dar.textContent
  // axios.post("/",{
  //   name:c,
  //   newpar:l.className,
  // }).catch(err=>{
  //   console.error(err)
  // })
  console.log("lol")
})
})
