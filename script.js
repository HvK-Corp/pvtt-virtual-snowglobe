// Function to open the classic message
function openMessage() {
  document.getElementById("gift-box").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("black-screen").style.display = "block"; // Show the black screen
  document.getElementsByClassName("background-container")[0].style.display = "none";
  playSound();
setTimeout(showMessage, 7000); // Show the message after 7 seconds
}

function showMessage() {
  document.getElementById("black-screen").style.display = "none"; // Hide the black screen
  document.getElementById("message").style.display = "block"; // Show the message
  document.getElementsByClassName("background-container")[0].style.display = "block";
  document.body.classList.add("blur"); /* Add blur effect to the body */
  document.getElementsByClassName("background-container")[0].classList.add("blur"); /* Add blur effect to the background image */
  document.getElementById("message").addEventListener("click", openSnowGlobe);
}

// Function to play background music
function playSound() {
  var soundEffect = document.getElementById("tear");
  soundEffect.play(); // Start playing the background music
}

// Function to pause background music
function pauseSound() {
  var soundEffect = document.getElementById("tear");
  soundEffect.pause(); // Pause the background music
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
    startSnowfall(); // Start the snow animation immediately after the globe stops shaking

    // Stop the snowfall animation after approximately 30 seconds
    setTimeout(stopSnowAnimation, 30000);
  }, 500);

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
