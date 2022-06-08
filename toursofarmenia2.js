const cards = Array.from(document.querySelectorAll(".gallery__card"));
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
const picture = Array.from(document.querySelectorAll(".gallery__card__pic"));
let cardIndex = -1;
let pictureFull;
for (const card of cards){
    card.addEventListener("click", (event)=>{
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        pictureFull.style.objectFit = "container";
        sliderContainer.append(pictureFull);
        slider.classList.add("active");
    });
}
console.log(cards);