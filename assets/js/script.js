var AlcoholInputEl = document.querySelector('#alcoholInput');
var NameSearchEl = document.querySelector('#namesearch');

document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(AlcoholInputEl.value);
    console.log(NameSearchEl.value);
    runCocktailSearch();
});

function runCocktailSearch () {
    var searchParam = AlcoholInputEl.value; 
    var url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    
    console.log(url)
    fetch(url)
        .then(function (response) {
           console.log(response);
          });
    }