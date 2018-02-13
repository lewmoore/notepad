function listingNotes() {
  var notepad = new Notepad()

  assert.isTrue(notepad.notes.length == 0, 'Notepad is an empty array');
}

listingNotes();

function addingNotes() {
  var note = new Note('I love JS')
  var note2 = new Note('I hate JS')
  var notepad = new Notepad()
  notepad._addToArray(note)
  notepad._addToArray(note2)

  assert.isTrue(notepad.notes.length = 2, "Adds multiple notes to notepad array");
}

addingNotes();
