  var notepad = new Notepad();

  document.getElementById('addNote').addEventListener("click", function () {

    var text = document.querySelector("textarea").value;
    notepad._addToArray(new Note(text));

    document.querySelector("textarea").value = "";


    var li = document.createElement("li");
    var a = document.createElement("a");

    a.textContent = notepad.listNotes() + "...";
    a.setAttribute('id', 'number-' + notepad.notes.length);
    a.setAttribute('href', "#" + text);
    li.appendChild(a);
    document.querySelector("ul").appendChild(li);


  makeUrlChanesShowNoteForCurrentPage();

  function makeUrlChanesShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  }

  function showNote(note) {
    document.getElementById("note_link").innerHTML = note;
  }

});
