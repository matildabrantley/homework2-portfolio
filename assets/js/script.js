const changeOpacity = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const diag = distance(0, 0, w, h);
    const midX = w/2;
    const midY = h/2;

    const reduction = 0.0;
    const distMouseFromTopLeft = distance(x, y, 0, 0);
    document.getElementById("background1").style.opacity = distMouseFromTopLeft / 
    const distMouseFromTopRight = distance(x, y, w, 0);
    document.getElementById("background2").style.opacity = distMouseFromTopRight / diag;
    const distMouseFromBotLeft = distance(x, y, 0, h);
    document.getElementById("background3").style.opacity = distMouseFromBotLeft / diag;
    const distMouseFromBotRight = distance(x, y, w, h);
    document.getElementById("background4").style.opacity = distMouseFromBotRight / diag;
    //w / (y + w) - x / h - reduction;
    // document.getElementById("background2").style.opacity = w / (y + w);
    // document.getElementById("background1").style.opacity = 0.5 + (x / w)/2;
    // document.getElementById("background2").style.opacity = 0.5 + (y / w)/2;
}
// document.onmousemove(changeOpacity(e));
// document.getElementById("background2").onmousemove = function(event) {changeOpacity(e)}

const distance = (x1, y1, x2, y2) => {
    const y = x2 - x1;
    const x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}