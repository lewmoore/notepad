function creatingNewNote() {
  var note = new Note("I love puppies");

  assert.isTrue(note.viewNote("I love puppies"), "It should view a new note");
}

creatingNewNote();
