/*
    Student Name: Rita Nwosa
    File Name: script.js
    Course: CST 231.01A
*/
//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }