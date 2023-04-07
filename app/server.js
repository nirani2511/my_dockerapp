const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
  const operation = req.body.operation;
  const number = req.body.number;
  let result;

  if (operation === 'square') {
    result = number * number;
  } else if (operation === 'cube') {
    result = number * number * number;
  } else if (operation === 'fibonacci') {
    result = fibonacci(number);
  }

  res.json({
    result: result,
    time: Date.now()
  });
});

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
