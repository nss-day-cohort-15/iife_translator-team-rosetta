Router = (function (router) {


  var spanishDict = {
    merry: "feliz",
    christmas: "navidad",
    holiday: "fiesta",
    happy: "feliz",
    new: "nuevo",
    year: "año",
    and: "y",
    a: "un",
    with: "con",
    love: "amor",
    from: "de"
  }

  // console.log(spanishDict)
  // var translatedSpanish = []
  // var stringArr = userString [HIDDEN PART OF FUNCTION]

  router.translateToSpanish = function(){
    console.log("YO translateToSpanish is running!");

    var stringArr = Router.getString();
    // console.log(stringArr);
    for (var i = 0; i < stringArr.length; i++) {
      console.log('inside the for loop');
      var currentWord = stringArr[i]

      for (var key in spanishDict) {
        if (key === currentWord) {
          console.log("INSIDE THE FOR IN LOOP!")
          stringArr[i] = spanishDict[key]
          // console.log(spanishDict[key])
          console.log(stringArr)
        }

        translatedSpanishString = stringArr.join(" ")
        console.log(translatedSpanishString)
      }

      document.getElementById("spanishResultsDiv").innerHTML = translatedSpanishString
      // translatedSpanishString = stringArr.join(" ")
      // console.log(translatedSpanishString)
      // return translatedSpanish

  // console.log("spanishDict" + key + " = " + spanishDict[key]);
    }
    // console.log(router.translatedSpanish);
  }
// console.log(router)
// console.log('router.translatedSpanish', router.translatedSpanish)
return router
// return userString

}(Router));

/// The reason that the the bug exists where it can only run once is that each translator
/// prints directly from the module instead of sending back a string to get compiled.
