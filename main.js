// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//get all heart glyphs in a node list
const hearts = document.querySelectorAll("span.like-glyph");

hearts.forEach((heart) => {
	heart.addEventListener("click", function() {
		mimicServerCall()
		.then((res) => {
			//if the server response is successful,
			//check if the heart is empty
			if (heart.textContent === EMPTY_HEART){
				//set the heart textContent to a full heart
				heart.textContent = FULL_HEART;
				//add activated heart class to the heart
				heart.classList.add("activated-heart")
			}
			//check is the heart is already full
			else if (heart.textContent === FULL_HEART) {
				//set the heart textContent to an empty heart
				heart.textContent = EMPTY_HEART;
				//remove the activated heart from the class list
				heart.classList.remove("activated-heart")
			}

		})
		.catch((error) => {
			//if there's a server error, remove the hidden class from error modal
			const errorModal = document.getElementById("modal");
			errorModal.classList.remove("hidden")

			//after 3 seconds, add the hidden class back to error modal
			setTimeout(function(){
				errorModal.classList.add("hidden")
			}, 3000)
		})
	});
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
