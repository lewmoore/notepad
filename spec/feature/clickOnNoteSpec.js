describe("Click on note list", function () {
  it("Should be able to click on the list and view full note", function () {
    document.getElementById("textarea").textContent = "This is a test to ensure the object is clicked on!";
    document.getElementById("addNote").click();

    document.getElementById("number-1").click();

    var content = document.getElementById('note_link').innerHTML;
    console.log("hello");
    console.log(content);

    assert.isEqual(content, "This is a test to ensure the object is clicked on!");

  });
});
