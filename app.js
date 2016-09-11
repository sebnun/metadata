const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({ dest: 'uploads/' });

app.use('/', express.static('public'));

app.post('get-file-size', upload.single('file'), (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end(JSON.stringify({ size: req.file.size }));
});

app.listen(8084);
