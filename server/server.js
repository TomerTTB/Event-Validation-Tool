const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const { connectToMongo } = require('./mongoDb/db');
const { getEventList } = require('./mongoDb/dbOperations');
const { fetchMockData } = require('./mixPanel/mockApiRequest');
const { compareArrays } = require('./utils/eventComparer');

const app = express();

app.use(cors())

// Middleware to parse JSON bodies
app.use(bodyParser.json());

connectToMongo().catch(err => {
    console.error('Failed to connect to MongoDB, shutting down...');
    process.exit(1); // Exit the process if MongoDB connection fails
});

// Endpoint to handle the data submission
app.post('/submit-data', async (req, res) => {
    const { sessionId, selectedFlow } = req.body;
    
    console.log('Received data:');
    console.log('Session ID:', sessionId);
    console.log('Selected Flow:', selectedFlow);

    try {
    const eventList = await getEventList(selectedFlow);
    //console.log(eventList);

    const mockData = await fetchMockData(sessionId);
    //console.log(mockData);

    const comparisonResults = compareArrays(eventList, mockData);
    //console.log(comparisonResults);

        // Send a response back to the client
        res.json({ message: 'Data received successfully', comparisonResults});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});