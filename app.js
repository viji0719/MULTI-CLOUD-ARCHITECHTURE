function callRenderAPI() {
  fetch('https://render-backend-9-rwwe.onrender.com/hello')
    .then(response => response.text())
    .then(data => {
      document.getElementById('output').innerText = data;
    })
    .catch(error => {
      console.error('Error calling backend:', error);
    });
}
