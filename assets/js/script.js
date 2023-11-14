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

    
