const express = require('express');
const serveStatic = require("serve-static");
const cors = require("cors");
const bodyParser = require("body-parser");
const history = require('connect-history-api-fallback');
const path = require('path');
const port = process.env.PORT || 3000;

app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);