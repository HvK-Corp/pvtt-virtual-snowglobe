 var currentDate = new Date();
  var targetDate = new Date("July 14, 2023");

  if (currentDate < targetDate) {
   document.getElementsByClassName("not-now")[0].style.display = "block";
    document.getElementById("gift-box").style.display = "none";
   document.getElementsByClassName("background-container")[0].style.display = "block";
    document.body.classList.add("blur"); /* Add blur effect to the body */
    document.getElementsByClassName("background-container")[0].classList.add("blur"); /* Add blur effect to the background image */
  } else {
   document.getElementById("gift-box").style.display = "block";
   document.getElementsByClassName("not-now")[0].style.display = "none";
    document.getElementsByClassName("background-container")[0].style.display = "block";
  }

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
  startSnowfall(); // Start the snowfall animation
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
// Function to start the snow animation
function startSnowfall() {
  var snowflakesContainer = document.getElementById("snowflakes-container");

  for (var i = 0; i < 50; i++) {
    var snowflake = document.createElement("div");
    snowflake.classList.add("snowfall");
    snowflakesContainer.appendChild(snowflake);
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
  var snowfallContainer = document.querySelector(".snowfall-container");
  snowfallContainer.innerHTML = ""; // Clear previous snowfalls if any

  for (var i = 1; i <= 20; i++) {
    var snowfall = document.createElement("div");
    snowfall.classList.add("snowfall");
    snowfall.style.left = Math.random() * 100 + "%";
    snowfall.style.animationDelay = Math.random() * 6 + "s";
    snowfallContainer.appendChild(snowfall);
  }
}

// Check if the device is mobile and show/hide elements accordingly
if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
  document.getElementById("gift-box").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("snow-globe").style.display = "none";
  document.getElementById("warning-message").style.display = "block";
} else {
  document.getElementById("gift-box").style.display = "block";
  document.getElementById("message").style.display = "none";
  document.getElementById("snow-globe").style.display = "none";
}
