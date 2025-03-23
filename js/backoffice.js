
const currentYear = function () {
  const footerSpan = document.getElementById("year");
  footerSpan.innerText = new Date().getFullYear();
};
currentYear();

class Movie {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

const URLparameters = new URLSearchParams(location.search);
const movieId = URLparameters.get("id");

const APIUrl = "https://striveschool-api.herokuapp.com/api/product/";

const movieForm = document.getElementById("movie-form");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const brandInput = document.getElementById("brand");
const imageUrlInput = document.getElementById("imageUrl");
const priceInput = document.getElementById("price");
const resetBtn = document.querySelector('button[type="reset"]');

if (movieId) {
  fetch(APIUrl + movieId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("Errore nella fetch");
    })
    .then((data) => {
      nameInput.value = data.name;
      descriptionInput.value = data.description;
      brandInput.value = data.brand;
      imageUrlInput.value = data.imageUrl;
      priceInput.value = data.price;
    })
    .catch((err) => console.error("Errore nel caricamento film", err));
}

movieForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const description = descriptionInput.value.trim();
  const brand = brandInput.value.trim();
  const imageUrl = imageUrlInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || !description || !brand || !imageUrl || isNaN(price)) {
    alert("Compila tutti i campi correttamente");
    return;
  }

  const movie = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl, // versione primaria
    price: price,
  };

  const method = movieId ? "PUT" : "POST";
  const url = movieId ? APIUrl + movieId : APIUrl;

  console.log("Invio dati a:", url);
  console.log("Metodo:", method);
  console.log("Payload:", movie);

  fetch(url, {
    method,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  })
    .then((response) => {
      if (response.ok) {
        alert("Film salvato con successo!");
        movieForm.reset();
      } else {
        console.warn("Status code:", response.status);
        return response.json().then(err => {
          console.error("Errore dettagliato dal server:", err);
          throw new Error("Errore nella risposta del server");
        });
      }
    })
    .catch((err) => {
      console.error("Errore durante il salvataggio:", err);
      alert("Errore durante il salvataggio!");
    });
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  movieForm.reset();
});
