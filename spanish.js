var Router = (function () {


  // var spanishDict = {feliz : "merry", navidad : "christmas",
  // fiestas : "holiday", feliz : "happy", nuevo : "new", año : "year",
  // y : "and", un : "a", con : "with", amor : "love", de : "from"}


  // var translatedSpanish = []
  // var stringArr = userString
  // [HIDDEN PART OF FUNCTION]



  return {
    translateToSpanish: function(userString){

    var userString = document.getElementById("userString").value.split(" ");

    console.log("YO translateToSpanish is running!");

    // var stringArr = Router.getString();
    // console.log(userString);
    // for (var i = 0; i < userString.length; i++) {
    //   console.log('inside the for loop');

      // THIS IS WHERE YOU COMPARE YOUR DICTIONARY AGAINST THE
      // USER INPUT


    }
    // console.log(router.translatedSpanish);
    return userString.join(" ")
  }
}
// console.log('router.translatedSpanish', router.translatedSpanish)

// return userString

// return {
//   Router.getSpanishDictionary {
//     return spanishDict()
//   }
// }

})