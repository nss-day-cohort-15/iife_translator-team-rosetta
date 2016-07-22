var Router = (function () {
  document.getElementById("translateButton").addEventListener("click", determineLanguage)
  document.addEventListener("keydown", enter);

  function enter(e) {
    if (e.keyCode == 13) {
       determineLanguage()
    }
  }


  function determineLanguage () {
    var userString = document.getElementById("userString").value.split(" ")
    var spanish = document.getElementById("spanishRadio");
    var french = document.getElementById("frenchRadio");

      if (spanish.checked) {
        console.log("Spanish is checked")
        Router.translateToSpanish(userString)
        // console.log(userString)
        console.log("Spanish function is done")
      } else if (french.checked) {
      console.log("French is checked")
      Router.translateToFrench(userString)
    }
  }


  return {
    getString(){
      console.log("getString RUNNING")
      userString = userString.value.split(" ")
      return userString
    }



  }

}());

