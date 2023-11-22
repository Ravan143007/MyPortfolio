const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

// pic

document.getElementById("aboutImage").addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider");
  slider.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider");
  var isClickInsideSlider = slider.contains(event.target);
  var isTrigger = event.target === document.getElementById("aboutImage");

  // If the click is outside the slider and not on the trigger, close it
  if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
      slider.classList.remove("active");
  }
});

document.getElementById("p1").addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider1");
  slider.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider1");
  var isClickInsideSlider = slider.contains(event.target);
  var isTrigger = event.target === document.getElementById("p1");

  // If the click is outside the slider and not on the trigger, close it
  if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
      slider.classList.remove("active");
  }
});

document.getElementById("p2").addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider2");
  slider.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider2");
  var isClickInsideSlider = slider.contains(event.target);
  var isTrigger = event.target === document.getElementById("p2");

  // If the click is outside the slider and not on the trigger, close it
  if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
      slider.classList.remove("active");
  }
});

document.getElementById("exp").addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider3");
  slider.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider3");
  var isClickInsideSlider = slider.contains(event.target);
  var isTrigger = event.target === document.getElementById("exp");

  // If the click is outside the slider and not on the trigger, close it
  if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
      slider.classList.remove("active");
  }
});


document.getElementById("card1").addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider4");
  slider.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider4");
  var isClickInsideSlider = slider.contains(event.target);
  var isTrigger = event.target === document.getElementById("card1");

  // If the click is outside the slider and not on the trigger, close it
  if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
      slider.classList.remove("active");
  }
});


document.getElementById("card2").addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider5");
  slider.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var slider = document.getElementById("popupSlider5");
  var isClickInsideSlider = slider.contains(event.target);
  var isTrigger = event.target === document.getElementById("card2");

  // If the click is outside the slider and not on the trigger, close it
  if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
      slider.classList.remove("active");
  }
});

function sendMail(params){
  var tempParams = {
      from_name: document.getElementById("fromName").value,
      email_sender: document.getElementById("emailSender").value,
      subject_sender: document.getElementById("subjectSender").value,
      message_sender: document.getElementById("message").value,
  };
  emailjs.send('','',tempParams)
   .then(function(res){
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mail Sent Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
   });
}