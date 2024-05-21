<<<<<<< HEAD

window.onscroll = function() {myFunction()};
    
var header = document.getElementById("header")
    
var sticky = header.offsetTop;
    
function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}


function myFunction(){
    document.getElementById("dropdown-content1").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.one')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
=======

window.onscroll = function() {myFunction()};
    
var header = document.getElementById("header")
    
var sticky = header.offsetTop;
    
function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}


function myFunction(){
    document.getElementById("dropdown-content1").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.one')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
>>>>>>> 5c95b283f02b097fb112e448f5c7b06919915d77
  } 