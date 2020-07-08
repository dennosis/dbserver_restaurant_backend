const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes)


const port =  process.env.PORT || 3010;
app.listen(port, () => console.log('server on port', port));