/*  OpenNav and closeNav functions are used to show and hide navbar items in mobile view using hamberger icon */

function openNav() {
    document.getElementById("Sidenav").style.left = "0";
}
  
function closeNav() {
    document.getElementById("Sidenav").style.left = "-300px";
}