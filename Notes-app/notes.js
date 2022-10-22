let edit_outer_button = document.querySelector('.edit-outer')
let notes_holder = document.querySelector('.notes-holder')
let editform= document.querySelector('.edit-form')
let edit_title = document.querySelector('.title-text-edit')
let note_edit = document.querySelector('.note-edit')
shownotes();
let c = true;


let title = document.querySelector('.title-text')
let note = document.querySelector('.note')
let submit_button = document.querySelector('.subm')
submit_button.addEventListener('click', (e) => {
    e.preventDefault()
    if (title.value === '' || note.value === '') {
        alert('fill all the particulars')
        return
    }
    let notes = localStorage.getItem("notes")
    if (notes === null) {
        allnotes = []
    }
    else {
        allnotes = JSON.parse(localStorage.getItem("notes"))
    }
   
    let addnote = { "title": title.value, "detail": note.value }
title.value=''
note.value=''
    allnotes.push(addnote)
    localStorage.setItem("notes", JSON.stringify(allnotes))
    shownotes();
})
function shownotes() {
    let allnotes = JSON.parse(localStorage.getItem("notes"))
    if (allnotes === null || allnotes.length <= 0) {
        notes_holder.textContent = "no notes here add a note"
    }

    else {

        notes_holder.innerHTML = ''
        allnotes.forEach((l, i) => {
        let div = document.createElement('div')


            //add tilte
            let title_element = document.createElement('h2')
            title_element.textContent = l.title
            //add details
            let details = document.createElement('p')
            details.textContent = l.detail
            //add delete button
            let delete_button = document.createElement('button')
            delete_button.textContent = "delete note"
            delete_button.id=i
            delete_button.className = "delete"
            delete_button.addEventListener('click', () => {
                deletenote(+delete_button.id);
            })

            //Edit note button
            let Edit_note_button = document.createElement('button')
            Edit_note_button.textContent = "edit note"
            Edit_note_button.id=i
            Edit_note_button.className = "edits"

            //edit note 
            Edit_note_button.addEventListener('click', () => {
                let allbuttons = document.querySelectorAll('button')
                allbuttons.forEach(l => {
                    if (!l.classList.contains("edit-outer")) {
                        l.disabled = true
                    }
                })
                editform.classList.add('activ')
                edit_title.value=l.title
                 note_edit.value=l.detail
                 if(c===true){
                    eventlistenerd(i)
                 }
              c=false
            })
        

            //add delete and edit button on same line

            let edit_and_delete_div = document.createElement('div')
            edit_and_delete_div.append(delete_button)
            edit_and_delete_div.append(Edit_note_button)
            edit_and_delete_div.className = "edit-div"

            //append the note title and details to the div
            div.append(title_element)
            div.append(details)
            div.append(edit_and_delete_div)
            div.className = "single-note"
          
         

            notes_holder.append(div)
       
        });
    }

}
function eventlistenerd(i){
 
   
edit_outer_button.addEventListener('click', (e) => {
        
   
    e.preventDefault()
  
    Editnote(i)
  
    let allbuttons = document.querySelectorAll('button')
    allbuttons.forEach(l => {
        l.disabled = false

    })

    editform.classList.remove('activ')
    
 shownotes();
 

})
}



function Editnote(i) {
    let allnotes = JSON.parse(localStorage.getItem("notes"))
    console.log(i)
    let edited_notes = allnotes.map((l, idx) => {
        if (i === idx) {
            return {
                
                "title": edit_title.value,
                "detail": note_edit.value
            
        }
    }

        return l



    })
   
    console.log(edited_notes)
   
    localStorage.setItem("notes", JSON.stringify(edited_notes))
    
 


}



function deletenote(i) {
    let allnotes = JSON.parse(localStorage.getItem("notes"))
    let newnotes = allnotes.filter((l, idx) => i !== idx)
    localStorage.setItem("notes", JSON.stringify(newnotes))
    shownotes();
}
