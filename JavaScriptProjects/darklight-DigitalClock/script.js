const timeP = document.querySelector(".time-para");
const toggleBtn = document.getElementById("toggle-btn");
const savedTheme=localStorage.getItem("theme");

document.body.classList.toggle("dark-theme", savedTheme === "dark-theme");
toggleBtn.innerText = savedTheme === "dark-theme" ? "Light mode" : "Dark mode";

function displayTime() {
    let now = new Date();
    let timeString = now.toTimeString().split(" ")[0]; 
    timeP.innerText = timeString;
}

setInterval(displayTime, 1000);

toggleBtn.addEventListener('click', (e) => {
    const body = document.querySelector('body');
    body.classList.toggle("dark-theme");
    const currentTheme= body.classList.contains("dark-theme")?"dark-theme":"light-theme";
     localStorage.setItem("theme", currentTheme);
    e.target.innerText = body.classList.contains("dark-theme") ? "Light mode" : "Dark mode";
  });
