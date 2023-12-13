// add an element that covers the entire page
const overlayDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button");

// set the button's text
button.textContent = "click me";

// Set the style to cover the entire page
overlayDiv.style.position = "fixed";
overlayDiv.style.display = "block";
overlayDiv.style.top = "0";
overlayDiv.style.bottom = "0";
overlayDiv.style.right = "0";
overlayDiv.style.left = "0";
overlayDiv.style.width = "100%";
overlayDiv.style.height = "100%";
overlayDiv.style.overflow = "hidden";
overlayDiv.style.opacity = "1";
overlayDiv.style.margin = "0";
overlayDiv.style.padding = "0";
overlayDiv.style.border = "0";
overlayDiv.style.backgroundColor = "#FFFFFF"; // You can adjust the background color and opacity
overlayDiv.style.zIndex = "9999999999999999"; // Set a high z-index value

// Center the button at the bottom
button.style.position = "absolute";
button.style.bottom = "20px"; // Adjust the distance from the bottom
button.style.left = "50%";
button.style.transform = "translateX(-50%)";

// Add click event listener to the button
const addButton = () => {
  button.addEventListener("click", () => {
    // Remove the overlayDiv and its children
    document.body.removeChild(overlayDiv);
  });

  overlayDiv.appendChild(button);
};

// Append the div to the document body
setTimeout(addButton, 4000);
document.body.appendChild(overlayDiv);
