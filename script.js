//your JS code here. If required.
window.onload = function() {
  const targetElement = document.getElementById('level');
  let domLevel = 0;
  
  let currentElement = targetElement;
  while (currentElement !== document.documentElement) {
    currentElement = currentElement.parentElement;
    domLevel++;
  }

  console.log(`The level of the element is: ${domLevel}`);
};
