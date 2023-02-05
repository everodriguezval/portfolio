let typed = new Typed("#auto-typing", {
  strings: [
    "Passion for technology",
    "Scientist",
    "Enthusiastic dancer",
    "Keen photographer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// var i = 0;
// var txt =
//   "At this role...";
// var speed = 20;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("auto-typing2").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();


let envelopeOpening = document.querySelector(".fa-envelope");
envelopeOpening.addEventListener("mouseover", mouseOver);
envelopeOpening.addEventListener("mouseout", mouseOut);

function mouseOver() {
  envelopeOpening.classList.replace("fa-envelope", "fa-envelope-open");
}

function mouseOut() {
  envelopeOpening.classList.replace("fa-envelope-open", "fa-envelope");
}

