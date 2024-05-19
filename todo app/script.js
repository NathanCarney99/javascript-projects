const newButton = document.getElementById("new-btn");
const noteBackground = document.getElementById("note-back");
const cancelButton = document.getElementById("x");
const btmContainer = document.getElementById("btm");
const submitButton = document.getElementById("submit");
let noteText = document.getElementById("note-text");
const noteItems = document.getElementById("note-items");
const body = document.getElementById("body");
const newBtnText = document.getElementById("new-btn-hover");




newButton.onclick = function () {
  noteBackground.classList.remove("hide");
  noteBackground.classList.add("note-background");
  body.classList.add("no-scroll");
};

cancelButton.onclick = function () {
  noteBackground.classList.add("hide");
  noteBackground.classList.remove("note-background");
  newButton.classList.remove("hide");
  noteText.value = "";
  body.classList.remove("no-scroll");
  
};

console.log(noteText.value + "here");


submitButton.onclick = function () {
    let text = noteText.value;

    if(text == '')
    {cancelButton.onclick(); return;

    }
    

    cancelButton.onclick();

    

    let newNote = document.createElement('div');
    newNote.classList.add("item");
    newNote.id = "item";
    newNote.innerHTML = 
        `<p>${text}</p><div class="buttons-item"><button>Edit</button><button>Done</button>`;
    noteItems.appendChild(newNote);

    
    noteText.value = "";
}

console.log(noteText.value + "here");