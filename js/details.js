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
      const movieDetail = document.getElementById("movieDetail");
      movieDetail.innerHTML = `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card text-light border-0 d-flex flex-column">
            <img src="${data.imageUrl}" class="card-img-top" alt="${data.name}">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title text-color-1">${data.name}</h5>
              <p class="card-text">${data.description}</p>
              <p class="card-text">${data.brand}</p>
              <p class="card-text fw-bold text-color-3">Prezzo: €${data.price}</p>
            </div>
          </div>
        </div>
      `;

      document.getElementById("editName").value = data.name;
      document.getElementById("editDescription").value = data.description;
      document.getElementById("editPrice").value = data.price;
      document.getElementById("editImgUrl").value = data.imageUrl;

      document.getElementById("movieDetail").classList.remove("d-none");

      document.getElementById("formEdit").addEventListener("submit", function (e) {
        e.preventDefault();

        const updateMovie = {
          name: document.getElementById("editName").value,
          description: document.getElementById("editDescription").value,
          price: parseFloat(document.getElementById("editPrice").value),
          imageUrl: document.getElementById("editImgUrl").value,
        };

        fetch(APIUrl + movieId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q",
          },
          body: JSON.stringify(updateMovie),
        })
          .then((response) => {
            if (response.ok) {
              alert("Film aggiornato con successo!");
              window.location.href = "./homepage.html";
            } else {
              alert("Errore durante l'aggiornamento del film.");
            }
          })
          .catch((error) => {
            console.error("Errore:", error);
            alert("Errore durante l'aggiornamento del film.");
          });
      });

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
                window.location.href = "./homepage.html";
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
    .catch((error) => {
      console.error("Errore:", error);
      alert("Errore nel recupero dei dettagli del film.");
    });
};

getMovieDetails();
