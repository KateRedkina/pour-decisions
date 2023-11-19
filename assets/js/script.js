var alcoholInputEl = document.querySelector('#alcoholInput');
var nameSearchEl = document.querySelector('#nameSearch');
var beerTitle = document.querySelector('#beerTitle');
var beerImage = document.querySelector('#beerImage');
var beerDescription = document.querySelector('#beerDescription');
var randomSearchButton = document.querySelector('#randomSearchButton');
var cocktailSearchResult = document.getElementById('cocktailResults');
var searchResultSectionEl = document.getElementById("searchResultSection");


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
                displayRepos (alcoholResponse);
                displayReposName (nameResponse);
            })
        })
    }


randomSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();
    
});

function displayRepos (alcoholResponse) {
    if (alcoholResponse.drinks.length === 0) {
        return;
      }
      else {
      for (var i = 0; i < 10; i++) {
        var cocktailIDUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + alcoholResponse.drinks[i].idDrink;
        fetch(cocktailIDUrl)
            .then(function(response) {
                return response.json();})
            .then (function (URLresponse) {
                    finalDisplay(URLresponse);
                })
        
      }}
    }
      function displayReposName (nameResponse) {
        if (nameResponse.drinks.length === 0) {
            return;
          }
          else {
          for (var z = 0; z < 10; z++) {
            var cocktailIDUrlName = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + nameResponse.drinks[z].idDrink;;
            fetch(cocktailIDUrlName)
                .then(function(response) {
                    return response.json();})
                .then (function (URLresponseName) {
                        finalDisplayName(URLresponseName);
                    })
            
          }}
        }

    function finalDisplay (URLresponse) {
        if (URLresponse.length === 0) {
            searchResultSectionEl.textContent = "No results for alcohol type.";
            return;
        }
        else {
            for (var x = 0; x < URLresponse.drinks.length; x++) {
                var imageThumbnail = URLresponse.drinks[x].strDrinkThumb;
                var cocktailNameResult = URLresponse.drinks[x].strDrink;
                var ResultItem = document.createElement("div");
                ResultItem.setAttribute("class","card tile-is-parent");
                var subResultItem = document.createElement("div");
                subResultItem.setAttribute("class", "card-content tile-is-parent")
                ResultItem.appendChild(subResultItem);
                var mediaResultItem = document.createElement("div");
                mediaResultItem.setAttribute("class", "media tile-is-parent");
                subResultItem.appendChild(mediaResultItem);
                var contResultImage = document.createElement("div");
                contResultImage.setAttribute("class", "media-content");
                contResultImage.setAttribute("style", "display:left;");
                mediaResultItem.appendChild(contResultImage);
                var ResultImage = document.createElement("figure");
                contResultImage.appendChild(ResultImage);
                var ResultActImage = document.createElement("img");
                ResultActImage.setAttribute("src",imageThumbnail);
                ResultActImage.setAttribute("style", "width: 100px; length: 100px;");
                ResultActImage.setAttribute("class", "tile is-4")
                contResultImage.appendChild(ResultActImage);
                var MediaContent = document.createElement("div");
                MediaContent.setAttribute("class", "media-right");
                MediaContent.setAttribute("style", "float:right");
                mediaResultItem.appendChild(MediaContent);
                var cocktailName = document.createElement("a");
                cocktailName.textContent = cocktailNameResult;
                MediaContent.appendChild(cocktailName);
                searchResultSection.appendChild(ResultItem);
            }
        }
    }

    function finalDisplayName (URLresponseName) {
        if (URLresponseName.length === 0) {
            return;
        }
        else {
            for (var y = 0; y < URLresponseName.drinks.length; y++) {
                var imageThumbnailName = URLresponseName.drinks[y].strDrinkThumb;
                var cocktailNameResultname = URLresponseName.drinks[y].strDrink;
                var ResultItem = document.createElement("div");
                ResultItem.setAttribute("class","card ");
                var subResultItem = document.createElement("div");
                subResultItem.setAttribute("class", "card-content")
                ResultItem.appendChild(subResultItem);
                var mediaResultItem = document.createElement("div");
                mediaResultItem.setAttribute("class", "media");
                subResultItem.appendChild(mediaResultItem);
                var contResultImage = document.createElement("div");
                contResultImage.setAttribute("class", "media-content  tile-is-parent");
                contResultImage.setAttribute("style", "display:left;");
                mediaResultItem.appendChild(contResultImage);
                var ResultImage = document.createElement("figure");
                contResultImage.appendChild(ResultImage);
                var ResultActImage = document.createElement("img");
                ResultActImage.setAttribute("src",imageThumbnailName);
                ResultActImage.setAttribute("style", "width: 100px; length: 100px;");
                ResultActImage.setAttribute("class", "tile is-4")
                contResultImage.appendChild(ResultActImage);
                var MediaContent = document.createElement("div");
                MediaContent.setAttribute("class", "media-right");
                MediaContent.setAttribute("style", "float:right");
                mediaResultItem.appendChild(MediaContent);
                var cocktailName = document.createElement("a");
                cocktailName.textContent = cocktailNameResultname;
                MediaContent.appendChild(cocktailName);
                searchResultSection.appendChild(ResultItem);
            }
        }
    }
      

    var inputFavorite = document.querySelector('.inputFavorite');
    var favBtn = document.getElementById('favoritesBtn');
  
    var savedFavorite = localStorage.getItem('savedFavorite');
    if (savedFavorite) {
      inputFavorite.value = savedFavorite;
    }
  
    favBtn.addEventListener('click', function () {
      var favoriteContent = inputFavorite.value;
      localStorage.setItem('savedFavorite', favoriteContent);
    });

function runRandomSearchButton() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(results => results.json())
        .then(apiData => {
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