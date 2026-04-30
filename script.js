const buttons=
document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".card");
const searchInput=
document.querySelector(".search-bar");

buttons.forEach(button=>{
    button.addEventListener("click",() =>{
        buttons.forEach(btn=>
            btn.classList.remove("active"));
            btn.classList.add("active");

    const category=button.textContent.toLowerCase();
  cards.forEach(card=>{
    const cardCategory=
    card.getAttribute("data-category");

    if(category==="all"||cardCategory===category)
    {
        card.style.display="block"
    }else{
        card.style.display="none"
    }
  });
    });
});
searchInput.addEventListener("input" , ()=>{
    const value=searchInput.value.toLowerCase();

    cards.forEach(card=>{
        const title=
        card.querySelector("h3").textContent.toLowerCase();
    if(title.includes(value)){
        card.style.display="block";
    }else{
        card.style.display="none"
    }
    });
});