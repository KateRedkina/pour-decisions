var AlcoholInputEl = document.querySelector('#alcoholInput');
var NameSearchEl = document.querySelector('#namesearch');

document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(AlcoholInputEl.value);
    console.log(NameSearchEl.value);
    runCocktailSearch();
});

function runCocktailSearch () {
    var AlcoholsearchParam = AlcoholInputEl.value; 
    var AlcoholURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + AlcoholsearchParam;
    
    console.log(AlcoholURL)
    fetch(AlcoholURL)
        .then(function (response) {
           console.log(response);
        });
    var NamesearchParam = NameSearchEl.value; 
    var NameURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + AlcoholInputEl;
          
    console.log(NameURL)
    fetch(NameURL)
        .then(function (response) {
            console.log(response);
        });
    }


var RandomSearchButton = document.querySelector('#randomsearch');
var SearchResult = document.querySelector('#searchresult');

document.getElementById('RandomSearchButton').addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();

});

function runRandomSearchButton() {

   

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(results => results.json())
        .then(apiData => {
            console.log(apiData);
//            displayResults(apiData);
        });
}


//function displayResults(data) {
//    var drinkName = data.Coctails[1].Recipies;

//    var resultParagraph = document.createElement('p');
//    resultParagraph.textContent = `Random Search: ${drinkName}`;

//    SearchResult.innerHTML = '';
//    SearchResult.appendChild(resultParagraph);

    
// Saved Favorites
function saveToFavorites() {
    //Get image source and name
    var imageElement = document.getElementById('image');
    var imageSrc = imageElement.src;
    var imageName = imageElement.alt;

    //Create a list item
    var listItem = document.createElement('li');
    listItem.innerHTML = '<img src="' + imageSrc + '" alt="' + imageName + '"> ' + imageName;

    //append the list item to the favorites list

    document.getElementById('favoritesList').appendChild(listItem);


// event listener for mouseenter effect    
    listItem.addEventListener('mouseenter',
    function() {
        showRemoveButton(listItem);
    });
   
    listItem.addEventListener('mouseLeave',
    function() {
        hideRemoveButton(listItem);
    });
    favoriteList.appendChild(listItem);
    saveToFavorites(newFavorite);
}




// saves to favorites
function saveToFavorites(favorite) {
   let favorites = localStorage.getItem('favoritesList') ?
   JSON.parse(localStorage.getItem('favoritesList')) : [];
   favorites.push(favorite);
   localStorage.setItem('favoritesList', JSON.stringify(favorites));
}




// button icon gets event listener for click
function showRemoveButton(item) {
    var removeButton = document.createElement('button');
    removeButton.textContent = '❤️';
    removeButton.addEventListener('click',
    function() {
        removeFavorite(item);
    });
    item.appendChild(removeButton);
}




function hideRemoveButton(item) {
    item.removeChild(item.lastChild);
}


// removes item from localStorage
function removeFavorite(item) {
    var favoriteList = document.getElementById('favoritesList');
    var favorites = JSON.parse(localStorage.getItem('Favorites'));
    var text = item.textContent;
    var index = favorites.indexOf(text);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favoritesList',
        JSON.stringify(favorites));
    }
    favoriteList.removeChild(item);
}




// items stay when page is refreshed
window.onload = function() {
    let favorites = localStorage.getItem('favorites') ?
    JSON.parse(localStorage.getItem('Favorites')) : [];
    var favoriteList = document.getElementById('favoritesList');
    favorites.forEach(function(favorite) {
        var listItem = document.createElement('li');


        listItem.appendChild(document.createTextNode(favorite));


        listItem.addEventListener('mouseenter',
        function() {
            showRemoveButton(listItem);
        });


        listItem.addEventListener('mouseleave',
        function() {
            hideRemoveButton(listItem);
        });


        favoriteList.appendChild(listItem);


    });


};
