require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const LogAPI = require('./logAPI');

const app = express();
app.use(bodyParser.json());

// Define your API token
const API_TOKEN = process.env.API_TOKEN || 'YOUR_API_TOKEN_CVAR';

// Route to handle events
app.post('/api', (req, res) => {
    // Verify the authorization token
    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];
    
    //console.log(token);
    
    if (token === API_TOKEN) {
        // Instantiate the LogAPI class and handle the event
        const logApi = new LogAPI();
        const result = logApi.OnEvent(req.body);

        console.log("-----------------------REQ------------------");
        console.log(req.body);
        console.log("--------------------------------------------");
        console.log("-----------------------RES------------------");
        console.log(result);
        console.log("--------------------------------------------");
        // Return the result as JSON
        return res.json(result);
    } else {
        // Return a 403 error if the token is not valid
        return res.status(403).json({ error: 'Forbidden' });
    }
});

// Start the server on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
