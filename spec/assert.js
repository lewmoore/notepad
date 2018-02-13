var assert = {
  isTrue: function(assertionToCheck, message) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + "." + message + " is not truthy");
    } else {
      console.log("all good with " + message);
    }
  }
};
