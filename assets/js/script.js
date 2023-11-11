var AlcoholInputEl = document.querySelector('#alcoholInput');
var NameSearchEl = document.querySelector('#namesearch');

document.querySelector('form.cocktailSearchInput').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(AlcoholInputEl.value);
    console.log(NameSearchEl.value);
    runCocktailSearch();
});

// var basicAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
// var searchParam = 'vodka'; 
// var url = '${basicAPI}?s=${searchParam}';

// function runCocktailSearch () {
// fetch(url)
//     .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   });
  
// }