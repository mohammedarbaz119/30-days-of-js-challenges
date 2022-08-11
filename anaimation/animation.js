let wr = document.querySelector('.wrap')
let str ="30 days of javascript mohammmed arbaz"
let arr =str.split(" ")
arr.forEach(l=>{
    let div=document.createElement('div')
    let a = l.split('')
    a.forEach(m=>{
        let span = document.createElement('span')
        span.textContent=m.toUpperCase()
        span.style.margin='5px'
        div.append(span)
    }) 
   
    div.style.fontSize='100px'
div.style.marginRight='60px'
div.className='s'

   
    wr.append(div)
})
let s = document.querySelectorAll('.s')
let sp = document.querySelectorAll('span')
console.log(sp)
let o=0
sp.forEach(l=>{
    l.style.color=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
  })
wr.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
setInterval(()=>{
    wr.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
  sp.forEach(l=>{
    l.style.color=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
  })
  
    
},2000)
setInterval(()=>{
       
    sp.forEach(l=>{
        l.style.opacity=`${o}`
    })
    o+=0.1
    console.log(o)
    if(o>1){
        o=0
    }
},200)
