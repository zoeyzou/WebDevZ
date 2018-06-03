//add nav-menu active & current tab switch
var navMenu = document.getElementById("nav-menu");
var navMenuItem = document.getElementsByClassName("nav-menu-item");

for(let i = 0; i < navMenuItem.length; i++) {
  navMenuItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//to collapse experience entries
var experienceTitle = document.querySelectorAll(".experience-title");
var experienceContent = document.querySelectorAll(".experience-content");

for(let i = 0; i < experienceTitle.length; i++) {
  experienceTitle[i].addEventListener("click", function() {
    if (experienceContent[i].style.display === "none") {
      experienceContent[i].style.display = "block";
    }
    else {
      experienceContent[i].style.display = "none";
    }
  })
}

//to loop through work and outside work tabs
var lifeButton = document.getElementById("life-buttons").children;
var work = document.getElementById("work");
var outsideWork = document.getElementById("outside-work");



for (let i = 0; i < lifeButton.length; i++) {
  lifeButton[i].addEventListener("click", function() {
    if (i === 0) {
      work.style.display = "block";
      outsideWork.style.display = "none";
    }
    else {
      work.style.display = "none";
      outsideWork.style.display = "block";
    }
  });
}
