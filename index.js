// Select all elements with the 'animate-on-scroll' class
const elements = document.querySelectorAll(".small");
// alert("yo");

// Define the options for the observer
const options = {
  threshold: 0.2, // Trigger when 10% of the element is visible
};

// Create the observer with a callback function
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Add the 'visible' class
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, options);

// Observe each element
elements.forEach((element) => {
  observer.observe(element);
});
