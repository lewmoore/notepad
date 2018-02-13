(function(exports){
  function Notepad() {
    this.notes = []

    Notepad.prototype.listNotes = function(){
      this.notes.forEach(function(element) {
        return element;
      });
    }

    Notepad.prototype._addToArray = function(note){
      this.notes.push(note)
    }
  }
  exports.Notepad = Notepad
})(this)
