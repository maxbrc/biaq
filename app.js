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
      img.src = `img/${sponsorName}.jpg`;
    } else {
      img.src = `img/${sponsorName}_boss.jpg`;
    }
    sponsorBoss[sponsorName] = !sponsorBoss[sponsorName];
  })
}

function glowLoop() {
  setTimeout(() => {
    sponsoren[0].classList.toggle("glow");
    sponsoren[1].classList.toggle("glow");
    glowLoop();
  }, 2000)
}

glowLoop();

// Dropdown Stuff //

const ddHeaders = document.querySelectorAll('.ddHeader');
const ddContents = document.querySelectorAll('.ddContent');
const arrows = document.querySelectorAll('.arrow');
const x = document.querySelectorAll(".x");

let globalDropdown = false;
let globalDropdownIndex = 0;


const toggleDropdown = (index) => {
  arrows[index].classList.toggle('up');
  ddContents[index].classList.toggle('show');
  globalDropdown = !globalDropdown;
  globalDropdownIndex = index;
  if (globalDropdown && window.innerWidth < 1000) {
    ddContents[index].scrollIntoView({behaviour: 'smooth', block: 'start'});
  } else if (globalDropdown) {
    ddContents[index].scrollIntoView({behaviour: 'smooth', block: 'center'});
  } else {
    document.body.classList.remove('no-scroll');
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