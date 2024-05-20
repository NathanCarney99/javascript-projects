const newButton = document.getElementById("new-btn");
const noteBackground = document.getElementById("note-back");
const cancelButton = document.getElementById("x");
const btmContainer = document.getElementById("btm");
const submitButton = document.getElementById("submit");
let noteText = document.getElementById("note-text");
const noteItems = document.getElementById("note-items");
const body = document.getElementById("body");
const newBtnText = document.getElementById("new-btn-hover");

noteItems.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("edit-btn")) {
    let textArea = event.target.parentElement.parentElement.textContent;
    let str = textArea.substring(0, textArea.length - 8);
    console.log(str);

    newButton.onclick();
    noteText.value = str;

    // submit clicked only on editing
    submitButton.onclick = function () {
      let child = event.target.parentElement.parentElement;
      child.remove();
      let text = noteText.value;

      if (text == "") {
        cancelButton.onclick();
        return;
      }
      // close the editing container
      cancelButton.onclick();
      let newNote = document.createElement("div");
      newNote.classList.add("item");
      newNote.id = "item";
      newNote.innerHTML = `<p id="submitted-note-text">${text}</p><div class="buttons-item"><button  class="edit-btn">Edit</button><button class="delete-btn">Done</button>`;
      noteItems.appendChild(newNote);
      noteText.value = "";
    };
  }
});

noteItems.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("delete-btn")) {
    const task = event.target.parentElement.parentElement;
    task.remove();
  }
});

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

submitButton.onclick = function () {
  let text = noteText.value;

  if (text == "") {
    cancelButton.onclick();
    return;
  }
  cancelButton.onclick();
  let newNote = document.createElement("div");
  newNote.classList.add("item");
  newNote.id = "item";
  newNote.innerHTML = `<p id="submitted-note-text">${text}</p><div class="buttons-item"><button  class="edit-btn">Edit</button><button class="delete-btn">Done</button>`;
  noteItems.appendChild(newNote);
  noteText.value = "";
};
