const express = require('express');
const router = express.Router();
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};


app.get('/getData/:name', cors(corsOptions), async (req, res, next) => {
 const fetchOptions = {
        method: 'GET'
    }
try{
const requestEndpoint = `https://xkcd.com/${req.params.name}/info.0.json`
const response = await fetch(requestEndpoint , fetchOptions);
    const jsonResponse = await  response.json();
    res.json(jsonResponse);
}
   catch(err){
   next(err);
   } 
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

module.exports = router;