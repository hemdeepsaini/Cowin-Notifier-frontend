const express = require('express');
const app = express();
app.use(express.static('./dist/cowin-notifier-frontend'));
app.get('/*', function (req, res) {
 res.sendFile(__dirname + '/dist/cowin-notifier-frontend/index.html');
});
app.listen(process.env.PORT || 8080);