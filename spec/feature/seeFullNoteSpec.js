describe("#See the full note", function () {

  it("Should display full note on clicking note list", function () {
    //window.location.reload();

    document.getElementById("textarea").textContent = "This is the second test!";
    document.getElementById("addNote").click();

    console.log(1);
    console.log("after add note");

    document.getElementById("number-1").click();
    var content = getElementById("number-1").value
    console.log(2);
    console.log(content);
    console.log(3);
    console.log(content.textContent);
    assert.isEqual(content.textContent, "This is the second test!");

});
});

//
// describe("#Creating a note", function () {
//
//   it("Should capture text from text box on click", function () {
//     document.getElementById("textarea").textContent = "This is a test!";
//     document.getElementById("addNote").click();

//     var content = document.querySelector('li');
//
//     assert.isEqual(content.textContent,"This is a test!...");
//
//   });
// });
//
//
