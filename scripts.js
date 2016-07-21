var Router = (function () {
  document.getElementById("translateButton").addEventListener("click", determineLanguage)
  document.addEventListener("keydown", enter);

  function determineLanguage () {
    var userString = document.getElementById("userString").value.split(" ");
    var spanish = document.getElementById("spanishRadio");
    var french = document.getElementById("frenchRadio");

    if (spanish.checked) {
      console.log("Spanish is checked")
      console.log(Router.translateToSpanish(userString))
    }
  }

  function enter(e) {
    if (e.keyCode == 13) {
       determineLanguage()
    }
  }



  //   if (french.checked) {
  //   console.log("French is checked")
  //   router.translateToFrench(router)
  // }

  return {}

}());

