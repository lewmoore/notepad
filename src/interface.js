document.addEventListener("DOMContentLoaded", function(event) {
  var notepad = new Notepad();

  document.querySelector('button').addEventListener("click", function () {
    var text = document.querySelector("textarea").value;
    notepad._addToArray(new Note(text));

    console.log(notepad.notes);
    document.querySelector("textarea").value = "";


    var li = document.createElement("li");
    var link = <a href='#notepad.notes.length'>notepad.listNotes() + "..."</a>
    li.appendChild(document.createTextNode(link));
    li.setAttribute('id', 'number-' + notepad.notes.length);
    document.querySelector("ul").appendChild(li);
    console.log(li.id)

    // parentNode.insertBefore(newChild, refChild)
  });


});
