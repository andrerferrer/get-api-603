
// EVERY SINGLE TIME PLEASE DO THIS //
// this is what we will do every single time.
// hold on to it until it makes sense

// GET REQUEST
fetch(url)
// .then((response) => { return response.json()})
  .then(response => response.json())
  .then( (data) => {
    console.log(data);
  } )

// POST REQUEST
fetch(url, {  method: 'POST' })
// .then((response) => { return response.json()})
  .then(response => response.json())
  .then( (data) => {
    console.log(data);
  } )