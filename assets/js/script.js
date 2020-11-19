// global covid data
let covidGlobalUrl = 'https://disease.sh/v3/covid-19/all' 
// country covid data 
let covidCountryUrl = 'https://disease.sh/v3/covid-19/countries/{country}?strict=true'
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
  countriesEl.textContent = "Affected Countries: " + data.affectedCountries

  // display total active cases starter data
  let ActiveEl = document.querySelector("#total-cases")
  ActiveEl.textContent =  "Active Cases: " + data.active 

  // display total active cases per one million people starter data
  let ActivePerOneMilEl = document.querySelector("#total-per-one-mil")
  ActivePerOneMilEl.textContent = "Total Active Cases per One Million People: " + data.activePerOneMillion

  // display total deaths starter data
  let DeathsEl = document.querySelector("#total-deaths")
  DeathsEl.textContent = "Total Deaths: " + data.deaths

  // display total deaths per one million people starter data
  // let DeathsPerOneMilEl= document.querySelector("#total-deaths-per-one-mil")
  // DeathsPerOneMilEl.textContent = "Total Deaths from Covid-19 per One Million People: " + data.deathsPerOneMillion

  // display total recovered starter data
  let RecoveredEl = document.querySelector("#total-recovered")
  RecoveredEl.textContent = "Number of People Recovered: " + data.recovered

  // display total recovered per one million starter data
  // let RecoveredPerOneMillionEl = document.querySelector("#total-recovered-per-one-mil")
  // RecoveredPerOneMillionEl.textContent = "Number of People Recovered:  " + data.recoveredPerOneMillion

  // display new cases today starter data
  let CasesTodayEl = document.querySelector("#total-cases-today")
  CasesTodayEl.textContent = "New Cases Today: " + data.todayCases

  // display new deaths today starter data
  let deathsTodayEL = document.querySelector("#total-deaths-today")
  deathsTodayEL.textContent = "Number of New Deaths Today: " + data.todayDeaths

  // display new recoveries today starter data
  let recoveriesTodayEL = document.querySelector("#total-recovered-today")
  recoveriesTodayEL.textContent = "Number of New Recoveries Today: " + data.todayRecovered


}

// submit country search button 
document
  .querySelector("#country-button")
  .addEventListener("click", countrySearch);

// store user country search and send to fetchCovidSearchCountry
function countrySearch(){
  let userCountrySearch = document.querySelector('#countryInput').value;
  fetchCovidSearchCountry(userCountrySearch);
}


// fetch country wide covid data based off of userCountrySearch
function fetchCovidSearchCountry(userCountrySearch){
  fetch('https://disease.sh/v3/covid-19/countries/'
  +userCountrySearch+
  '?strict=true')
    .then(function (response) {
      if (!response.ok) { // Request failed, go to catch
        throw Error(response.statusText); // throw will stop execution of the promise chain and jump to catch
      }
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      displayCountryInfo(data);
      
    })
    .catch(function (error) {
      alert(error);
    });
}

function displayCountryInfo(data) {
  // clear starter info display
  let starterInfoEl = document.querySelector("#starter-info")
  starterInfoEl.innerHTML = " ";

  // select country info country container and set it blank
  let countryInfoEl = document.querySelector("#countryInfo")
  countryInfoEl.innerHTML = " ";
  // select country info main container and set in blank
  let countryInfoMainEl = document.querySelector("#countryInfoMain")
  countryInfoMainEl.innerHTML = " ";

  // display country name
  let countryEl = document.createElement("h5");
  countryEl.textContent = data.country

  //display country population
  let countryPopulationEl = document.createElement("h6");
  countryPopulationEl.textContent= "Total population of " + data.country + ": " + data.population

  //display number of people tested for covid
  let countryTestsEl = document.createElement("p");
  countryTestsEl.textContent= "Number of People Tested for Covid-19: " + data.tests

  //display number of people tested per one million people
  let countryTestsPerOneMilEl = document.createElement("p");
  countryTestsPerOneMilEl.textContent= "Number of People Tested for Covid-19 per One Million People: " + data.testsPerOneMillion

  // display number of active cases
  let countryActiveCasesEl = document.createElement("p");
  countryActiveCasesEl.textContent = "Current Number of Active Cases of Covid-19: " + data.active

   //display number of per one million people
   let countryActiveCasesPerMilEl = document.createElement("p");
   countryActiveCasesPerMilEl.textContent= "Number of Active Cases of Covid-19 per One Million People: " + data.activePerOneMillion
  
  //display number of critical covid cases
  let countryCriticalCasesEl = document.createElement("p");
  countryCriticalCasesEl.textContent= "Current Number of Critical Cases of Covid-19: " + data.critical

   //display number of critical covid cases per one million people
   let countryCriticalCasesPerMilEl = document.createElement("p");
   countryCriticalCasesPerMilEl.textContent= "Number of Critical Cases of Covid-19 per One Million People: " + data.criticalPerOneMillion

  //display number of recoveries
  let countryRecoveredEl = document.createElement("p");
  countryRecoveredEl.textContent= "Current Number of Recoveries from Covid-19: " + data.recovered

  //display number of recoveries per one million people
  let countryRecoveredPerMilEl = document.createElement("p");
  countryRecoveredPerMilEl.textContent= "Number of Recoveries from Covid-19 per One Million People: " + data.recoveredPerOneMillion

  //display number of deaths from covid
  let countryDeathsEl = document.createElement("p");
  countryDeathsEl.textContent= "Current Number of Deaths caused by Covid-19 : " + data.deaths

  //display number of deaths per one million people
  let countryDeathsPerMilEl = document.createElement("p");
  countryDeathsPerMilEl.textContent= "Number of Deaths caused by Covid-19 per One Million People: " + data.deathsPerOneMillion

  
  // append country search results to DOM
  countryInfoEl.append(countryEl);
  countryInfoMainEl.append(countryPopulationEl);
  countryInfoMainEl.append(countryTestsEl);
  countryInfoMainEl.append(countryTestsPerOneMilEl);
  countryInfoMainEl.append(countryActiveCasesEl);
  countryInfoMainEl.append(countryActiveCasesPerMilEl);
  countryInfoMainEl.append(countryCriticalCasesEl);
  countryInfoMainEl.append(countryCriticalCasesPerMilEl);
  countryInfoMainEl.append(countryRecoveredEl);
  countryInfoMainEl.append(countryRecoveredPerMilEl);
  countryInfoMainEl.append(countryDeathsEl);
  countryInfoMainEl.append(countryDeathsPerMilEl);  
  
}