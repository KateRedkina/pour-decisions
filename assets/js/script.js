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