
document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q";
  
    fetch(API_URL, {
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(films => {
        const container = document.getElementById("events-row");
        const spinner = document.getElementById("spinner-container");
        spinner.style.display = "none";
  
        films.forEach(film => {
          const col = document.createElement("div");
          col.className = "col-md-4 mb-4";
  
          col.innerHTML = `
            <div class="card h-100 shadow p-3 mb-5 bg-body-tertiary rounded">
              <img src="${film.imageUrl}" class="card-img-top" alt="${film.name}">
              <div class="card-body">
                <h5 class="card-title">${film.name}</h5>
                <p class="card-text">Studio: ${film.brand}</p>
                <p class="fw-bold">${film.price} €</p>
                <a href="./details.html?id=${film._id}" class="btn btn-outline-dark">Dettagli</a>
                <a href="./backoffice.html?id=${film._id}" class="btn btn-outline-secondary ms-2">Modifica</a>
              </div>
            </div>
          `;
          container.appendChild(col);
        });
      })
      .catch(error => {
        console.error("Errore nel caricamento dei film:", error);
      });
  });
  