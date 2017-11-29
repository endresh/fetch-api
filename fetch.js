let fetchRequest = function(){
    const requestData = {
    username: document.getElementById('usernameId').value,
    password: document.getElementById('passwordId').value,
    };
    fetch("http://localhost:3000/login", {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
       },
    body: JSON.stringify(requestData),
    })
    .then(booleanResponse => {
        return booleanResponse.text();
    })
    .then(booleanResponse => {

    }).catch(err => {});
  }
  document.getElementById("buttonId").addEventListener('click', () => {
    fetchRequest();
  });
