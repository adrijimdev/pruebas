//Esta función incrementa en 1 el valor de page, realizando una petición a la página siguiente de la api
function nextPage() {
    page++;
    let content = "";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES&page=${page}`)
    .then(response => {
      return response.json();
    })
    //En este caso hemos declarado una variable content. Esta variable contendrá el nuevo código html que mostrará la web
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        content += `<li>${data.results[i].title}</li>`;
      }
      //Sobrescribimos el html interno de la etiqueta ul mostrando las nuevas películas recibidas
      ul.innerHTML = content;
    })
    .catch(error => {
      console.error(error);
    });
  
  }
  
  //Esta función disminuye en 1 el valor de page, realizando una petición a la página anterior de la api
  function previousPage() {
    page--;
    let content = "";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES&page=${page}`)
    .then(response => {
      return response.json();
    })
    //En este caso hemos declarado una variable content. Esta variable contendrá el nuevo código html que mostrará la web
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        content += `<li>${data.results[i].title}</li>`;
      }
      //Sobrescribimos el html interno de la etiqueta ul mostrando las nuevas películas recibidas
      ul.innerHTML = content;
    })
    .catch(error => {
      console.error(error);
    });
  }