var path = require('path')
const express = require('express')

const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
const fetch = require("node-fetch");
app.use(express.static('dist'))


const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/all', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const api_key=process.env.API_KEY;
console.log(api_key);
console.log(`Your API key is ${process.env.API_KEY}`);

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



/* Function to GET Web API Data*/

app.post('/add', async(req, res) => {
    const uText = req.body.urlText;
    console.log(`Request from user: ${uText}`)
    const resp = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${uText}&lang=en`);
    
    try {
    //    console.log(resp);
        const data = await resp.json();
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});
