var alcoholInputEl = document.querySelector('#alcoholInput');
var nameSearchEl = document.querySelector('#nameSearch');
var beerTitle = document.querySelector('#beerTitle');
var beerImage = document.querySelector('#beerImage');
var beerDescription = document.querySelector('#beerDescription');
var randomSearchButton = document.querySelector('#randomSearchButton');
var cocktailSearchResult = document.getElementById('cocktailResults');

document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {
    e.preventDefault();
    runCocktailSearch();
});

    

function runCocktailSearch () { 
var alcoholSearchParam = alcoholInputEl.value; 
var alcoholURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcoholSearchParam; 
var nameSearchParam = nameSearchEl.value; 
var nameURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nameSearchParam;  
    fetch(alcoholURL)
        .then(function (response) {
            return response.json();     
        })
        .then(function (alcoholResponse) {
            fetch(nameURL)
            .then (function (response) {
            return response.json();   
            })
            .then (function (nameResponse) {
                displayRepos (alcoholResponse, nameResponse)
            })
        })
    }


randomSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();
    
});

function displayRepos (alcoholResponse,nameResponse) {
    console.log(alcoholResponse);
    console.log(nameResponse);
    if (alcoholResponse.drinks.length === 0) {
        cocktailSearchResult.textContent = 'No results found.';
        return;
      }
      else {
      for (var i = 0; i < alcoholResponse.drinks.length; i++) {
        var cocktailIDUrl = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + alcoholResponse.drinks[i].idDrink;
        console.log(cocktailIDUrl);
        
        var imageUrl = "/images/media/drink/vrwquq1478252802.jpg/preview";
        var cocktailNameEl = "Cocktail Name";}
      }

    // var ResultItem = document.createElement("div");
    // ResultItem.setAttribute("class","card");
    // ResultItem.setAttribute("style", "width:100%; display:block; height:fit-content");
    // var subResultItem = document.createElement("div");
    // subResultItem.setAttribute("class", "card-content")
    // ResultItem.appendChild(subResultItem);
    // var mediaResultItem = document.createElement("div");
    // mediaResultItem.setAttribute("class", "media");
    // subResultItem.appendChild(mediaResultItem);
    // var contResultImage = document.createElement("div");
    // contResultImage.setAttribute("class", "media-left");
    // mediaResultItem.appendChild(contResultImage);
    // var ResultImage = document.createElement("figure");
    // ResultImage.setAttribute("class", "image is 100x100");
    // contResultImage.appendChild(ResultImage);
    // var ResultActImage = document.createElement("img");
    // ResultActImage.setAttribute("src",imageUrl);
    // contResultImage.appendChild(ResultActImage);
    // var MediaContent = document.createElement("div");
    // MediaContent.setAttribute("class", "media-content");
    // mediaResultItem.appendChild(MediaContent);
    // var cocktailName = document.createElement("a");
    // cocktailName.textContent = cocktailNameEl;
    // MediaContent.appendChild(cocktailName);
    // cocktailSearchResult.appendChild(ResultItem);
      }
      

function runRandomSearchButton() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(results => results.json())
        .then(apiData => {
            console.log(apiData);
        });
}

function randomBeer(){
    var randomBeerUrl = "https://api.punkapi.com/v2/beers/random"
    fetch(randomBeerUrl)
        .then(function(response) {
        return response.json();
    })
    .then(function (data) {
          beerTitle.textContent = data[0].name;
          beerImage.setAttribute("src", data[0].image_url);
          beerDescription.textContent = data[0].description;
    });
}
randomBeer();  