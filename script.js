let addnote = document.querySelector('.addnote');
let main = document.querySelector('#main');
let NoteMain = document.querySelector('.note');

NoteMain.querySelector('.addnote').addEventListener('click', () => {
    newnote();
});

NoteMain.querySelector('.trash').addEventListener('click', () => {
    NoteMain.remove();
    savenotes();
});

NoteMain.querySelector('.save').addEventListener('click', () => {
    savenotes();
    console.log("Save button clicked");
});


function savenotes() {
    const notes = document.querySelectorAll(".note textarea")
    console.log(notes);
    let data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
   if(data.length===0){
    localStorage.removeItem("notes")
   }
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
   
}


function newnote(text="") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <div class="save"><i class="fas fa-save"></i></div>
            <div class="trash"><i class="fa-solid fa-trash"></i></div>
            <div class="addnote"><i class="fa-solid fa-plus"></i></div>
        </div>
        <textarea></textarea>
    `;

    note.querySelector('.addnote').addEventListener('click', () => {
        newnote();
    });

    note.querySelector('.trash').addEventListener('click', () => {
        note.remove();
        savenotes();
    });

    note.querySelector('.save').addEventListener('click', () => {
        savenotes();
    });
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            savenotes()
        }
    )

    main.appendChild(note);
    savenotes()
}


