Router = (function (router) {

  var frenchDict = {
    merry: "joyeux",
    christmas: "Noël",
    holiday: "vacances",
    happy: "content",
    new: "nouveau",
    year: "an",
    and: "et",
    a: "une",
    with: "avec",
    love: "amour",
    from: "de"
  }

  // console.log(spanishDict)
  // var translatedSpanish = []
  // var stringArr = userString [HIDDEN PART OF FUNCTION]

  router.translateToFrench = function(){
    console.log("Yo! translateToFrench is running!");

    var stringArr = Router.getString();
    // console.log(stringArr);
    for (var i = 0; i < stringArr.length; i++) {
      console.log('inside the for loop');
      var currentWord = stringArr[i]



      for (var key in frenchDict) {
        if (key === currentWord) {
          console.log("INSIDE THE FOR IN LOOP!")
          stringArr[i] = frenchDict[key]
          // console.log(spanishDict[key])
          console.log(stringArr)
        }

        translatedFrenchString = stringArr.join(" ")
        // console.log(translatedFrenchString)
      }

      document.getElementById("frenchResultsDiv").innerHTML = translatedFrenchString
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
return userString

}(Router));
