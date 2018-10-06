import * as express from 'express';
import * as request from 'request';

const app = express();

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const backendBaseUrl = 'http://localhost:8080';

app.get('/api/friends', (_req, res) => {
  makeRequest(`${backendBaseUrl}/api/Friends`)
    .then((friends: Array<string>) => {
      res.json(friends);
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});


function makeRequest(url: string) {
  return new Promise((resolve, reject) => {
    request.get({url: url, json: true}, (error, response) => {
      if (error) {
        reject({error: 'there was an error'});
      } else {
        resolve(response.body);
      }
    });
  });
}

app.listen(3000, () => console.log('Example app listening on port 3000!'));
