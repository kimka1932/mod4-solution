// STEP 1: Wrap the entire contents inside of an IIFE
(function() {
  // Define the names array
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // STEP 11: Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Compare the 'firstLetter' to 'j' and call the appropriate method
    if (firstLetter === 'j') {
      // Call byeSpeaker's 'speak' method
      byeSpeaker.speak(names[i]);
    } else {
      // Call helloSpeaker's 'speak' method
      helloSpeaker.speak(names[i]);
    }
  }
})();

