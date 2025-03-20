// Remove the main element from the DOM
const main = document.getElementById("main");
main.remove();

// Create a new h1 element
const newHeader = document.createElement("h1");

// Set the id of the new h1 element to "victory"
newHeader.id = "victory";

// Set the text content of the new h1 element
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new h1 element to the body
document.body.append(newHeader);