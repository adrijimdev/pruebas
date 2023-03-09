let similarSeries = document.createElement("div");
  similarSeries.id = "series-list";
  container.appendChild(similarSeries);
  let list = document.getElementById("series-list");
  fetch(`https://api.themoviedb.org/3/tv/${idSerie}/similar?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES&page=1`)
  .then(response => {
    response.json();
  })
  .then(data => {
    for (let i = 0; i < 5; i++) {
      let divSerie = document.createElement("div");
      divSerie.className = "similar-serie";
      divSerie.id = data.results[i].id;
      divSerie.onclick = function() {
        showSerieInfo(data.results[i].id);
      };
      let img = document.createElement("img");
      img.className = "poster";
      img.src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
      img.alt = data.results[i].title;
      let divSerieFooter = document.createElement("div");
      divSerieFooter.className = "serie-footer";
      let footerTitle = document.createElement("div");
      footerTitle.className = "title";
      footerTitle.innerText = data.results[i].original_name;
      divSerieFooter.appendChild(footerTitle);
      divSerie.appendChild(img);
      divSerie.appendChild(divSerieFooter);
      list.appendChild(divSerie);
    }
  })
  .catch(error => {
    console.error(error);
  });