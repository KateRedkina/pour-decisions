var alcoholInputEl = document.querySelector('#alcoholInput');
var nameSearchEl = document.querySelector('#nameSearch');
var beerTitle = document.querySelector('#beerTitle');
var beerImage = document.querySelector('#beerImage');
var beerDescription = document.querySelector('#beerDescription');
var randomSearchButton = document.querySelector('#randomSearchButton');
var searchResult = document.querySelector('#searhResult');

document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(alcoholInputEl.value);
    console.log(nameSearchEl.value);
    runCocktailSearch();
});

function runCocktailSearch () {
    var alcoholSearchParam = alcoholInputEl.value; 
    var alcoholURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + alcoholSearchParam;    
    console.log(alcoholURL)
    fetch(alcoholURL)
        .then(function (response) {
           console.log(response);
        });
    var nameSearchParam = nameSearchEl.value; 
    var nameURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + alcoholInputEl;          
    console.log(nameURL)
    fetch(nameURL)
        .then(function (response) {
            console.log(response);
        });
    }

randomSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    runRandomSearchButton();
});

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
        .then(function(response){
        return response.json();
    })
    .then(function (data) {
          beerTitle.textContent = data[0].name;
          beerImage.setAttribute("src", data[0].image_url);
          beerDescription.textContent = data[0].description;
    });
}
randomBeer();  

// ===Modal Box===
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  });