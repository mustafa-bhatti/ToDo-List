const menuLoad = (function(){
    const menuGrid = document.createElement("div")
    menuGrid.classList.add("menu-grid");


    const addDish = function(name,price){
        const menuCard = document.createElement("div")
        const cardImg = document.createElement("div")
        const menuText = document.createElement("h1")
        menuCard.classList.add("menu-card");
        cardImg.classList.add("card-img",name);
        menuText.textContent = `${name} ${price}$`;

        // appending elements
        menuCard.appendChild(cardImg)
        menuCard.appendChild(menuText)
        
        menuGrid.appendChild(menuCard)
    }

    addDish("pancakes",1.48)
    addDish("pizza",2.18)
    addDish("salad",1)
    addDish("pasta",6.21)

    return{
        menuGrid
    }
})()

export {menuLoad}