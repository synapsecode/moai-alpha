const app = require('./server/app');
const SERVER_PORT = 80;

const server = app.listen(SERVER_PORT, (err) => {
  console.log(
    `[EXPRESS@${server.address().address}${server.address().port}] Online and listening`
  );
});
