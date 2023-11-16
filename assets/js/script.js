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
    var alcoholURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + alcoholSearchParam;    
    console.log(alcoholURL)
    fetch(alcoholURL)
        .then(function (response) {
            console.log(alcoholURL);
            return response.json();     
        });
    var nameSearchParam = nameSearchEl.value; 
    var nameURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nameSearchParam;          
    console.log(nameURL);
    fetch(nameURL)
        .then(function (response) {
            console.log(nameURL);       

            return response.json();   
                });
}


randomSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();
});

function displayRepos () {
    if (repos.length === 0) {
        repoContainerEl.textContent = 'No repositories found.';
        return;
      }
      else {
      for (var i = 0; i < repos.length; i++) {
        var imageUrl = "/images/media/drink/vrwquq1478252802.jpg/preview";
        var cocktailNameEl = "Cocktail Name";

    var ResultItem = document.createElement("div");
    ResultItem.setAttribute("class","card");
    ResultItem.setAttribute("style", "width:100%; display:block; height:fit-content");
    var subResultItem = document.createElement("div");
    subResultItem.setAttribute("class", "card-content")
    ResultItem.appendChild(subResultItem);
    var mediaResultItem = document.createElement("div");
    mediaResultItem.setAttribute("class", "media");
    subResultItem.appendChild(mediaResultItem);
    var contResultImage = document.createElement("div");
    contResultImage.setAttribute("class", "media-left");
    mediaResultItem.appendChild(contResultImage);
    var ResultImage = document.createElement("figure");
    ResultImage.setAttribute("class", "image is 100x100");
    contResultImage.appendChild(ResultImage);
    var ResultActImage = document.createElement("img");
    ResultActImage.setAttribute("src",imageUrl);
    contResultImage.appendChild(ResultActImage);
    var MediaContent = document.createElement("div");
    MediaContent.setAttribute("class", "media-content");
    mediaResultItem.appendChild(MediaContent);
    var cocktailName = document.createElement("a");
    cocktailName.textContent = cocktailNameEl;
    MediaContent.appendChild(cocktailName);
    cocktailSearchResult.appendChild(ResultItem);
      }
}}

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