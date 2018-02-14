(function(exports){
  function Notepad() {
    this.notes = [];

    Notepad.prototype.listNotes = function(){
      var giada;
      this.notes.forEach(function(element) {
        giada = element.substr(0, 19);
      });
      return giada;
    };

    Notepad.prototype._addToArray = function(note){
      this.notes.push(note.text);
    };

  }
  exports.Notepad = Notepad;
})(this);
