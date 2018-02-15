document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();

  document.querySelector('button').addEventListener("click", function () {
    var text = document.querySelector("textarea").value;
    notepad._addToArray(new Note(text));

    console.log(notepad.notes);
    document.querySelector("textarea").value = "";


    var li = document.createElement("li");
    var a = document.createElement("a");
    // li.appendChild(document.createTextNode(notepad.listNotes() + "..."));
    a.textContent = notepad.listNotes() + "...";
    li.setAttribute('id', 'number-' + notepad.notes.length);
    a.setAttribute('href', "#" + text);
    li.appendChild(a);
    document.querySelector("ul").appendChild(li);
    console.log(li.id);

    // parentNode.insertBefore(newChild, refChild)
  });

  makeUrlChanesShowNoteForCurrentPage();

  function makeUrlChanesShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location) {
    console.log("getNoteFromUrl");
    console.log(location.hash.split("#")[1]);
    return location.hash.split("#")[1];
  }


  function showNote(note) {
    document.getElementById("note_link").innerHTML = note;
  }

});
