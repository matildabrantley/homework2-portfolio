const changeOpacity = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const midX = w/2;
    const midY = h/2;

    //Retrieve distances
    const reduction = 0.4;
    const distMouseFromTopLeft = distance(x, y, 0, 0);
    const distMouseFromTopRight = distance(x, y, w, 0);
    const distMouseFromBotLeft = distance(x, y, 0, h);
    const distMouseFromBotRight = distance(x, y, w, h);
    const distFromTopMid = distance(x, y, midX, 0);
    const distFromBotMid = distance(x, y, midX, h);
    document.getElementById("background1").style.opacity = Math.min(1, (h / 3) / (distMouseFromTopLeft+1)) - reduction; 
    document.getElementById("background5").style.opacity = Math.min(1, (h / 3) / (distMouseFromTopRight+1)) - reduction; 
    document.getElementById("background3").style.opacity = Math.min(1, (h / 3) / (distMouseFromBotLeft+1)) - reduction; 
    document.getElementById("background6").style.opacity = Math.min(1, (h / 3) / (distMouseFromBotRight+1)) - reduction; 
    document.getElementById("background2").style.opacity = Math.min(1, (h / 3) / (distFromTopMid+1)) - reduction - 0.1; 
    document.getElementById("background4").style.opacity = Math.min(1, (h / 3) / (distFromBotMid+1)) - reduction - 0.1; 

}

const distance = (x1, y1, x2, y2) => {
    const y = x2 - x1;
    const x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}