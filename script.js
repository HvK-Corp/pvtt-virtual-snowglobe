    // Function to open the classic message
function openMessage() {
  document.getElementById("gift-box").style.display = "none";
  document.getElementById("message").style.display = "block";
  document.getElementById("message").addEventListener("click", openSnowGlobe);
  document.getElementsByClassName("background-container")[0].style.display = "none";
}

// Function to open the snow globe
function openSnowGlobe() {
  document.getElementById("message").style.display = "none";
  document.getElementById("snow-globe").style.display = "block";
  document.getElementsByClassName("background-container")[0].style.display = "block";
  document.body.classList.add("blur"); /* Add blur effect to the body */
  document.getElementsByClassName("background-container")[0].classList.add("blur"); /* Add blur effect to the background image */
}

// Function to start the snow animation
function startSnowfall() {
  var snowflakesContainer = document.querySelector(".snowflakes-container");

  for (var i = 0; i < 50; i++) {
    var snowflake = document.createElement("div");
    snowflake.classList.add("snow");
    snowflakesContainer.appendChild(snowflake);
  }
}

// Function to shake the globe and trigger animations
function shakeGlobe() {
  document.getElementById("snow-globe").classList.add("shake");
  setTimeout(function () {
    document.getElementById("snow-globe").classList.remove("shake");
    startSnowAnimation(); // Start the snow animation immediately after the globe stops shaking
  }, 500);

  var snowfallContainer = document.querySelector(".snowfall-container");
  snowfallContainer.innerHTML = ""; // Clear previous snowballs if any

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
