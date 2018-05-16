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