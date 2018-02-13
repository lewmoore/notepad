(function(exports){
  function Notepad() {
    this.notes = []

    Notepad.prototype.listNotes = function(){
      this.notes.forEach(function(element) {
        console.log(element);
      });
    }

    Notepad.prototype._addToArray = function(note){
      this.notes.push(note.text)
    }
  }
  exports.Notepad = Notepad
})(this)
