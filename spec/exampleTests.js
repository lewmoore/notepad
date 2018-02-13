describe("#comparing strings", function() {
  it("String should contain t", function() {
    assert.toContain("Agata", "t");
  });
});

describe("#comparing two numbers", function() {
  it("Should return true if numbers equal", function () {
    assert.isEqual(3,3);
  });

  it("Two numbers should not be equal", function () {
    assert.isNotEqual(45,25);
  });
});
