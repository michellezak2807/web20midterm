

function hamburger() {
    var x = document.getElementById("links");
    var border = document.getElementById("ham-title");
    if(x.style.display == "block") {
        x.style.display = "none";
        border.style.borderBottom = "0px solid #bb5515"
    } else {
        x.style.display = "block";

        border.style.borderBottom = "1.5px solid #bb5515";
    }
}
