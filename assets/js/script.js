// global covid data
let covidGlobalUrl = "https://disease.sh/v3/covid-19/all";

// country covid data
let covidCountryUrl =
  "https://disease.sh/v3/covid-19/countries/{country}?strict=true";

// statewide covid data
let covidStateUrl = "https://disease.sh/v3/covid-19/states/{state}";

//set counter
let i = 0;

//create state search button div container
let stateSearchButtonDivEl = document.querySelector("#stateSearchButtonDiv");

//create state search input div container
let stateSearchBarDivEl = document.querySelector("#stateSearchBarDiv");

// grab popup container
let usaPopupContainerEl = document.querySelector("#usaPopupContainer");

// popup counter
let popUpCount = 0;

// select country info container and set it blank
let countryInfoEl = document.querySelector("#countryInfo");

// select state info container and set it blank
let stateInfoEl = document.querySelector("#stateInfo");

// js functions for homepage dropdown
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, "options");
});

// fetch covid-19 starter information
function fetchUsaCovid() {
  fetch("https://disease.sh/v3/covid-19/countries/usa?strict=true")
    .then(function (response) {
      if (!response.ok) {
        // Request failed, go to catch
        throw Error(response.status); // throw will stop execution of the promise chain and jump to catch
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      displayUsaCovid(data);
    })
    .catch(function (error) {
      var callModal = function () {
        if (error == "Error: 404") {
          modalText.textContent = error + " (content not found)";
        } else {
          modalText.textContent = error;
        }
        modal.style.display = "block";
        console.log(error);
      };
      callModal();
    });
}

// display covid starter info
function displayUsaCovid(data) {
  // clear starter info display
  let starterInfoEl = document.querySelector("#starter-info");
  starterInfoEl.innerHTML = " ";

  // select country info container and set it blank
  let countryInfoEl = document.querySelector("#countryInfo");
  countryInfoEl.innerHTML = " ";
  countryInfoEl.setAttribute("class", "paragraph-container col l4 s12");

  // select state info container and set it blank
  let stateInfoEl = document.querySelector("#stateInfo");
  stateInfoEl.innerHTML = " ";

  // select usa pop up container and set it blank
  usaPopupContainerEl.innerHTML = " ";

  // display country name
  let countryEl = document.createElement("h5");
  countryEl.textContent = data.country;

  //display country population
  let countryPopulationEl = document.createElement("p");
  countryPopulationEl.textContent =
    "Total population of " + data.country + ": " + data.population;

  //display number of people tested for covid
  let countryTestsEl = document.createElement("p");
  countryTestsEl.textContent =
    "Number of People Tested for Covid-19: " + data.tests;

  //display number of people tested per one million people
  let countryTestsPerOneMilEl = document.createElement("p");
  countryTestsPerOneMilEl.textContent =
    "Number of People Tested for Covid-19 per One Million People: " +
    data.testsPerOneMillion;

  // display number of active cases
  let countryActiveCasesEl = document.createElement("p");
  countryActiveCasesEl.textContent =
    "Current Number of Active Cases of Covid-19: " + data.active;

  //display number of per one million people
  let countryActiveCasesPerMilEl = document.createElement("p");
  countryActiveCasesPerMilEl.textContent =
    "Number of Active Cases of Covid-19 per One Million People: " +
    data.activePerOneMillion;

  //display number of critical covid cases
  let countryCriticalCasesEl = document.createElement("p");
  countryCriticalCasesEl.textContent =
    "Current Number of Critical Cases of Covid-19: " + data.critical;

  //display number of critical covid cases per one million people
  let countryCriticalCasesPerMilEl = document.createElement("p");
  countryCriticalCasesPerMilEl.textContent =
    "Number of Critical Cases of Covid-19 per One Million People: " +
    data.criticalPerOneMillion;

  //display number of recoveries
  let countryRecoveredEl = document.createElement("p");
  countryRecoveredEl.textContent =
    "Current Number of Recoveries from Covid-19: " + data.recovered;

  //display number of recoveries per one million people
  let countryRecoveredPerMilEl = document.createElement("p");
  countryRecoveredPerMilEl.textContent =
    "Number of Recoveries from Covid-19 per One Million People: " +
    data.recoveredPerOneMillion;

  //display number of deaths from covid
  let countryDeathsEl = document.createElement("p");
  countryDeathsEl.textContent =
    "Current Number of Deaths caused by Covid-19 : " + data.deaths;

  //display number of deaths per one million people
  let countryDeathsPerMilEl = document.createElement("p");
  countryDeathsPerMilEl.textContent =
    "Number of Deaths caused by Covid-19 per One Million People: " +
    data.deathsPerOneMillion;

  // append country search results to DOM

  countryInfoEl.append(countryEl);
  countryInfoEl.append(countryPopulationEl);
  countryInfoEl.append(countryTestsEl);
  countryInfoEl.append(countryTestsPerOneMilEl);
  countryInfoEl.append(countryActiveCasesEl);
  countryInfoEl.append(countryActiveCasesPerMilEl);
  countryInfoEl.append(countryCriticalCasesEl);
  countryInfoEl.append(countryCriticalCasesPerMilEl);
  countryInfoEl.append(countryRecoveredEl);
  countryInfoEl.append(countryRecoveredPerMilEl);
  countryInfoEl.append(countryDeathsEl);
  countryInfoEl.append(countryDeathsPerMilEl);
  stateInfoEl.removeAttribute("class", "paragraph-container col l4 s12");
}

// fetch 50 states info on load
fetch("https://disease.sh/v3/covid-19/states")
  .then(function (response) {
    if (!response.ok) {
      // Request failed, go to catch
      throw Error(response.statusText); // throw will stop execution of the promise chain and jump to catch
    }
    return response.json();
  })
  .then(function (statesCovidData) {
    console.log(statesCovidData);
    console.log(statesCovidData[1].active);
  })
  .catch(function (error) {
    var callModal = function () {
      if (error == "Error: 404") {
        modalText.textContent = error + " (Country not found)";
      } else if (error == "Error: 400") {
        modalText.textContent = "Please enter in a country.";
      } else {
        modalText.textContent = error;
      }
      modal.style.display = "block";
      console.log(error);
    };
    callModal();
  });

// fetch state covid data
function fetchCovidStateSearch(stateName) {
  fetch("https://disease.sh/v3/covid-19/states/" + stateName)
    .then(function (response) {
      if (!response.ok) {
        // Request failed, go to catch
        throw Error(response.status); // throw will stop execution of the promise chain and jump to catch
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // display state covid data
      displayStateSearch(data);
    })
    .catch(function (error) {
      var callModal = function () {
        if (error == "Error: 404") {
          modalText.textContent = error + " (State not found)";
        } else if (error == "Error: 400") {
          modalText.textContent = "Please enter in a state.";
        } else {
          modalText.textContent = error;
        }
        modal.style.display = "block";
        console.log(error);
      };
      callModal();
    });
}

// display state search response
function displayStateSearch(data) {
  // clear starter info display
  let starterInfoEl = document.querySelector("#starter-info");
  starterInfoEl.innerHTML = " ";

  // select country info container and set it blank
  countryInfoEl.innerHTML = " ";

  // select state info container and set it blank
  stateInfoEl.innerHTML = " ";

  // display state name
  let stateEl = document.createElement("h5");
  stateEl.textContent = data.state;

  //display state population
  let statePopulationEl = document.createElement("p");
  statePopulationEl.textContent =
    "Total population of " + data.state + ": " + data.population;

  //display number of people tested for covid
  let stateTestsEl = document.createElement("p");
  stateTestsEl.textContent =
    "Number of People Tested for Covid-19: " + data.tests;

  //display number of people tested per one million people
  let stateTestsPerOneMilEl = document.createElement("p");
  stateTestsPerOneMilEl.textContent =
    "Number of People Tested for Covid-19 per One Million People: " +
    data.testsPerOneMillion;

  // display number of active cases
  let stateActiveCasesEl = document.createElement("p");
  stateActiveCasesEl.textContent =
    "Current Number of Active Cases of Covid-19: " + data.active;

  //display number of per one million people
  let stateActiveCasesPerMilEl = document.createElement("p");
  stateActiveCasesPerMilEl.textContent =
    "Number of Active Cases of Covid-19 per One Million People: " +
    data.activePerOneMillion;

  //display number of critical covid cases
  let stateCriticalCasesEl = document.createElement("p");
  stateCriticalCasesEl.textContent =
    "Current Number of Critical Cases of Covid-19: " + data.critical;

  //display number of critical covid cases per one million people
  let stateCriticalCasesPerMilEl = document.createElement("p");
  stateCriticalCasesPerMilEl.textContent =
    "Number of Critical Cases of Covid-19 per One Million People: " +
    data.criticalPerOneMillion;

  //display number of recoveries
  let stateRecoveredEl = document.createElement("p");
  stateRecoveredEl.textContent =
    "Current Number of Recoveries from Covid-19: " + data.recovered;

  //display number of recoveries per one million people
  let stateRecoveredPerMilEl = document.createElement("p");
  stateRecoveredPerMilEl.textContent =
    "Number of Recoveries from Covid-19 per One Million People: " +
    data.recoveredPerOneMillion;

  //display number of deaths from covid
  let stateDeathsEl = document.createElement("p");
  stateDeathsEl.textContent =
    "Current Number of Deaths caused by Covid-19 : " + data.deaths;

  //display number of deaths per one million people
  let stateDeathsPerMilEl = document.createElement("p");
  stateDeathsPerMilEl.textContent =
    "Number of Deaths caused by Covid-19 per One Million People: " +
    data.deathsPerOneMillion;

  // append content to page
  stateInfoEl.append(stateEl);
  stateInfoEl.append(statePopulationEl);
  stateInfoEl.append(stateTestsEl);
  stateInfoEl.append(stateTestsPerOneMilEl);
  stateInfoEl.append(stateActiveCasesEl);
  stateInfoEl.append(stateActiveCasesPerMilEl);
  stateInfoEl.append(stateCriticalCasesEl);
  stateInfoEl.append(stateCriticalCasesPerMilEl);
  stateInfoEl.append(stateRecoveredEl);
  stateInfoEl.append(stateRecoveredPerMilEl);
  stateInfoEl.append(stateDeathsEl);
  stateInfoEl.append(stateDeathsPerMilEl);
  fetchUsaPopup();
}

// get usa covid info for popup
function fetchUsaPopup() {
  fetch("https://disease.sh/v3/covid-19/countries/usa?strict=true")
    .then(function (response) {
      if (!response.ok) {
        // Request failed, go to catch
        throw Error(response.status); // throw will stop execution of the promise chain and jump to catch
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      popUpCount++;
      displayUsaPopup(data);
    })
    .catch(function (error) {
      var callModal = function () {
        if (error == "Error: 404") {
          modalText.textContent = error + " (Country not found) 4";
        } else if (error == "Error: 400") {
          modalText.textContent = "Please enter in a country.";
        } else {
          modalText.textContent = error;
        }
        modal.style.display = "block";
        console.log(error);
      };
      callModal();
    });
}

// display usa covid info for poppup
function displayUsaPopup(data) {
  if (popUpCount < 2) {
    // display country name
    let usaEl = document.createElement("h5");
    usaEl.textContent = data.country;

    //display usa population
    let usaPopulationEl = document.createElement("p");
    usaPopulationEl.textContent =
      "Total population of " + data.country + ": " + data.population;

    //display number of people tested for covid
    let usaTestsEl = document.createElement("p");
    usaTestsEl.textContent =
      "Number of People Tested for Covid-19: " + data.tests;

    // display number of active cases
    let usaActiveCasesEl = document.createElement("p");
    usaActiveCasesEl.textContent =
      "Current Number of Active Cases of Covid-19: " + data.active;

    stateInfoEl.setAttribute("class", "paragraph-container col l4 s12");
    countryInfoEl.removeAttribute("class", "paragraph-container col l4 s12");

    //display number of deaths from covid
    let usaDeathsEl = document.createElement("p");
    usaDeathsEl.textContent =
      "Current Number of Deaths caused by Covid-19 : " + data.deaths;

    usaPopupContainerEl.append(usaEl);
    usaPopupContainerEl.append(usaPopulationEl);
    usaPopupContainerEl.append(usaTestsEl);
    usaPopupContainerEl.append(usaActiveCasesEl);
    usaPopupContainerEl.append(usaDeathsEl);
  }
}

// fetch country coordinate
function fetchCountryCoordinate(userCountrySearch) {
  fetch(
    "https://api.opencagedata.com/geocode/v1/json?q=" +
      userCountrySearch +
      "&key=1f298402f9764572995564fe8aad4f5f"
  )
    .then(function (response) {
      if (!response.ok) {
        // Request failed, go to catch
        throw Error(response.status); // uthrow will stop execution of the promise chain and jump to catch
      }
      return response.json();
    })
    .then(function (countryCoordinates) {
      console.log(countryCoordinates);
    })
    .catch(function (error) {
      var callModal = function () {
        if (error == "Error: 400") {
          modalText.textContent = "Please enter in a country.";
        } else if (error == "Error: 404") {
          modalText.textContent = error + "(Country not found)";
        } else {
          modalText.textContent = error;
        }
        modal.style.display = "block";
        console.log(error);
      };
      callModal();
    });
}

// fetch location coordinate
function fetchStateCoordinate(userStateSearch) {
  fetch(
    "https://api.opencagedata.com/geocode/v1/json?q=" +
      userStateSearch +
      "&key=1f298402f9764572995564fe8aad4f5f"
  )
    .then(function (response) {
      if (!response.ok) {
        // Request failed, go to catch
        throw Error(response.status); // throw will stop execution of the promise chain and jump to catch
      }
      return response.json();
    })
    .then(function (stateCoordinates) {
      console.log(stateCoordinates);
    })
    .catch(function (error) {
      var callModal = function () {
        if (error == "Error: 404") {
          modalText.textContent = error + " (Please enter in a state)";
        } else if (error == "Error: 400") {
          modalText.textContent = "Please enter in a state.";
        } else {
          modalText.textContent = error;
        }
        modal.style.display = "block";
      };
      callModal();
    });
}

// feature: {
//   id: 12,
//   properties: {
//     name: 'Arizona',
//     density: 25808
//     activeCase: 5080383
//   }
// }

// fetch 50 states info on load
fetch("https://disease.sh/v3/covid-19/states")
  .then(function (response) {
    if (!response.ok) {
      // Request failed, go to catch
      throw Error(response.statusText); // throw will stop execution of the promise chain and jump to catch
    }
    return response.json();
  })
  .then((statesCovidData) => {
    // loop through statesCovidData and statesData 
    for (let i = 0; i < statesCovidData.length; i++) {
      for (let j = 0; j < statesData.features.length; j++) {
        // if the state endpoint of the covid api and the name endpoint of the map api match, add the value of the active case endpoint from the covid api to the matching state's property in statesData, after density
        if (
          statesCovidData[i].state.toUpperCase() ===
          statesData.features[j].properties.name.toUpperCase()
        ) {
          statesData.features[j].properties.activeCase = statesCovidData[i].active;
            // apply colors based off of active cases
            geojson.resetStyle()
            
        }
      }
    }
    console.log(statesData);
  })

  .catch(function (error) {
    var callModal = function () {
      if (error == "Error: 404") {
        modalText.textContent = error + " (Unable to Fetch Covid-19 Data) ";
      } else if (error == "Error: 400") {
        modalText.textContent = "Please reload the page";
      } else {
        modalText.textContent = error;
      }
      modal.style.display = "block";
      console.log(error);
    };
    callModal();
  });

//mapstart
// mapbox access token
let mapboxAccessToken =
  "pk.eyJ1IjoiYWlkYW5ndWFybmllcmUiLCJhIjoiY2todjRrdm9iMWgwZzJ0bnR6eWJ1djdzbSJ9._gO22A8Df-Mwc20rdnz74Q";
let mymap = L.map("mapid").setView([45, -100],3);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
    mapboxAccessToken,
  {
    id: "mapbox/light-v9",
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);
L.geoJson(statesData).addTo(mymap);
// console.log(statesData);

// 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' +
//   mapboxAccessToken

// define geojson variable
let geojson;

// color map based off of population density

function getColor(d) {
  return d > 200000
    ? "#800026"
    : d > 150000
    ? "#BD0026"
    : d > 100000
    ? "#E31A1C"
    : d > 75000
    ? "#FC4E2A"
    : d > 50000
    ? "#FD8D3C"
    : d > 25000
    ? "#FEB24C"
    : d > 10000
    ? "#FED976"
    : "#FFEDA0";
}

// display colors on map
function style(feature) {
  return {
    fillColor: getColor(feature.properties.activeCase),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.4,
  };
}
// apply colors based off of pop density to map
L.geoJson(statesData, { style: style }).addTo(mymap);


// add hover interaction
function highlightFeature(e) {
  
  let layer = e.target;
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "", 
    fillOpacity: 0.7,
  });

  info.update(layer.feature.properties);

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

// mouseout of hover
function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

// click to zoom
function zoomToFeature(e) {
  mymap.fitBounds(e.target.getBounds());
  let stateName = e.target.feature.properties.name;
  console.log(stateName);
  fetchCovidStateSearch(stateName);
}

// display state info on hover
var info = L.control();

info.onAdd = function (mymap) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    "<h4>US Active Covid-19 Cases</h4>" +
    (props
      ? "<b>" +
        props.name +
        "</b><br />" +
        props.activeCase +
        " active Covid-19 cases " +
        "<br></br>" +
        props.density +
        " people / mi<sup>2</sup>"
      : "Hover over a state");
};

info.addTo(mymap);

// apply listeners to state layers
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    touchstart: zoomToFeature,highlightFeature,
    click: zoomToFeature
    
  });
}
geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(mymap);

// create map legend
var legend = L.control({ position: "bottomright" });

legend.onAdd = function (mymap) {
  let div = L.DomUtil.create("div", "info legend"),
    grades = [0, 5000, 10000, 50000, 75000, 100000, 150000, 200000],
    labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  for (let i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<div class="legendItem"><i style="background:' +
      getColor(grades[i] + 1) +
      '"></i><p>' +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "</p></div>" : "+");
  }

  return div;
};

legend.addTo(mymap);
// map end
