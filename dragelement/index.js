let c = document.querySelectorAll('.s')
let d =document.querySelectorAll('.i')
let el;
c.forEach(l=>{l.addEventListener('dragstart',(e)=>{

l.classList.add('d')
})
})
c.forEach(l=>{l.addEventListener('dragend',(e)=>{
    
    l.classList.remove('d')
})
})

d.forEach(l=>{l.addEventListener('dragover',(e)=>{
    e.preventDefault();
    const dar = document.querySelector('.d')
    l.appendChild(dar)
})
})
