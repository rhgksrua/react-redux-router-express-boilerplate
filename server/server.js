'use strict';

import express from 'express';
import path from 'path';

const app = express();

// pug templates
app.set('view engine', 'pug');
app.set('views', './server/views');
//console.log(path.jo(`${__dirname}/build`));

app.use(express.static('build'));

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  return res.render('index');
  //return res.send('hello world');
});

app.listen(port, () => {
  console.log(`localhost://${port}`);
});
