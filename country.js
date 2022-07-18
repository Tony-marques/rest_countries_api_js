const countryName = new URL(location).searchParams.get("country");
// console.log(countryName);
// console.log(location);
const countryContainer = document.querySelector(".country-container");

async function getOneCountry() {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  data = await response.json();
  displayCountry(data);
}
getOneCountry();

function displayCountry(c) {
  const country = document.createElement("div");
  country.classList.add("country-info");
  countryContainer.appendChild(country);

  let currencyHtml = [];
  for (const currency of Object.entries(c[0].currencies)) {
    currencyHtml.push(currency[1].name);
  }

  let languageHtml = [];
  for (const language of Object.entries(c[0].languages)) {
    languageHtml.push(language[1]);
  }

  let borderHtml = [];
  if (c[0].borders == undefined) {
    borderHtml = "";
  } else if (c[0].borders.length > 0) {
    for (const border of c[0].borders) {
      borderHtml.push(border);
    }
  }

  const display = `
    <img src="${c[0].flags.png}" class="flag"></img>
    <div class="details-country">
      <div class="name-country">${c[0].name.common}</div>
      <div class="infos">
        <div class="left">
          <p class="name item">Native Name: <span>${
            c[0].name.official
          }</span></p>
          <p class="population item">Population: <span>${c[0].population.toLocaleString(
            "en-US"
          )}</span></p>
          <p class="region item">Region: <span>${c[0].region}</span></p>
          <p class="sub-region item">Sub Region: <span>${
            c[0].subregion
          }</span></p>
          <p class="capital item">Capital: <span>${c[0].capital}</span></p>
        </div>
        <div class="right">
          <div class="domain item">
            Top Level Domain: <span>${c[0].tld}</span>
          </div>
          <div class="currencies item">Currencies: <span>${currencyHtml.join(
            ", "
          )}</span></div>
          <div class="languages item">
            Languages: <span>${languageHtml.join(", ")}</span>
          </div>
        </div>
      </div>
      <div class="border">
        <div class="border-country">
          Border Countries:  ${borderHtml.length > 1 ? borderHtml
            .map((b) => {
              return `<span class="card-countries-border">${b}</span >`;
            })
            .join(" ") : "No countries"}
        </div>
      </div>
    </div>
    `;
  // if (c[0].borders) {
  //   // const countriesBorder = ;
  //   // console.log(countriesBorder);
  //   c[0].borders.forEach((b) => {
  //     const border = document.createElement("span");
  //     border.classList.add("card-countries-border");
  //     // console.log(b);
  //     border.innerText = b;
  //     // console.log(border);
  //     document.querySelector(".border-country").appendChild(border);
  //   });

  country.innerHTML = display;
}
