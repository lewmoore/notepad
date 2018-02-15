(function(exports){
  function Notepad() {
    this.notes = [];

    Notepad.prototype.listNotes = function(){
     var input;
     this.notes.forEach(function(element) { input = element.substr(0, 20);
       console.log(input);
       return input;
     });
     return input;
   };

    Notepad.prototype._addToArray = function(note){
      this.notes.push(note.text);
    };

  }
  exports.Notepad = Notepad;
})(this);
