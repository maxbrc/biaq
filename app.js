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
  img.addEventListener('click', function() {
    let sponsorName = sponsor.classList[1];
    if (sponsorBoss[sponsorName]) {
      img.src = "img/" + sponsorName + ".jpg" //string template literals won't work for some reason
    } else {
      img.src = "img/" + sponsorName + "_boss.jpg"
    }
    sponsorBoss[sponsorName] = !sponsorBoss[sponsorName]
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