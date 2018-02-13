
describe('Viewing a note', function(){
  it('user can view a note', function(){
    var note = new Note('I love puppies');
    assert.isEqual(note.viewNote(), 'I love puppies');
  });
});
