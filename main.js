fetch("https://corona-api.com/countries")
  .then((response) => response.json())
  .then((res) =>{
      res.data.map((country) =>{
          const li = document.createElement("Button");
          li.id = country.code;
          li.classList.add("country-name");
          li.innerHTML = `${country code}`
  })