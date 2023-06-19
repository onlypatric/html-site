// Check if an element is within the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();

    // Check if all sides of the element are within the viewport boundaries
    return (
        rect.top >= 0 &&
        rect.left >= 0 ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Handle scroll event
function handleScroll() {
    // Get all elements with the 'inview-action' class
    let elements = document.getElementsByClassName('inview-action');

    // Iterate through each element
    Array.from(elements).forEach(element => {
        if (isElementInViewport(element)) {
            // Check if the element is currently hidden (opacity = 0)
            if ($(element).css("opacity") == 0) {
                // Make the element visible by setting opacity to 1
                $(element).css("opacity", 1);
                let divs ={
                    about: (element) => { console.log("about"); element.classList.add("animated-transition-left-to-right") },
                    work1: (element) => { console.log("about"); element.classList.add("animated-transition-left-to-right") },
                    work2: (element) => {console.log("about");element.classList.add("animated-transition-left-to-right") },
                    experience: (element) => { console.log("experience");element.classList.add("animated-transition-right-to-left") }
                };
                divs[element.id](element);
            }
        }
    });
}

// Register the 'handleScroll' function to be called on scroll event
window.addEventListener('scroll', handleScroll);
