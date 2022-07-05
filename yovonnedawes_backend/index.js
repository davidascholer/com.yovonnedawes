const express = require('express');
const app = express();
require('dotenv').config();
  
// Set up the body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var whitelist = ['yovonnedawes.com'];

router.post('/yovonnedawes/', async (req, res) => {

    const origin = req.body.origin;

    if (whitelist.includes(origin)) {

        // Site specific data goes here
        if (origin === SITE1) {

            const yovonnedawesData = require('./yovonnedawes')(req.body);

            if (yovonnedawesData.error)
                res.status(401).send(JSON.stringify({ error: "invalid password" }));
            else
                res.send(JSON.stringify(yovonnedawesData.dynamicData));
                
        } else {
            res.status(500).send({ error: "Your site could not be found on the server." })
        }
    } else {
        res.status(403).send({ error: "You are not allowed to enter this site." })
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));