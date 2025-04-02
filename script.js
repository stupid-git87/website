function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("overlay").classList.remove("active");
}
