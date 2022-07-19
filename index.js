const countriesCountainer = document.querySelector(".countries-container");
const select = document.querySelector("select");
const inputSearchCountries = document.querySelector(".input-group input");

let dataCountries;

(async () => {
  getAllCountries();
})();

inputSearchCountries.addEventListener("input", searchCountry);

async function getAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  data = await response.json();
  dataCountries = await sortCountries(data);
  displayCountries(dataCountries);
}

function sortCountries(countries) {
  const sort = countries.sort((a, b) => {
    return a.name.common < b.name.common ? -1 : 0;
  });
  return sort;
}

function displayCountries(countries) {
  for (let c of countries) {
    const country = document.createElement("div");
    country.classList.add("country");
    countriesCountainer.appendChild(country);
    // country.innerHTML += `
    const display = `
      <a href="./country.html?country=${c.name.common.toLowerCase()}">
        <img class="flag" src="${c.flags.png}"></img>
        <div class="country-details">
          <div class="country-name">${c.name.common}</div>
          <div class="country-more-details">
            <div class="country-population item">
              Population: <span>${c.population.toLocaleString("en-US")}</span>
            </div>
            <div class="country-region item">Region: <span>${
              c.region
            }</span></div>
            <div class="country-capital item">
              Capital: <span>${c.capital ? c.capital : "No capital"}</span>
            </div>
          </div>
        </div>
      </a>
      `;
    country.innerHTML = display;
  }
}

function searchCountry(e) {
  document.querySelector(".countries-container").innerHTML = "";
  const search = e.target.value.toLowerCase();
  const filter = dataCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(search);
  });
  displayCountries(filter);
}

select.addEventListener("change", (e) => {
  filterByRegion(select.value);
});

function filterByRegion(region) {
  document.querySelector(".countries-container").innerHTML = "";

  let filterCountryByRegion;

  if (region == "america") {
    filterCountryByRegion = dataCountries.filter((country) => {
      return country.region.toLowerCase() == "americas";
    });
  } else if (region == "all") {
    filterCountryByRegion = dataCountries;
  } else {
    filterCountryByRegion = dataCountries.filter((country) => {
      return country.region.toLowerCase() == region.toLowerCase();
    });
  }
  displayCountries(filterCountryByRegion);
}
