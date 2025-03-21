
const films = [
    {
      "name": "The General",
      "description": "Una delle migliori commedie di Buster Keaton, ambientata durante la guerra civile americana.",
      "brand": "United Artists",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_general_movie_poster.jpg/330px-The_general_movie_poster.jpg",
      "price": 9.99
    },
    {
      "name": "Sherlock Jr.",
      "description": "Un proiezionista sogna di diventare un grande detective. Geniale e surreale.",
      "brand": "Metro-Goldwyn",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sherlock_Jr_poster.jpg/800px-Sherlock_Jr_poster.jpg",
      "price": 8.99
    },
    {
      "name": "The Kid",
      "description": "Il primo lungometraggio di Charlie Chaplin.",
      "brand": "First National",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Kid_1921_poster.jpg/800px-The_Kid_1921_poster.jpg",
      "price": 10.99
    },
    {
      "name": "City Lights",
      "description": "Una storia d'amore tenera e poetica.",
      "brand": "United Artists",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/City_Lights_poster.jpg/800px-City_Lights_poster.jpg",
      "price": 11.99
    },
    {
      "name": "Modern Times",
      "description": "Chaplin contro l'industrializzazione. Satira brillante e sempre attuale.",
      "brand": "United Artists",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Modern_Times_poster.jpg/800px-Modern_Times_poster.jpg",
      "price": 12.99
    },
    {
      "name": "The Gold Rush",
      "description": "L'iconica danza dei panini e una corsa all'oro in Alaska.",
      "brand": "United Artists",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Gold_rush_poster.jpg/800px-Gold_rush_poster.jpg",
      "price": 10.50
    },
    {
      "name": "Safety Last!",
      "description": "Harold Lloyd in una scena diventata leggenda: appeso all'orologio.",
      "brand": "Hal Roach Studios",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Safety_Last_1923_Poster.jpg/800px-Safety_Last_1923_Poster.jpg",
      "price": 9.50
    },
    {
      "name": "The Circus",
      "description": "Charlot entra nel mondo del circo. Puro cinema muto.",
      "brand": "United Artists",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Circus_1928_poster.jpg/800px-The_Circus_1928_poster.jpg",
      "price": 8.50
    },
    {
      "name": "Steamboat Bill, Jr.",
      "description": "Keaton e il famoso trucco della facciata della casa che cade.",
      "brand": "United Artists",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Steamboat_Bill_Jr_poster.jpg/800px-Steamboat_Bill_Jr_poster.jpg",
      "price": 9.90
    },
    {
      "name": "The Cameraman",
      "description": "Keaton come cameraman alle prese con l'amore e il lavoro.",
      "brand": "Metro-Goldwyn-Mayer",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/The_Cameraman_%281928%29_poster.jpg/800px-The_Cameraman_%281928%29_poster.jpg",
      "price": 10.20
    },
    {
      "name": "The Passion of Joan of Arc",
      "description": "Uno dei film più toccanti del muto, celebre per il volto di Maria Falconetti.",
      "brand": "Société Générale des Films",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Passion_de_Jeanne_d%27Arc_%281928%29_-_poster.jpg/800px-La_Passion_de_Jeanne_d%27Arc_%281928%29_-_poster.jpg",
      "price": 11.80
    },
    {
      "name": "Metropolis",
      "description": "Capolavoro visivo e narrativo del cinema espressionista tedesco.",
      "brand": "UFA",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Metropolisposter.jpg/800px-Metropolisposter.jpg",
      "price": 13.5
    },
    {
      "name": "Nosferatu",
      "description": "Il primo Dracula cinematografico.",
      "brand": "Prana Film",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nosferatuposter.jpg/800px-Nosferatuposter.jpg",
      "price": 9.70
    },
    {
      "name": "The Cabinet of Dr. Caligari",
      "description": "Visionario e inquietante, uno dei primi horror psicologici.",
      "brand": "Decla-Bioscop",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Das_Cabinet_des_Dr._Caligari_%281920%29_poster.jpg/800px-Das_Cabinet_des_Dr._Caligari_%281920%29_poster.jpg",
      "price": 9.30
    },
    {
      "name": "Sunrise: A Song of Two Humans",
      "description": "Capolavoro di Murnau, una poesia visiva sull'amore e il perdono.",
      "brand": "Fox Film Corporation",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sunrise_Murnau_poster_1927.jpg/800px-Sunrise_Murnau_poster_1927.jpg",
      "price": 12.10
    },
    {
      "name": "The Last Laugh",
      "description": "Espressionismo tedesco al massimo splendore. Una storia umana e struggente.",
      "brand": "UFA",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Last_Laugh_poster.jpg/800px-The_Last_Laugh_poster.jpg",
      "price": 10.30
    },
    {
      "name": "A Trip to the Moon",
      "description": "Il primo grande film di fantascienza. Melies e la luna nel 1902.",
      "brand": "Star Film Company",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Le_Voyage_dans_la_lune.jpg/800px-Le_Voyage_dans_la_lune.jpg",
      "price": 7.50
    },
    {
      "name": "The Birth of a Nation",
      "description": "Innovazioni tecniche e narrazione storica.",
      "brand": "Epoch Producing Co.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Birth_of_a_Nation_poster.jpg/800px-The_Birth_of_a_Nation_poster.jpg",
      "price": 8.80
    },
    {
      "name": "Greed",
      "description": "Von Stroheim firma una delle opere più ambiziose e cupe del muto.",
      "brand": "MGM",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Greed_poster.jpg/800px-Greed_poster.jpg",
      "price": 11
    },
    {
      "name": "Intolerance",
      "description": "Griffith risponde alle critiche con un'opera epica sulle ingiustizie del mondo.",
      "brand": "Triangle Film Corporation",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Intolerance_%281916%29_-_poster.jpg/800px-Intolerance_%281916%29_-_poster.jpg",
      "price": 10.70
    }
  ];
  const seedToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWVhNTM4MzRiZjAwMTUwMDA2ZjQiLCJpYXQiOjE3NDI1NDQ1NDksImV4cCI6MTc0Mzc1NDE0OX0.XnRGUIf7H9ODK85ZDlh-wOZwBF-cbcDU_NF2OC3ks8Q";
  const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
  
  films.forEach(film => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: seedToken
      },
      body: JSON.stringify(film)
    })
    .then(res => {
      if (!res.ok) throw new Error("Errore nella creazione");
      return res.json();
    })
    .then(data => console.log("Film inserito:", data.name))
    .catch(err => console.error("Errore:", err));
  });
  