var covidTotalUrl = 'https://disease.sh/v3/covid-19/all' 



// js functions for homepage dropdown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, 'options');
  });

// fetch covid-19 information
function fetchCovid() {
fetch('https://disease.sh/v3/covid-19/all')
  .then(function (response) {
    if (!response.ok) { // Request failed, go to catch
      throw Error(response.statusText); // throw will stop execution of the promise chain and jump to catch
    }
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    
    displayCovidTotal(data);
    
  })
  .catch(function (error) {
    alert(error);
  });  
}

fetchCovid()

function displayCovidTotal(data){
  var totalEl = document.querySelector("#total-cases")
  totalEl.textContent =  "Total Active Cases: (global): " + data.active 

}