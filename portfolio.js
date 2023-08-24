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

let envelopeOpening = document.querySelector(".fa-envelope");
envelopeOpening.addEventListener("mouseover", mouseOver);
envelopeOpening.addEventListener("mouseout", mouseOut);

function mouseOver() {
  envelopeOpening.classList.replace("fa-envelope", "fa-envelope-open");
}

function mouseOut() {
  envelopeOpening.classList.replace("fa-envelope-open", "fa-envelope");
}

(function() { 
  emailjs.init('Sg7c9enWkQ3L6b3M3');
})();


let form = document.getElementById('form')
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    emailjs.sendForm("service_2lzb8ru","template_035yoau", this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your mail is sent!');
            clearFormFields();
        }, function(error) {
            console.log('FAILED...', error);
        });
};

function clearFormFields() {
  document.getElementById("email").value = ""; 
  document.getElementById("message").value = "";  
  document.getElementById("name").value = "";    
}

// autotyping function
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
