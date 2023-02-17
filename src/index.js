//  PÁGINA DE PELÍCULA/SERIE/JUEGO/LIBRO. 550 deberá cambiarse por la id de la película sobre la que se haga click en la web. Adaptar código a necesidades
//  fetch('https://api.themoviedb.org/3/movie/550?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // console.log(data);
//     let title = document.getElementById("title");
//     title.innerText = data.title;
//     let cover = document.getElementById("cover");
//     cover.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.poster_path}`);
//     cover.setAttribute('alt', `Portada de ${data.title}`);
//     let overview = document.getElementById("overview");
//     overview.innerText = data.overview;
    
//   })
//   .catch(error => {
//     console.error(error);
//   });

fetch('https://api.themoviedb.org/3/movie/changes?api_key=039e4f7f61c4c831908c02f8c3e9aba0')
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data);
    let idList = [];
    foreach (id in data) {
      idList.push(data.id)
    }
    // foreach (id in idList) {
    let list = document.getElementById("movie-list");
    for (let i = 0; i < 4; i++) {
      let movie = getMovies(idList[i]);
      let li = document.createElement('li');
      li.innerText = movie.title;
      list.appendChild(li);
        
    }
    // let title = document.getElementById("title");
    // title.innerText = data.title;
    // let cover = document.getElementById("cover");
    // cover.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.poster_path}`);
    // cover.setAttribute('alt', `Portada de ${data.title}`);
    // let overview = document.getElementById("overview");
    // overview.innerText = data.overview;
    
  })
  .catch(error => {
    console.error(error);
  });

  function getMovies(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      // let title = document.getElementById("title");
      // title.innerText = data.title;
      // let cover = document.getElementById("cover");
      // cover.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.poster_path}`);
      // cover.setAttribute('alt', `Portada de ${data.title}`);
      // let overview = document.getElementById("overview");
      // overview.innerText = data.overview;
      let movie = {
        id = id,
        title = data.title,
        cover = `https://image.tmdb.org/t/p/w500${data.poster_path}`
      }
      return movie;
      
    })
    .catch(error => {
      console.error(error);
    });
  }


