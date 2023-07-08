const express = require('express');
const app = express();

app.use(express.json());
app.get('/',(req, res)=> {

res.send("none");
})

app.post('/calculate', (req, res)=>{
    const {typeOfOperation, a, b} = req.body;

    let ans;
    switch (typeOfOperation)
    {
        case 'add':
            ans = Number(a) + Number(b);
            break;

        case 'sub':
            ans = Number(a) - Number(b);
            break;

        case 'mul':
            ans = Number(a) * Number(b);
            break;

        case 'div':
            ans = Number(a) / Number(b);
            break;

        case 'pow':
            ans = Math.pow(a, b);
            break;

        case 'mod':
            ans = Number(a) % Number(b);
            break;

        case 'sqrt':
            ans = Math.sqrt(a);
            break;

        default:
            ans = "Invalid";
    }

    res.send(`ANS : ${ans}`);
});

app.listen(3000, () =>{
    console.log('Port : 3000 ');
});