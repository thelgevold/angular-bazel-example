import * as express from 'express';
import {HelloWorldService} from './hello-world.service';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const helloWorldService = new HelloWorldService();

app.get('/hello-world', (req, res) => res.json(helloWorldService.getMessage()))

app.listen(9000, () => console.log('Example app listening on port 9000!'))