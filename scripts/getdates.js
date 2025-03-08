// Get current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date of the document
document.querySelector("footer p:last-of-type").textContent = "Last Modification: " + document.lastModified;
