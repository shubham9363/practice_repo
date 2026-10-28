
// Get elements from the page
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

let count = 0;

// Runs every time the button is clicked
btn.addEventListener("click", () => {
  count++;
  msg.textContent = "Button clicked " + count + " times";
});
