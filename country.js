const countryName = new URL(location).searchParams.get("country");
const countryContainer = document.querySelector(".country-container")

async function getOneCountry() {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  data = await response.json();
  // console.log(data);
  displayCountry(data);
}
getOneCountry();

function displayCountry(c) {
  // console.log(c[0].status);
  const country = document.createElement("div");
  country.classList.add("country-info");
  countryContainer.appendChild(country);

  // console.log(c[0].currencies);
  for (let currency of Array.from(c[0].currencies)){
    console.log(currency);
    console.log("test");
  }

  // country.innerHTML += `
  const display = `
    <img src="${c[0].flags.png}" class="flag"></img>
    <div class="details-country">
      <div class="name-country">${c[0].name.common}</div>
      <div class="infos">
        <div class="left">
          <p class="name item">Native Name: <span>${c[0].name.official}</span></p>
          <p class="population item">Population: <span>${c[0].population}</span></p>
          <p class="region item">Region: <span>${c[0].region}</span></p>
          <p class="sub-region item">Sub Region: <span>${c[0].subregion}</span></p>
          <p class="capital item">Capital: <span>${c[0].capital}</span></p>
        </div>
        <div class="right">
          <div class="domain item">
            Top Level Domain: <span>${c[0].tld}</span>
          </div>
          <div class="currencies item">Currencies: <span>${c[0].currencies}</span></div>
          <div class="languages item">
            Languages: <span>Dutch, French</span>
          </div>
        </div>
      </div>
      <div class="border-country">
        <div class="border-country">
          Border Countries:  
          <span class="card-countries-border">France</span
          ><span class="card-countries-border">France</span>
        </div>
      </div>
    </div>
    `;
  country.innerHTML = display;
}
