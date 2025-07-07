
const start = (function(){
    const homeDiv = document.createElement("div")
    const homeText = document.createElement("h1");

    homeDiv.className = "front-image";
    homeText.textContent= "LOUNGE\nCAFE";

    homeDiv.appendChild(homeText)
    return {
        homeDiv
    }
})()

export {start}
