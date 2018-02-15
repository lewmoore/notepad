
  describe("#Creating a note", function () {

    it("Should capture text from text box on click", function () {
      console.log("textarea");

      document.getElementById("textarea").textContent = "This is a test!";
      document.getElementById("addNote").click();
      console.log("after click");


    });
  });
