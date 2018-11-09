const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const listingId = __dirname + '/public/index.html';

app.get('/:listingId', (req, res) => {
  res.sendFile(listingId);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});