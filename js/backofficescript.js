
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q";
const headers = {
  "Content-Type": "application/json",
  Authorization: token
};

const form = document.getElementById("event-form");
const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get("id");

window.addEventListener("DOMContentLoaded", () => {
  if (filmId) {
    fetch(API_URL + filmId, { headers })
      .then(res => res.json())
      .then(film => {
        document.getElementById("name").value = film.name;
        document.getElementById("description").value = film.description;
        document.getElementById("price").value = film.price;
        document.getElementById("brand").value = film.brand;
        document.getElementById("imageUrl").value = film.imageUrl;
      });
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const brand = document.getElementById("brand").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();

  if (!name || !description || isNaN(price) || !brand || !imageUrl) {
    alert("Compila tutti i campi correttamente.");
    return;
  }

  const film = { name, description, price, brand, imageUrl };
  const method = filmId ? "PUT" : "POST";
  const url = filmId ? API_URL + filmId : API_URL;

  fetch(url, {
    method,
    headers,
    body: JSON.stringify(film)
  })
    .then(res => {
      if (!res.ok) throw new Error("Errore durante il salvataggio");
      return res.json();
    })
    .then(() => {
      alert("Film salvato con successo!");
      window.location.assign("./index.html");
    })
    .catch(err => alert(err.message));
});
