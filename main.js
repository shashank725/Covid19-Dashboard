const elem = document.getElementById("country-list");

fetch("https://corona-api.com/countries")
  .then((response) => response.json())
  .then((res) =>{
      res.data.map((country) =>{
          const li = document.createElement("Button");
          li.id = country.code;
          li.classList.add("country-name");
          li.innerHTML = `<div class="list-col1">${country.code}</div><div class="list-col2">${country.name}</div><div class="list-col3"><img src="https://www.countryflags.io/${country.code}/flat/32.png"></div>`;
          li.addEventListener("click", () => {
              console.log("hi")
          });
          elem.appendChild(li);
      });
  });