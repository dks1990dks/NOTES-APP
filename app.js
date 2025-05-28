let notescontainer = document.querySelector(`.notes-container`)
let createBtn = document.querySelector(`.btn`)

function updateStorage() {
    localStorage.setItem(`notes`,notescontainer.innerHTML)
    
}
function showNotes() {
    notescontainer.innerHTML = localStorage.getItem(`notes`)
    document.querySelectorAll(`.input-box`).forEach(note=>{
        note.addEventListener(`keyup`, updateStorage)
    })
    
}
showNotes()

createBtn.addEventListener(`click`,()=>{
    let div = document.createElement(`div`)
    div.classList.add(`input-box`)
    div.setAttribute(`contenteditable`,true)

    let img = document.createElement(`img`)
    img.src = `images/delete.png`
    div.appendChild(img)
    div.addEventListener(`keyup`,updateStorage)

    notescontainer.prepend(div)
})

notescontainer.addEventListener(`click`,(e)=>{
    if (e.target.tagName === `IMG`) {
        e.target.parentElement.remove()
        updateStorage()
    }
})

