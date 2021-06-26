// AJAX - API

// this is ASYNC JS
// this is how we did it step by step
// fetch(url).then( (response) => {
  //   // this is also async
  //   return response.json()
  // }).then( (data) => {
    //   console.log(data)
    // })
    
const callTheAPIAndUpdateTheDOM = (movieName) => {
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`;
  
  fetch(url)
  // .then((response) => { return response.json()})
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
      console.log(data.Search);
      const movies = data.Search;
  
      const list = document.getElementById('results');
      // clear the list before inserting the new movies
      list.innerHTML = '';
      movies.forEach( (movieData) => {
        // update the DOM with the information from the API
        const title = movieData.Title;
        const poster = movieData.Poster;
        
        const movieHTML = `
          <li>
            <p>${title}</p>
            <img src='${poster}'>
          </li>
        `;
        list.insertAdjacentHTML('beforeend', movieHTML);
      })
    })
}

// 1 select the element
const form = document.getElementById('search-movies');
// console.log(form)

// 2 addEventListener
form.addEventListener('submit', (event) => {
  // 3 do the behavior

  // we can say
  // default behavior of submit is to reload the page
  event.preventDefault();
  console.log(event);

  // get what is inside the input
  const input = document.getElementById('keyword');
  console.log(input);
  const movieName = input.value;
  console.log(movieName);

  // call the api and update the dom with the info
  callTheAPIAndUpdateTheDOM(movieName);
});



























