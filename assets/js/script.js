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
    
    displayCovidStarter(data);
    
  })
  .catch(function (error) {
    alert(error);
  });  
}

fetchCovid()
// display covid starter info
function displayCovidStarter(data){

  let countriesEl = document.querySelector("#affected-countries")
  countriesEl.textContent = "Number of Affected Countries: " + data.affectedCountries


  let ActiveEl = document.querySelector("#total-cases")
  ActiveEl.textContent =  "Total Active Cases: (global): " + data.active 

  let ActivePerOneMilEl = document.querySelector("#total-per-one-mil")
  ActivePerOneMilEl.textContent = "Total Active Cases per One Million People (global): " + data.activePerOneMillion

  let DeathsEl = document.querySelector("#total-deaths")
  DeathsEl.textContent = "Total Deaths (global) " + data.deaths

  let DeathsPerOneMilEl= document.querySelector("#total-deaths-per-one-mil")
  DeathsPerOneMilEl.textContent = "Total Deaths from Covid-19 per One Million People (global): " + data.deathsPerOneMillion

  let RecoveredEl = document.querySelector("#total-recovered")
  RecoveredEl.textContent = "Number of People Recovered from Covid 19 (global): " + data.recovered

  let RecoveredPerOneMillionEl = document.querySelector("#total-recovered-per-one-mil")
  RecoveredPerOneMillionEl.textContent = "Number of People Recovered from Covid 19:  " + data.recoveredPerOneMillion

  let CasesTodayEl = document.querySelector("#total-cases-today")
  CasesTodayEl.textContent = "Number of Cases Today: " + data.todayCases

  let deathsTodayEL = document.querySelector("#total-deaths-today")
  deathsTodayEL.textContent = "Number of Deaths Today: " + data.todayDeaths

  let recoveriesTodayEL = document.querySelector("#total-recovered-today")
  recoveriesTodayEL.textContent = "Number of Recoveries Today: " + data.todayRecovered


}