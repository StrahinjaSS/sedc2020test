//Promise 2.0
// Nova izmena

async function getReviews() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  try {
    const res = await fetch(baseUrl + '/users');
    const data = await res.json();
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
}

getReviews();
