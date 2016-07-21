document.getElementById("translateButton").addEventListener("click", determineLanguage)
// document.addEventListener("keydown", enter);

// function enter(e) {
// if (e.keyCode == 13) {
//  determineLanguage()
//   }
// }


function determineLanguage () {
  var spanish = document.getElementById("spanishRadio");
  var french = document.getElementById("frenchRadio");

  if (spanish.checked) {
  console.log("Spanish is checked")
  Router.translateToSpanish()
  // console.log(userString)
  console.log("Spanish function is done")
  }
}


  //   if (french.checked) {
  //   console.log("French is checked")
  //   router.translateToFrench(router)
  // // }

//   return {
//     getString(){
//       console.log("getString RUNNING")
//       userString = userString.value.split(" ")
//       return userString
//     }

//   }

// ();

