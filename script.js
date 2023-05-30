     // Function to open the classic message
      function openMessage() {
        document.getElementById("gift-box").style.display = "none";
        document.getElementById("message").style.display = "block";
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

// Function to settle the snowflakes
function settleSnowflakes() {
  var snowflakes = document.getElementsByClassName("snow");

  for (var i = 0; i < snowflakes.length; i++) {
    var snowflake = snowflakes[i];
    snowflake.classList.add("settled"); // Add the 'settled' class to snowflakes
  }
}

// Function to animate snowflakes going up
function animateSnowflakesUp() {
  var snowflakes = document.getElementsByClassName("snow");

  for (var i = 0; i < snowflakes.length; i++) {
    var snowflake = snowflakes[i];
    snowflake.classList.remove("settled"); // Remove the 'settled' class from snowflakes
    snowflake.classList.add("active"); // Add the 'active' class to snowflakes
  }
}

// Function to settle the snowflakes back after a minute
function settleSnowflakesBack() {
  setTimeout(function () {
    settleSnowflakes();
  }, 600000); // Settle the snowflakes back after 10 minutes (600,000 milliseconds)
}

function startSnowAnimation() {
      var snowflakesContainer = document.querySelector(".snowflakes-container");

      for (var i = 0; i < 50; i++) {
        var snowflake = document.createElement("div");
        snowflake.classList.add("snow");
        snowflakesContainer.appendChild(snowflake);
      }
    }

// Function to shake the globe and trigger animations
function shakeGlobe() {
  animateSnowflakesUp(); // Animate snowflakes going up
  document.getElementById("snow-globe").classList.add("shake");
  setTimeout(function () {
    document.getElementById("snow-globe").classList.remove("shake");
    settleSnowflakes(); // Settle the snowflakes initially
    startSnowAnimation(); // Start the snow animation
    settleSnowflakesBack(); // Settle the snowflakes back after a minute
  }, 500);
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
