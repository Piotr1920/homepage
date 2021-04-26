console.log(
    "Witam! Ostatnio widziałem takie autko tzw. Mały Fiat 125p i napis na szybie ROBIM CO MOŻEM :D u mnie trochę wygląda to podobnie :))"
  );
  
  let article__photo = document.querySelector(".article__photo");
  let article__button = document.querySelector(".article__button");
  
  article__button.addEventListener("click", () => {
    
    article__photo.classList.toggle("article__photo--hiden");
    
    article__button.innerHTML === "Pokaż zdjęcie"
      ? (article__button.innerHTML = "Usuń zdjęcie")
      : (article__button.innerHTML = "Pokaż zdjęcie");
  });

  
  
  
  