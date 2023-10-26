// Example JavaScript for interactivity (e.g., handling click events)

// Get all "Read More" links
const readMoreLinks = document.querySelectorAll(".read-more");

// Add a click event listener to each "Read More" link
readMoreLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("You clicked 'Read More'!");
    });
});
