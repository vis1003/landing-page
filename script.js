const text = "olours and Hues";
let delay = 100; // typing speed 
const pauseDuration = 2000; // 2-second pause duration
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, delay);
  } else {
    setTimeout(clearText, pauseDuration);
  }
}

function clearText() {
  document.getElementById("typewriter").textContent = "";
  index = 0;
  setTimeout(typeWriter, delay);
}

// Adjust the font size on window resize
function adjustFontSize() {
    const windowWidth = window.innerWidth;
    const fontSize = Math.max(40, windowWidth * 0.08); // scaling factor
    document.getElementById("typewriter").style.fontSize = fontSize + "px";
  }
  
  

// Call the adjustFontSize function initially and on window resize
adjustFontSize();
window.addEventListener("resize", adjustFontSize);

typeWriter();
