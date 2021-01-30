//const { beforeEach } = require("mocha")

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
let heartsClass = document.querySelectorAll('.like')

function likes(e){
  let hearts = e.target
    mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage)
    if(hearts.innerHTML == EMPTY_HEART){
      hearts.innerHTML = FULL_HEART
      hearts.setAttribute('class','activated-heart')
    }
    else{
      hearts.innerHTML = EMPTY_HEART
      hearts.setAttribute('class','like-glyph')
    }
    })
    .catch(function(error){
      modal.setAttribute('class','')
      alert("Something went wrong")
      setTimeout(function(){
      modal.setAttribute('class','hidden')
      },5000)
    })
 
}
for(let i = 0;i < heartsClass.length; i++){
 heartsClass[i].addEventListener('click', likes)

}
  




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
