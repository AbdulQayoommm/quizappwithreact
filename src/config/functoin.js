import {firebaseapp,providerapp} from "./firebase"
import { resolveSoa } from "dns";
console.log(firebaseapp,providerapp)
function AllQuestion(){
return new Promise ( function(resolve, reject){
  fetch('https://opentdb.com/api.php?amount=10')
    .then(response => (response.json()))
    .then(res => resolve(res.results))
    .catch(err =>reject(err))
})
}

function loginfacebook(){
return new Promise(function(resolve,reject){
firebaseapp.auth().signInWithPopup(providerapp)
.then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
  resolve(user)
}).catch(function(error) {
  var credential = error.credential;
  reject(credential)
});
})
}





// var seconds = 600
let Timer = (seconds)=> {
return new Promise((resolve ,reject) =>{   
  var minutes = Math.round((seconds-30)/60),
        remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    resolve(minutes + ":" + remainingSeconds)
    if (seconds == 0) {
      reject("0:00")
    } else {
      seconds--;
    }
  })
}



let Logout = ()=> {
  firebaseapp.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

export {AllQuestion ,loginfacebook,Timer, Logout}