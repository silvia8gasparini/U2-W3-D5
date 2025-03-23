const printDateInFooter = function () {
  const footerSpan = document.getElementById('year')
  footerSpan.innerText = new Date().getFullYear()
}
printDateInFooter()

const URLparameters = new URLSearchParams(location.search)
const movieId = URLparameters.get("id")
const APIUrl = "https://striveschool-api.herokuapp.com/api/product/"

const getMovieDetails = function () {
  fetch(APIUrl + movieId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWYxZDM4MzRiZjAwMTUwMDA2ZmMiLCJpYXQiOjE3NDI1NDQ2NjksImV4cCI6MTc0Mzc1NDI2OX0.Fe1metoCEo3L7Ffjh8C7qiDWYg7k-4Xjt2Cgh2sRa40",
    },
  })
    .then((response) => {
      console.log('response', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nel recupero dei dettagli')
      }
    })
    .then((data) => {
      console.log('DETTAGLI FILM', data)

      // Inserimento dati nei campi input
      document.getElementById('name').value = data.name
      document.getElementById('description').value = data.description
      document.getElementById('brand').value = data.brand
      document.getElementById('price').value = data.price
      document.getElementById('imagUrl').value = data.imgUrl
    })
    .catch((err) => {
      console.log('Errore nel recupero dati film', err)
    })
}

const editMovie = function () {
  location.assign('../backoffice.html?id=' + movieId)
}

const deleteMovie = function () {
  fetch(APIUrl + movieId, {
    method: 'DELETE',
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWYxZDM4MzRiZjAwMTUwMDA2ZmMiLCJpYXQiOjE3NDI1NDQ2NjksImV4cCI6MTc0Mzc1NDI2OX0.Fe1metoCEo3L7Ffjh8C7qiDWYg7k-4Xjt2Cgh2sRa40",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('FILM ELIMINATO')
        location.assign('../index.html')
      } else {
        throw new Error('Eliminazione NON andata a buon fine!')
      }
    })
    .catch((err) => {
      console.log('Errore nella cancellazione', err)
    })
}


  getMovieDetails()
