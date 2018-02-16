describe("#See the full note", function () {

  it("Should display full note on clicking note list", function () {
    //window.location.reload();

    document.getElementById("textarea").textContent = "This is the seoncd test!";
    document.getElementById("addNote").click();

    console.log("after add note");

    document.getElementById("number-1").click();

});
});
