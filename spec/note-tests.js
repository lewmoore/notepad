function creatingNewNote() {
  var note = new Note("I love puppies");

  assert.isTrue(note.viewNote("I love puppies"), "It should view a new note");
}

creatingNewNote();


// function listingNotes() {
//   var note = new Note('This is a note')
//   var note2 = new Note('This is also a note')
//   note._addToArray(note)
//   note._addToArray(note2)
//
//   assert.isTrue(note.listNotes('This is a note', 'This is also a note'), 'It should view a list of notes')
// }
//
// listingNotes();
