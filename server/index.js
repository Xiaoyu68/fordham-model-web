var express = require('express');
const path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000))
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));