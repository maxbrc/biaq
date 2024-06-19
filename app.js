document.addEventListener('DOMContentLoaded', function () {
  document.body.style.display = "block";
  document.querySelector("#loader").style.display = "none";
})

const ddTriggers = document.querySelectorAll('.ddTrigger');
const ddContents = document.querySelectorAll('.ddContent');
let ddIndex = null;

for (let i = 0; i < ddTriggers.length; i++) {
  ddTriggers[i].addEventListener('click', function (event) {
    event.stopPropagation();
    toggleDropdown(i);
  })
}

const toggleDropdown = (index) => {
  // OPENING OF DROPDOWN
  // Case 1: No dropdown is open.
  // Toggle the clicked dropdown and mark it as such globally (ddIndex variable)
  if (ddIndex === null) {
    triggerDropdown(index);
    ddIndex = index;
  }
  // SAME SECONDARY DROPDOWN CLOSING
  // Case 2: The clicked dropdown is the one that's already open. The main one is excluded so it must be a secondary one.
  // The secondary dropdown gets closed.
  // Logical conclusion: main dropdown is still open (hence ddIndex = 0).
    else if (ddIndex === index && ddIndex) {
    triggerDropdown(index);
    ddIndex = 0;
  }
  // MAIN CLOSING OR OTHER SECONDARY OPENING
  // Case 3  
  // [1] other secondary dropdown than the one that's currently open is opened.
  // [2] main dropdown is closed
  else {
    // Toggle the desired dropdown
    triggerDropdown(index);
    // Case 3.2 (closing unwanted secondary dropdowns):
    // The previously opened dropdown is closed, except main, because if main is opened and immidiately closed it triggers twice (because ddIndex stood at 0)
    if (ddIndex) triggerDropdown(ddIndex);
    // Case 3.1 (closing main):
    // If main is closed then nothing is opened globally. Case 3.2 gets used to close remaining opened secondary dropdowns.
    if (index === 0) ddIndex = null;
    // If a secondary dropdown is opened mark it as such globally (ddIndex variable)
    else ddIndex = index;
  }
}

const triggerDropdown = (index) => {
  // If window EventListener (bottom) is triggered then index will be undefined
  if (typeof(index) === 'number') {
    ddContents[index].classList.toggle('show');
    ddTriggers[index].classList.toggle('signal');
  }
}

window.addEventListener('click', function () {
  // Closes dropdowns one by one (secondary, then main), if all should be closed instantly (which is just main closing), then toggleDropdown(0) should be used.
  // The full function must be used (instead of triggerDropdown). Otherwise it looses track.
  // NOTE TO FUTURE ME: There is a fixed number of dropdowns in the nav. This way you can close all immidiately if ddIndex number is higher than ....
  // Problem is that if the nav is opened and then a sponsor card is dropped down it will work, but closing it will cause it to go one by one whereas when you do toggleDropdown(0) when ddIndex is above ... then all will be immidiately closed.
  // If nav is not opened this should no be a problem either because were just using the first two cases and never entering case 3 which needs this ddIndex > ... conditional
  toggleDropdown(ddIndex);
})