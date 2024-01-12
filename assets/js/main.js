
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Asynchronous function to click all elements with the class "dw"
async function dwAll() {
  // Get all elements with the class "dw"
  const elements = document.getElementsByClassName("dw");

  // Loop through each element
  for (let element of elements) {
    // Pause for 100 milliseconds before clicking the next element
    await pause(100);

    // Simulate a click on the current element
    element.click();
  }
}

// Helper function to pause execution for a specified number of milliseconds
function pause(msec) {
  return new Promise(
      (resolve, reject) => {
        setTimeout(resolve, msec || 100);
      }
  );
}
