describe("comparing strings", function() {
  assert.toContain("Agata", "t");
});

describe("comparing two numbers", function() {
  assert.isEqual(3,3);
});

describe("comparing if two numbers are different", function() {
  assert.isNotEqual(45,20);
});
