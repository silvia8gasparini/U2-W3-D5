const currentYear = function () {
  const footerSpan = document.getElementById("year");
  footerSpan.innerText = new Date().getFullYear();
};
currentYear();

class Movie {
  constructor(_name, _description, _brand, _imgUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imgUrl = _imgUrl;
    this.price = _price;
  }
}

const URLparameters = new URLSearchParams(location.search)
const eventId = URLparameters.get('id')

const nameInput = document.getElementById('name')
const descriptionInput = document.getElementById('description')
const brandInput = document.getElementById("brand")
const imgUrlInput = document.getElementById("imageUrl")
const priceInput = document.getElementById('price')

const APIUrl = "https://striveschool-api.herokuapp.com/api/product/";

if (eventId) {
  fetch(APIUrl + eventId)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nella fetch')
      }
    })
    .then((data) => {
      nameInput.value = data.name
      descriptionInput.value = data.description
      brandInput.value = data.brand
      imgUrlInput.value = data.imgUrl
      priceInput.value = data.price
    })
    .catch((err) => console.log('Errore ripopolamento del form', err))
}

const movieForm = document.getElementById('movie-form')
movieForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const movie = new Movie(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imgUrlInput.value,
    parseFloat(priceInput.value)
  )

  console.log('Movie', movie)

  let methodToUse
  let URLtoUse

  if (eventId) {
    methodToUse = 'PUT'
    URLtoUse = APIUrl + eventId
  } else {
    methodToUse = 'POST'
    URLtoUse = APIUrl
  }

  fetch(URLtoUse, {
    method: methodToUse,
    body: JSON.stringify(movie),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWYxZDM4MzRiZjAwMTUwMDA2ZmMiLCJpYXQiOjE3NDI1NDQ2NjksImV4cCI6MTc0Mzc1NDI2OX0.Fe1metoCEo3L7Ffjh8C7qiDWYg7k-4Xjt2Cgh2sRa40",
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('Salvataggio completato!')
        movieForm.reset()
      } else {
        throw new Error('Ricevuta response negativa dal backend')
      }
    })
    .catch((err) => {
      console.log('Errore nel salvataggio!', err)
    })
})
