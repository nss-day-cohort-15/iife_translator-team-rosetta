(function determineLanguage () {
  document.getElementById("translateButton").addEventListener("click", determineLanguage)
  var userString = document.getElementById("userString").value.split(" ");
  var spanish = document.getElementById("spanishRadio");
  var french = document.getElementById("frenchRadio");

  console.log(userString)

  if (spanish.checked) {
    console.log("Spanish is checked")
    translateToSpanish(userString)
    return userString
  }

    if (french.checked) {
    console.log("French is checked")
    translateToFrench(userString)
    return userString
  }

}());

// userString.toArray()

// determineLanguage FUNCTION (
// var translateString = document.getElementById("userString").value
//
//if spanishRadio.checked {
//      spansishTranslator (string);
//      return string
// }
//
// if frenchRadio.checked {
//      frenchTranslator (string);
//      return string
// }

// (function() {
// }());