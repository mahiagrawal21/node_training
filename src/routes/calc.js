const express = require('express');
//const app = express();
const router = express.Router()

//app.use(express.json());
router.get('/',(req, res)=> {

router.send("none");
})

router.post('/calculate', (req, res)=>{
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

    router.send(`ANS : ${ans}`);
});


module.exports = router