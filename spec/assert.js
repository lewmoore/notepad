var assert =  {
  isEqual: function(actual, expected) {
  if(actual !== expected) {
    //Run if failed
    throw {type: "Fail", details: {actual: actual, expected: expected}};
  } else {
    //Run if successful
    console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
  }
}
}


var assert = {
isNotEqual: function(actual, expected) {
  if(actual === expected) {
    throw {type: "Fail", details: {actual: actual, expected: expected}};
  } else {
    console.log("Success", {type: "Test passed", details: {actual: actual, expected:expected}});
  }
}
}
