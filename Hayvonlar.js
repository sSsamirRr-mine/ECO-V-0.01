'use strict';

import { data } from "./Hayvonlar_Storage.js";
let main = document.querySelector("section")
function CreateCard(from) {
    let card = document.createElement("div")
    let images = document.createElement("img")
    let name = document.createElement("h2")
    let cardInfo = document.createElement("p")
    card.classList.add("card")
    images.classList.add("cardImg")
    name.classList.add("title")
    cardInfo.classList.add("cardInfo")
    images.src = from.img
    name.innerHTML = from.title
    cardInfo.innerHTML = from.info
    card.appendChild(images)
    card.appendChild(name)
    card.appendChild(cardInfo)
    main.appendChild(card)
}
data.forEach(item => {
    CreateCard(item)
});