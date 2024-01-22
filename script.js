var typed = new Typed("#element", {
  strings: [
    "Student",
    "Learner",
    "React Devloper",
    "Aspiring Full Stack Developer",
  ],
  typeSpeed: 70,
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


const scriptURL ="https://script.google.com/macros/s/AKfycbz95PGG5qT3Fg29fSJv8lNhPxax8qufRBHMPquU7WMseLgpPGb06mPabpY3Byohjqn-QA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Succesfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
