const baseUrl = 'http://webdemo.imindq.com';
function getSliders () {
  let req = new Request(baseUrl + '/api/Slider', ({ method: 'GET'}));
  
  fetch(req)
  .then(res => {
    console.log('res', res)
    if (res.ok) {
      return res.json();
    } else {
      throw 'Doslo je do greske';
    }
  })
  .then(arr => {
    renderList(arr);
    console.log('resolved second promise', arr);
  })
  .catch(err => {
    console.log(err);
  })
}
getSliders();
function renderList (arr) {
  const list = document.querySelector('.list');
  arr.forEach(element => {
    const cont = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = element.title;
    const description = document.createElement('p');
    description.textContent = element.description;
    const anchor = document.createElement('a');
    anchor.setAttribute('href', element.linkUrl);
    anchor.textContent = 'Click Me';
    const img = document.createElement('img');
    img.setAttribute('src', element.imageurl)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '-';
    deleteBtn.addEventListener('click', function() {
      deleteSlajder(element.id);
    })
    cont.appendChild(title);
    cont.appendChild(description);
    cont.appendChild(anchor);
    cont.appendChild(img);
    cont.appendChild(deleteBtn);
    list.appendChild(cont);
  });
}
function postSlider() {
  const data = {
    imageurl: 'nekiUrl',
    title: 'Slajder 1',
    description: 'Ovo je prvi slajder',
    url: 'Ovo je url za onaj button ispod teksta na slajderu',
  }
  let req = new Request(baseUrl + '/api/Slider', 
        ({ method: 'PUT',
           headers: {'Content-Type': 'application/json',},
           body: JSON.stringify(data) 
          }));
  fetch(req)
  .then(res => {
    console.log(res);
    getSliders();
  })
  .catch(err => {
    console.log(err);
  });
}
let btn = document.querySelector('#PostBtn');
btn.addEventListener('click', postSlider);

function editSlider(id) {
  const data = {
    imageurl: 'ja volim editovanje! :)',
    title: 'ja volim editovanje! :)',
    description: 'ja volim editovanje! :)',
    url: 'ja volim editovanje! :)',
  }
  if (!id) {
    id = inputId.value;
  }
  const req = new Request(baseUrl + '/api/Slider/' + id, 
                      ({ method: 'PUT',
                         headers: {'Content-Type': 'application/json',},
                         body: JSON.stringify(data) 
                        }));
  fetch(req)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}

const editBtn = document.querySelector('#editBtn');
editBtn.addEventListener('click', function() {
  editSlider();
})

let inputId = document.querySelector('#inputId');

function deleteSlajder(id) {
  if (!id) {
    id = inputId.value;
  }
  let req = new Request(baseUrl + '/api/Slider/' + id , ({ method: 'DELETE' })); 
  fetch(req)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}

let delBtn = document.querySelector('#DelBtn');
delBtn.addEventListener('click', function() {
  deleteSlajder();
});
// neki komentar