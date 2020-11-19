// global covid data
let covidGlobalUrl = 'https://disease.sh/v3/covid-19/all' 
// national covid data 
let covidNationalUrl = 'https://disease.sh/v3/covid-19/countries/{country}?strict=true'
// statewide covid data 
let covidStateUrl = 'https://disease.sh/v3/covid-19/states/{state}'
 


 
// js functions for homepage dropdown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, 'options');
  });

// fetch covid-19 starter information
function fetchCovidStarter() {
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

fetchCovidStarter()



// display covid starter info
function displayCovidStarter(data){

  // display affected countries starter data
  let countriesEl = document.querySelector("#affected-countries")
  countriesEl.textContent = "Number of Affected Countries: " + data.affectedCountries

  // display total active cases starter data
  let ActiveEl = document.querySelector("#total-cases")
  ActiveEl.textContent =  "Total Active Cases: (global): " + data.active 

  // display total active cases per one million people starter data
  let ActivePerOneMilEl = document.querySelector("#total-per-one-mil")
  ActivePerOneMilEl.textContent = "Total Active Cases per One Million People (global): " + data.activePerOneMillion

  // display total deaths starter data
  let DeathsEl = document.querySelector("#total-deaths")
  DeathsEl.textContent = "Total Deaths (global) " + data.deaths

  // display total deaths per one million people starter data
  let DeathsPerOneMilEl= document.querySelector("#total-deaths-per-one-mil")
  DeathsPerOneMilEl.textContent = "Total Deaths from Covid-19 per One Million People (global): " + data.deathsPerOneMillion

  // display total recovered starter data
  let RecoveredEl = document.querySelector("#total-recovered")
  RecoveredEl.textContent = "Number of People Recovered from Covid 19 (global): " + data.recovered

  // display total recovered per one million starter data
  let RecoveredPerOneMillionEl = document.querySelector("#total-recovered-per-one-mil")
  RecoveredPerOneMillionEl.textContent = "Number of People Recovered from Covid 19:  " + data.recoveredPerOneMillion

  // display new cases today starter data
  let CasesTodayEl = document.querySelector("#total-cases-today")
  CasesTodayEl.textContent = "Number of New Cases Today: " + data.todayCases

  // display new deaths today starter data
  let deathsTodayEL = document.querySelector("#total-deaths-today")
  deathsTodayEL.textContent = "Number of New Deaths Today: " + data.todayDeaths

  // display new recoveries today starter data
  let recoveriesTodayEL = document.querySelector("#total-recovered-today")
  recoveriesTodayEL.textContent = "Number of New Recoveries Today: " + data.todayRecovered


}