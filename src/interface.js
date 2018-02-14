document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();

  document.querySelector('button').addEventListener("click", function () {
    var text = document.querySelector("textarea").value;
    notepad._addToArray(new Note(text));

    console.log(notepad.notes);
    document.querySelector("textarea").value = "";

  });


});
