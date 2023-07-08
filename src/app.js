const express = require('express');
const app = express();
const PORT = 3000;


const calculator = require('./routes/calc') //making routes
// Single routing
const router = express.Router();

router.get('/', function (req, res, next) {
	console.log("Router Working");
	res.end();
})

app.use(calculator);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
