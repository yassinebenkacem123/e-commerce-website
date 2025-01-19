// Variables Declaration :
const menus = document.querySelectorAll(".menu");
const moneyChoices = document.querySelector(".moneyTypeChoices"),
languageChoices = document.querySelector(".languageChoices"),
mnyArrow = document.querySelector(".arrow1"),
lngArrow = document.querySelector(".arrow2"),
womenElems = document.querySelector(".women-ele"),
womenProducts = document.querySelector(".container"),
arrowForWomen = document.querySelector(".women-arrow");
// Menu Handling:  
menus.forEach((menu)=>{
    menu.addEventListener("click", (event)=>{
        if(event.currentTarget.classList[0]==="money-type"){
            moneyChoices.classList.toggle("active");
            mnyArrow.classList.toggle("fa-angle-up");
        }else if(event.currentTarget.classList[0]==="language"){
            languageChoices.classList.toggle("active");
            lngArrow.classList.toggle("fa-angle-up");
        }
    });
});
// women element handling : 
womenElems.addEventListener("click",()=>{
    womenProducts.classList.toggle("active");
    arrowForWomen.classList.toggle("fa-angle-up");


})
