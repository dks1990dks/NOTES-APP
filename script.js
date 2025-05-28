let notescontainer = document.querySelector(`.notes-container`)
let createBtn = document.querySelector(`.btn`)
let notes = document.querySelector(`.input-box`)


function updateStorage() {
    localStorage.setItem(`notes`, notescontainer.innerHTML)

}
function showNotes() {
    notescontainer.innerHTML = localStorage.getItem(`notes`)
}
showNotes()


createBtn.addEventListener(`click`, () => {
    let p = document.createElement(`p`)
    p.classList.add(`input-box`)
    p.setAttribute(`contenteditable`, true)
    notescontainer.appendChild(p)
    let img = document.createElement(`img`)
    img.src = `images/delete.png`;
    p.appendChild(img)
})

notescontainer.addEventListener(`click`, (e) => {
    if (e.target.tagName === `IMG`) {
        e.target.parentElement.remove()
        updateStorage()
    } else if (e.target.tagName === `P`) {
        notes = document.querySelectorAll(`.input-box`)
        notes.forEach(note => {
            note.onkeyup = () => {
                updateStorage()
            }
        });
    }

})

document.addEventListener(`keydown`, event => {
    if (event.key === `Enter`) {
        document.execCommand(`insertLineBreak`)
        event.preventDefault()
    }
})


