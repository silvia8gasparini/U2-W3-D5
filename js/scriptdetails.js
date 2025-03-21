
const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q";
const headers = {
  "Content-Type": "application/json",
  Authorization: token
};

const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get("id");

window.addEventListener("DOMContentLoaded", () => {
  fetch(API_URL + filmId, { headers })
    .then(response => response.json())
    .then(film => {
      document.querySelector("img.card-img-top").src = film.imageUrl;
      document.getElementById("name").textContent = film.name;
      document.getElementById("description").textContent = film.description;
      document.getElementById("price-time").textContent = `Studio: ${film.brand} | Prezzo: ${film.price} €`;
    })
    .catch(err => console.error("Errore nel caricamento dettagli:", err));
});

function editConcert() {
  window.location.assign(`./backoffice.html?id=${filmId}`);
}

function deleteConcert() {
  if (confirm("Sei sicuro di voler cancellare questo film?")) {
    fetch(API_URL + filmId, {
      method: "DELETE",
      headers
    })
      .then(response => {
        if (!response.ok) throw new Error("Errore nella cancellazione");
        alert("Film eliminato.");
        window.location.assign("./index.html");
      })
      .catch(err => alert(err.message));
  }
}
