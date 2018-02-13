//
// function addingNotes() {
//   var note = new Note('I love JS')
//   var note2 = new Note('I hate JS')
//   var notepad = new Notepad()
//   notepad._addToArray(note)
//   notepad._addToArray(note2)
//
//   assert.isTrue(notepad.notes.length = 2, "Adds multiple notes to notepad array");
// }
//
// addingNotes();

describe('Notepad', function(){

  it('Notepad starts as empty Array', function(){
    var notepad = new Notepad();
    assert.isEqual(notepad.notes.length, 0);
  });

  it('Notepad stores notes in array', function(){
    var notepad = new Notepad();
    var note = new Note('I hate Jasmine')
    notepad._addToArray(note)
    assert.isEqual(notepad.notes.length, 1)
  });
});
