const worldpop = countries_data.reduce((l,{population})=>{
    return l+population
},0)
console.log(worldpop)
let subtitle = document.querySelector('.subtitle')
subtitle.textContent=`Currently,we have ${countries_data.length} countries`
subtitle.style.fontSize='30px'
let graphbut = document.querySelector('.graphbuttons')
graphbut.style.backgroundColor="aliceblue"
graphbut.style.padding='30px'
let populationbutton = document.querySelector('.population')
populationbutton.style.fontSize='30px'
let languagesbut = document.querySelector('.languages')
languagesbut.style.fontSize='30px'
let graphtitle = document.querySelector('.graph-title')


let graphstat = document.querySelector('#stat')
let graphs = document.querySelector('graphs')


//languages

let set = new Set()
for(const {languages} of countries_data){
    languages.forEach(l=>{
        if(!set.has(l)){
            set.add(l)
        }
    })
}

let arr =[]
for(const la of set){
    let count =0
countries_data.forEach(l=>{
    l.languages.forEach(c=>{
        if(c===la){
            count++
        }
    })
})



arr.push({name:la,count:count})
}
let arr10 = arr.sort((a,b)=>{
    return b.count-a.count
}).slice(0,10)
console.log(arr10)



//population
let mostpop10= countries_data.sort((a,b)=>{
    return b.population-a.population
}).slice(0,10)
mostpop10.unshift({name:"world",population:worldpop})
console.log(mostpop10)
















languagesbut.addEventListener('click',()=>{
   
graphtitle.textContent='10 most speaken languages in the world'
graphstat.innerHTML=''
arr10.forEach(l=>{
    let outerdiv = document.createElement('div') 
    let name = document.createElement('div')
    name.textContent=l.name
    name.style.fontSize='25px'
  name.style.width='80px'
  name.style.marginRight='50px'
    let graphoutter=document.createElement('div')
    graphoutter.className='graphout'
    let graphinner = document.createElement('div')
    graphinner.style.width=`${l.count}%`
    graphinner.style.height='100%'
    graphinner.style.backgroundColor='orange'
    let span = document.createElement('span')
    span.textContent=l.count
    outerdiv.className='out'
    graphoutter.appendChild(graphinner)
    outerdiv.appendChild(name)
    outerdiv.appendChild(graphoutter)
    outerdiv.appendChild(span)

graphstat.append(outerdiv)
})

})
populationbutton.addEventListener('click',()=>{
    graphtitle.textContent="most populated countries in the world"
    graphstat.textContent=''
    mostpop10.forEach(l=>{
    let outerdiv = document.createElement('div') 
    let name = document.createElement('div')
    name.textContent=l.name
    name.style.fontSize='25px'
  name.style.width='160px'
  name.style.marginRight='50px'
    let graphoutter=document.createElement('div')
    graphoutter.className='graphout'
    let graphinner = document.createElement('div')
    graphinner.style.width=`${Math.round((l.population*100)/worldpop)}%`
    graphinner.style.height='100%'
    graphinner.style.backgroundColor='orange'
    graphoutter.style.marginRight='10px'
    let span = document.createElement('span')
    
    span.textContent=l.population.toLocaleString()
    outerdiv.className='out'
    graphoutter.appendChild(graphinner)
    outerdiv.appendChild(name)
    outerdiv.appendChild(graphoutter)
    outerdiv.appendChild(span)

graphstat.append(outerdiv)
})
})
let pop20 = countries_data.sort((a,b)=>{
    return b.population-a.population
}).slice(0,20)
console.log(pop20)