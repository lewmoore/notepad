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
