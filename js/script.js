{
  const toggleClassButton = document.querySelector(".js-button");
  const hideImage = document.querySelector(".js-photoHide");

  const welcome = () => {
    console.log(
      "Witam! Ostatnio widziałem takie autko tzw. Mały Fiat 125p i napis na szybie ROBIM CO MOŻEM :D u mnie trochę wygląda to podobnie :))");
  };

  const onHidephotoClick = () => {

    hideImage.classList.toggle("photo--hiden");
    toggleClassButton.innerText = hideImage.classList.contains("photo--hiden")
      ? "Pokaż Zdjęcie"
      : "Usuń Zdjęcie";
  };



  const init = () => {
    toggleClassButton.addEventListener("click", onHidephotoClick);

    welcome();
  };

  init();
}



