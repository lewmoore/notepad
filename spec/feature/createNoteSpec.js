
  describe("#Creating a note", function () {

    it("Should capture text from text box on click", function () {
      document.getElementById("textarea").textContent = "This is a test!";
      document.getElementById("addNote").click();
      var content = document.querySelector('li');

      assert.isEqual(content.textContent,"This is a test!...");

    });
  });

  describe("#See the full note", function () {

    it("Should display full note on clicking note list", function () {
      //window.location.reload();

      document.getElementById("textarea").textContent = "This is the seoncd test!";
      document.getElementById("addNote").click();

      console.log("after add note");


  });
});
