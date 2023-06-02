var specific_date = new Date('2023-06-02');
var current_date = new Date();
if (current_date.getTime() < specific_date.getTime()) {
  document.getElementById("dont-u").style.display = "block";
  document.getElementById("gift-box").style.filter = "blur(5px)";
  document.getElementsByClassName("background-container")[0].style.display = "block";
  document.body.classList.add("blur"); /* Add blur effect to the body */
  document.getElementsByClassName("background-container")[0].classList.add("blur"); /* Add blur effect to the background image */
} else {
  document.getElementById("dont-u").style.display = "none";
  document.getElementById("gift-box").style.display = "block";
  document.getElementsByClassName("background-container")[0].style.display = "block";

// Function to open the classic message
function openMessage() {
  document.getElementById("gift-box").style.display = "none";
  document.getElementById("message").style.display = "none"; // Hide the message initially
  document.getElementById("black-screen").style.display = "block";
  playSound(); // Play the box opening sound effect
  setTimeout(showMessage, 9000); // Show the message after 7 seconds
}

// Function to play background music
function playSound() {
  var Sound = document.getElementById("tear");
  Sound.play(); // Start playing the background music
}

// Function to pause background music
function pauseBackgroundMusic() {
  var Sound = document.getElementById("tear");
  Sound.pause(); // Pause the background music
}

// Function to show the message
function showMessage() {
  document.getElementById("message").style.display = "block"; // Show the message
  document.getElementById("black-screen").style.display = "none";
   document.getElementsByClassName("background-container")[0].style.display = "block";
  document.body.classList.add("blur"); /* Add blur effect to the body */
  document.getElementsByClassName("background-container")[0].classList.add("blur"); /* Add blur effect to the background image */
  document.getElementById("message").addEventListener("click", openSnowGlobe);
}

// Function to open the snow globe
function openSnowGlobe() {
  document.getElementById("message").style.display = "none";
  document.getElementById("snow-globe").style.display = "block";
  document.getElementsByClassName("background-container")[0].style.display = "block";
  document.body.classList.add("blur"); /* Add blur effect to the body */
  document.getElementsByClassName("background-container")[0].classList.add("blur"); /* Add blur effect to the background image */
  playBackgroundMusic(); // Start playing the background music
}

// Function to play background music
function playBackgroundMusic() {
  var bgMusic = document.getElementById("bg-music");
  bgMusic.play(); // Start playing the background music
}

// Function to pause background music
function pauseBackgroundMusic() {
  var bgMusic = document.getElementById("bg-music");
  bgMusic.pause(); // Pause the background music
}

  if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
  // This code will execute on mobile devices

  // Add the device motion event listener
  window.addEventListener("devicemotion", function(event) {
    var acceleration = event.accelerationIncludingGravity;

    // Calculate the overall acceleration
    var overallAcceleration = Math.sqrt(
      Math.pow(acceleration.x, 2) +
      Math.pow(acceleration.y, 2) +
      Math.pow(acceleration.z, 2)
    );

    // Set a threshold value for the acceleration that determines the shake intensity
    var shakeThreshold = 15; // Adjust this value as needed

    // Check if the device is shaken
    if (overallAcceleration > shakeThreshold) {
      shakeGlobe();
    }
  });
} else {
  // This code will execute on PCs

  // Add an event listener to the shake button
  document.getElementById("snow-globe").addEventListener("click", function() {
    shakeGlobe();
  });
}

// Function to shake the globe and trigger animations
function shakeGlobe() {
  document.getElementById("snow-globe").classList.add("shake");
  setTimeout(function () {
    document.getElementById("snow-globe").classList.remove("shake");
    playEffect();
    startSnowfall(); // Start the snow animation immediately after the globe stops shaking

    // Stop the snowfall animation after approximately 30 seconds
    setTimeout(stopSnowAnimation, 30000);
  }, 500);
// Function to play background music
function playEffect() {
  var effect = document.getElementById("globe");
  effect.play(); // Start playing the background music
}

// Function to pause background music
function pauseEffect() {
  var effect = document.getElementById("globe");
  effect.pause(); // Pause the background music
}
  
// Function to start the snow animation

function startSnowfall() {
  var snowflakesContainer = document.getElementById("snowflakes-container");
  snowflakesContainer.innerHTML = ""; // Clear previous snowfalls if any
  
  for (var i = 0; i < 50; i++) {
    var snowflake = document.createElement("div");
    snowflake.classList.add("snowfall");
    snowflakesContainer.appendChild(snowflake);
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDelay = Math.random() * 6 + "s";
    snowflakesContainer.appendChild(snowfall);
  }
}

// Function to stop the snowfall animation
function stopSnowAnimation() {
  var snowfallElements = document.querySelectorAll(".snowfall");

  for (var i = 0; i < snowfallElements.length; i++) {
    var snowfall = snowfallElements[i];
    snowfall.style.animation = "none";
  }
}
}
}
