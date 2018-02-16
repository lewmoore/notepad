  var notepad = new Notepad();


  document.getElementById('addNote').addEventListener("click", function () {
    console.log('setting on click');

    var text = document.querySelector("textarea").value;
    notepad._addToArray(new Note(text));

    console.log(notepad.notes);
    document.querySelector("textarea").value = "";


    var li = document.createElement("li");
    li.appendChild(document.createTextNode(notepad.listNotes() + "..."));
    document.querySelector("ul").appendChild(li);
  });
