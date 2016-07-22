Router = (function (router) {


  // var spanishDict = {feliz : "merry", navidad : "christmas",
  // fiestas : "holiday", feliz : "happy", nuevo : "new", año : "year",
  // y : "and", un : "a", con : "with", amor : "love", de : "from"}

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

  router.translateToSpanish = function(stringArr){
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
          console.log(spanishDict[key])
          console.log(stringArr)
        }
      }


  // console.log("spanishDict" + key + " = " + spanishDict[key]);
    }
    // console.log(router.translatedSpanish);
  }
// console.log(router)
// console.log('router.translatedSpanish', router.translatedSpanish)
return router
return userString

}(Router));












  var spanishDict = {feliz : "merry", navidad : "christmas",
  fiestas : "holiday", feliz : "happy", nuevo : "new", año : "year",
  y : "and", un : "a", con : "with", amor : "love", de : "from"}
