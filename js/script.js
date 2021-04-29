console.log(
  "Witam! Ostatnio widziałem takie autko tzw. Mały Fiat 125p i napis na szybie ROBIM CO MOŻEM :D u mnie trochę wygląda to podobnie :))"
);

let toggleClassButton = document.querySelector(".js-button");
let hideImage = document.querySelector(".js-headerImage");

toggleClassButton.addEventListener("click", () => {
  hideImage.classList.toggle("image--hide");
  toggleClassButton.innerText = hideImage.classList.contains("image--hide")
    ? "Pokaż zdjęcie"
    : "Usuń Zdjęcie";
});
  
  
  
  