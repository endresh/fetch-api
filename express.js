const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql')
const app = express()
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'endresh'
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text({
  type: 'text/html'
}));
app.post('/login', (req, res) => {
  const reqbody = JSON.parse(Object.keys(req.body)[0]);
  console.log('reqqqqQQQ', reqbody);
  connection.query(`SELECT * FROM user WHERE name = '${reqbody.username}' AND password = '${reqbody.password}' `, function (err, userResponse, fields) {
    if (userResponse.length === 1) {
      res.send('true')
    }else {
      res.send('false')
    }
  })
// res.send(JSON.stringify(req.body));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
