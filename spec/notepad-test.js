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
var notepad = new Notepad();
  it('Notepad starts as empty Array', function(){
    assert.isEqual(notepad.notes.length, 0);
  });

  it('Notepad stores notes in array', function(){
    var note = new Note('I hate Jasmine')
    var note2 = new Note('Jasmine')
    notepad._addToArray(note)
    assert.arrayContain(notepad.notes, 'I hate Jasmine')
  });
});
