console.log("Running")
import "./styles.css"
import { start } from "./initial-load"
import { menuLoad } from "./menu"
import { contactLoad } from "./contact"


const content = document.querySelector("#content")
content.appendChild(start.homeDiv)

const btnListeners = (function(){
    const homeBtn = document.querySelector("#home")
    const menuBtn = document.querySelector("#menu")
    const contactBtn = document.querySelector("#contact")
    
    homeBtn.addEventListener("click",() =>{
        content.innerHTML=""
        content.appendChild(start.homeDiv)
    })
    menuBtn.addEventListener("click",() =>{
        content.innerHTML=""
        content.appendChild(menuLoad.menuGrid)
    })
    contactBtn.addEventListener("click",() =>{
        content.innerHTML=""
        content.appendChild(contactLoad.text)
    })

    

})()
