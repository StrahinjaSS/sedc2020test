let promise = new Promise((resolve, reject) => {
  // cekamo da stignu rezultati
  let rezultat = { name: 'Strahinja', age: 29 };
  if (rezultat.age > 25) {
    resolve(rezultat);
  } else {
    rezultat.error = 'Manje od 25 godina';
    reject(rezultat);
  }
})

// resove == return
// reject == throw

promise
.then(rez => {
  console.log(rez);
  rez.prezime = 'Stamenkovic';
  if (rez.age > 30) {
    rez.error = 'Stariji od 30';
    throw rez;
  } else {
    return rez;
  }
})
.then(rezSaPrezimenom => {
  console.log(rezSaPrezimenom);
})
.then(vracenoIzCatch => {
  console.log(vracenoIzCatch);
})
.catch(err => {
  console.log(err.error);
  return err;
});