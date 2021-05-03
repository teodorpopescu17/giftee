var express = require('express');
const serveStatic = require('serve-static')
var path = require('path');
var cookieParser = require('cookie-parser');
var userRouter = require('./routes/users');
var itemsRouter = require('./routes/items');
var history = require('connect-history-api-fallback');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', serveStatic(path.join(__dirname, './dist')))
// app.use(express.static(path.join(__dirname, './giftee/dist')));

app.use('/', itemsRouter);
app.use('/', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server started");
});

app.get('/.*/', function(req, res) {
  res.sendFile(path.join(__dirname, './giftee/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

