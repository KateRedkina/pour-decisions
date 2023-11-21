var alcoholInputEl = document.querySelector('#alcoholInput');
var nameSearchEl = document.querySelector('#nameSearch');
var beerTitle = document.querySelector('#beerTitle');
var beerImage = document.querySelector('#beerImage');
beerImage.setAttribute("src", "assets/images/Default Bottle.png");
var beerDescription = document.querySelector('#beerDescription');
var randomSearchButton = document.querySelector('#randomSearchButton');
var cocktailSearchResult = document.getElementById('cocktailResults');
var searchResultSectionEl = document.getElementById("searchResultSection");
var SearchResult = document.querySelector('#searchresult');




function clearDivs() {
    searchResultSectionEl.innerHTML = '';
}

document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {
    e.preventDefault();
    clearDivs();
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
    clearDivs();
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
                var addToFavoritesButton = document.createElement('button');
                addToFavoritesButton.textContent = "+";
                addToFavoritesButton.setAttribute("class", "favorite-btn");
                mediaResultItem.appendChild(addToFavoritesButton);
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
            

                searchResultSectionEl.appendChild(ResultItem);

            }

            addToFavoritesButton.addEventListener("click", function() {
                addToFavorites(ResultActImage, imageThumbnail, cocktailNameResult); 
                
              });
             
        }
    }

    function addToFavorites(imageThumbnail, ResultActImage, cocktailNameResult) {

        var listItem = document.createElement('li');
        listItem.innerHTML = '<img src="' + ResultActImage + '"alt="' + imageThumbnail + '">' + cocktailNameResult + '<button id="' + "removeBtn" + '" class="' + "favorite-btn" + '">' + "+" + '</button>';
    

    document.getElementById("favoritesList").appendChild(listItem);

    var removeFavoriteButton = document.querySelector("#removeBtn");
    removeFavoriteButton.addEventListener("click", function() {
        removeFavorite(listItem);
     });

    }

    function removeFavorite(item) {
        var favoritesListContainer = document.getElementById('favoritesList');

        if(item) {
            favoritesListContainer.removeChild(item);
    
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
                var addToFavoritesButton = document.createElement('button');
                addToFavoritesButton.textContent = "+";
                addToFavoritesButton.setAttribute("class", "favorite-btn");
                mediaResultItem.appendChild(addToFavoritesButton);
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

            addToFavoritesButton.addEventListener("click", function() {
                addToFavorites(ResultActImage, imageThumbnailName, cocktailNameResultname);
                
              });

              
        }
    }
      

    function addToFavorites(imageThumbnailName, ResultActImage, cocktailNameResultname) {

        var listItem = document.createElement('li');
        listItem.innerHTML = '<img src="' + ResultActImage + '"alt="' + imageThumbnailName + '">' + cocktailNameResultname + '<button id="' + "removeBtn" + '" class="' + "favorite-btn" + '">' + "+" + '</button>';

    document.getElementById("favoritesList").appendChild(listItem);
    

    var removeFavoriteButton = document.querySelector("#removeBtn");
    removeFavoriteButton.addEventListener("click", function() {
        removeFavorite(listItem);
     });

    }

    function removeFavorite(item) {
        var favoritesListContainer = document.getElementById('favoritesList');

        if(item) {
            favoritesListContainer.removeChild(item);

        }

    }






    function runRandomSearchButton() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(results => results.json())
            .then(apiData => {
                displayRandomCocktail(apiData);
            });
    }
    
    function displayRandomCocktail(apiData) {
        const drink = apiData.drinks[0];
        const drinkName = drink.strDrink;
        const drinkIngredients = [];
    
    
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column', 'is-two-thirds');
    
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
    
        const cardImageDiv = document.createElement('div');
        cardImageDiv.classList.add('card-image');
    
        const figureElement = document.createElement('figure');
        figureElement.classList.add('image', 'is-4by3');
    
        const drinkImage = document.createElement('img');
        drinkImage.src = drink.strDrinkThumb;
        drinkImage.alt = drinkName;
    
        figureElement.appendChild(drinkImage);
        cardImageDiv.appendChild(figureElement);
    
        const cardContentDiv = document.createElement('div');
        cardContentDiv.classList.add('card-content');
    
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
    
        const heading = document.createElement('h3');
        heading.textContent = drinkName;
    
        const ingredientsList = document.createElement('ul');
        drinkIngredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);


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
    
        contentDiv.appendChild(heading);
        contentDiv.appendChild(ingredientsList);
        cardContentDiv.appendChild(contentDiv);
    
        cardDiv.appendChild(cardImageDiv);
        cardDiv.appendChild(cardContentDiv);
        columnDiv.appendChild(cardDiv);
    
        searchResultSectionEl.appendChild(columnDiv);
    }
    
    randomSearchButton.addEventListener('click', function (event) {
        event.preventDefault();
        runRandomSearchButton();
    });








function displayRandomCocktail(apiData) {
    const drink = apiData.drinks[0];
    const drinkName = drink.strDrink;
    const drinkIngredients = [];


    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column', 'is-two-thirds');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image');

    const figureElement = document.createElement('figure');
    figureElement.classList.add('image', 'is-4by3');

    const drinkImage = document.createElement('img');
    drinkImage.src = drink.strDrinkThumb;
    drinkImage.alt = drinkName;

    figureElement.appendChild(drinkImage);
    cardImageDiv.appendChild(figureElement);

    const cardContentDiv = document.createElement('div');
    cardContentDiv.classList.add('card-content');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const heading = document.createElement('h3');
    heading.textContent = drinkName;

    const ingredientsList = document.createElement('ul');
    drinkIngredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });

    contentDiv.appendChild(heading);
    contentDiv.appendChild(ingredientsList);
    cardContentDiv.appendChild(contentDiv);

    cardDiv.appendChild(cardImageDiv);
    cardDiv.appendChild(cardContentDiv);
    columnDiv.appendChild(cardDiv);

    searchResultSectionEl.appendChild(columnDiv);
}

randomSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();
});



function randomBeer(){
    var randomBeerUrl = "https://api.punkapi.com/v2/beers/random"
    fetch(randomBeerUrl)
        .then(function(response) {
        return response.json();
    })
    .then(function (data) {
          beerTitle.textContent = data[0].name;
          beerDescription.textContent = data[0].description;
          if (data[0].image_url) {
          beerImage.setAttribute("src", data[0].image_url);}
    });
}

randomBeer();  

=======
randomBeer();  

