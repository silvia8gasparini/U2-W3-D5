const currentYear = function () {
  const footerSpan = document.getElementById("year");
  footerSpan.innerText = new Date().getFullYear();
};
currentYear();

const URLparameters = new URLSearchParams(location.search);
const movieId = URLparameters.get("id");
const APIUrl = "https://striveschool-api.herokuapp.com/api/product/";

const getMovieDetails = function () {
  if (!movieId) {
    console.error("Nessun ID film fornito.");
    alert("ID film non trovato.");
    return;
  }

  fetch(APIUrl + movieId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella risposta del server: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const movieDetails = document.getElementById("movieDetails");
      movieDetails.innerHTML = `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card text-dark border-1 shadow d-flex flex-column mb-5">
            <img src="${data.imageUrl}" class="card-img-top" alt="${data.name}">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.description}</p>
              <p class="card-text">${data.brand}</p>
              <p class="card-text fw-bold">Prezzo: €${data.price}</p>
               <button id="deleteBtn" type="button" class="btn btn-danger btn-sm px-4 py-3 m-3">Elimina</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById("editName").value = data.name;
      document.getElementById("editDescription").value = data.description;
      document.getElementById("editPrice").value = data.price;
      document.getElementById("editImgUrl").value = data.imageUrl;
      document.getElementById("movieDetails").classList.remove("d-none");

      document.getElementById("deleteBtn").addEventListener("click", function () {
        if (confirm("Sei sicuro di voler eliminare questo film?")) {
          fetch(APIUrl + movieId, {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q",
            },
          })
            .then((response) => {
              if (response.ok) {
                alert("Film eliminato con successo!");
                window.location.href = "../index.html";
              } else {
                alert("Errore durante l'eliminazione del film.");
              }
            })
            .catch((error) => {
              console.error("Errore:", error);
              alert("Errore durante l'eliminazione del film.");
            });
        }
      });
    })
};

getMovieDetails();
