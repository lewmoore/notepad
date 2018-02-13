var assert =  {

    isEqual: function(actual, expected) {
    if(actual !== expected) {
      throw {type: "Fail", details: {actual: actual, expected: expected}};
    } else {
      console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
    }
  },

    isNotEqual: function (actual, expected) {
      if(actual === expected) {
        throw {type: "Fail", details: {actual: actual, expected: expected}};
      } else {
        console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
      }
    },

    toContain: function (actual, expected) {
      if (actual.includes(expected.toLowerCase())) {
        console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
      } else {
        throw {type: "Fail", details: {actual: actual, expected: expected}};
      }
    }
};


var describe = function(message, testFunc) {
  try {
    testFunc();
  } catch(err) {
    console.error("Failure", err);
  }
};
