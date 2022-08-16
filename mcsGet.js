const https = require('https');
const http = require('http');

https.get('https://api.mercadolibre.com/items/MLB1046680598', (resp) => {
  let data = '';
  resp.on('data', (dados) => {
    data += dados;
  });
  resp.on('end', () => {
    console.log("Get sucess");
    const dataPost = JSON.stringify(data);
    const options = {
      hostname: 'localhost',
      port: 4002,
      path: '/item',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dataPost)
      }
    };
    const req = http.request(options, (res) => {
      res.setEncoding("utf-8");
      let pData = '';
      res.on('pData', (d) => {
        pData += d;
      });
      res.on('end', () => {
        console.log('Ended! Data:', pData);
      });
    });
    req.on('error', error => {
      console.error(error);
    });
    req.write(dataPost);
    req.end();
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});