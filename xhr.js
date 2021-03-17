/*
let zahtev = new XMLHttpRequest();

let loadHandler = function() {
	console.log(zahtev);

	if (zahtev.status === 200) {
		// izvadimo content-type header iz responsea
		let contentType = zahtev.getResponseHeader('content-type');
		// proverimo da li taj string sadrzi application/json
		if (contentType.indexOf('application/json') >= 0) {
			// parsiramo JSON u pravi JS objekat
			let responseOdServera = JSON.parse(zahtev.response);
			console.log(responseOdServera.avatar_url);
		}
	}
	else if (zahtev.status === 404) {
		alert('Doslo je do greske 404');
	}
	else {
		alert('Nepoznata greska');
	}
};

zahtev.addEventListener('load', loadHandler);

zahtev.open('GET', 'https://api.github.com/users/bencunasdsad');

zahtev.send(); */

// let promise = new Promise((resolve, reject) => {
//   let request = new XMLHttpRequest();

//   request.addEventListener('load', () => {
//     if (request.status === 200) {
//       resolve(request.response);
//     } else {
//       reject(request.status);
//     }
//   })
//   request.open('GET', 'https://api.github.com/users');
//   request.send();
// });

// promise
// .then(res => {
//   let response = JSON.parse(res);
//   console.log(response);
// })
// .catch(err => {
//   console.log(err);
// })