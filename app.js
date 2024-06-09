
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.display = "block";
  document.querySelector("#loader").style.display = "none";
})

let sponsorBoss = {
  'max': false,
  'philipp': false,
  'constantin': false,
  'aaron': false,
  'lennard': false,
}


const sponsoren = document.querySelectorAll(".sponsor");

for (let sponsor of sponsoren) {
  let img = sponsor.getElementsByTagName("img")[0]
  img.addEventListener('click', function () {
    let sponsorName = sponsor.classList[1];
    if (sponsorBoss[sponsorName]) {
      img.src = `img/${sponsorName}.png`;
    } else {
      img.src = `img/${sponsorName}_boss.jpg`;
    }
    sponsorBoss[sponsorName] = !sponsorBoss[sponsorName];
  })
}

/* function glowLoop() {
  setTimeout(() => {
    sponsoren[0].classList.toggle("glow");
    sponsoren[1].classList.toggle("glow");
    glowLoop();
  }, 2000)
}

glowLoop(); */

// Dropdown Stuff //

const ddHeaders = document.querySelectorAll('.ddHeader');
const ddContents = document.querySelectorAll('.ddContent');
const arrows = document.querySelectorAll('.arrow');

let globalDropdown = false;
let globalDropdownIndex = 0;

function scrollInView(element, center, obj) {
  if (typeof element.scrollIntoViewIfNeeded === 'function') {
    element.scrollIntoViewIfNeeded(center); // try to use this function if possible because of nicer user experience
  } else {
    element.scrollIntoView(obj); // only for Firefox
  }
}

const toggleDropdown = (index) => {
  arrows[index].classList.toggle('up');
  ddContents[index].classList.toggle('show');
  globalDropdown = !globalDropdown;
  globalDropdownIndex = index;
  if (!(ddContents[index].parentNode.classList.contains('noscroll'))) {
    if (globalDropdown && window.innerWidth < 1000) {
      scrollInView(ddContents[index], false, { behaviour: 'smooth', block: 'start' })
    } else if (globalDropdown) {
      scrollInView(ddContents[index], false, { behaviour: 'smooth', block: 'center' })
    }
  }
}

for (let i = 0; i < ddHeaders.length; i++) {
  ddHeaders[i].addEventListener('click', (e) => {
    e.stopPropagation();
    if (globalDropdown && globalDropdownIndex != i) {
      toggleDropdown(globalDropdownIndex);
    }
    toggleDropdown(i);
  });
  ddContents[i].addEventListener('click', (e) => e.stopPropagation());
}


window.addEventListener('click', () => { if (globalDropdown) { toggleDropdown(globalDropdownIndex) } });