


let newdiv = document.querySelector(".new")
let edit = document.querySelector('.edit')
let bu = document.querySelector("#d")
newdiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log(e.target)
   
    e.preventDefault()

})
bu.addEventListener('click',()=>{

    if(edit.disabled===false){
        edit.disabled=true
    }
    else{
        edit.disabled=false
    }

    
})
