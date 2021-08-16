const changeOpacity = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    // document.getElementById("background1").style.opacity = window.innerWidth / (x + window.innerWidth);
    // document.getElementById("background2").style.opacity = window.innerWidth / (y + window.innerWidth);
    document.getElementById("background1").style.opacity = x / window.innerWidth;
    document.getElementById("background2").style.opacity = y / window.innerWidth;
    // document.getElementById("background1").style.opacity = 0.5 + (x / window.innerWidth)/2;
    // document.getElementById("background2").style.opacity = 0.5 + (y / window.innerWidth)/2;
}
// document.onmousemove(changeOpacity(e));
// document.getElementById("background2").onmousemove = function(event) {changeOpacity(e)}
