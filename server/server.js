'use strict';

import express from 'express';

const app = express();

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    return res.send('hello world');
});

app.listen(port, () => {
    console.log(`localhost://${port}`);
});
