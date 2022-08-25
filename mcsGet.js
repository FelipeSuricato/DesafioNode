const axios = require('axios').default;

addItem('https://api.mercadolibre.com/items/MLB1046680598');

async function addItem(url) {
  const getData = await axios.get(url);
  axios.post('http://localhost:4002/item', getData.data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      let showLog = ("Erro:");
      showLog = + error;
      console.log(showLog);
    });
};