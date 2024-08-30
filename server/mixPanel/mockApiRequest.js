const fetch = require('node-fetch');
const { parseEvents } = require('../utils/jsonParser');

async function fetchMockData(sessionId) {
    try{
        const url = `https://870ab215-860c-4437-916d-e479bc8d4fa0.mock.pstmn.io/events/?sessionId=${sessionId}`;

        //Make Get request to the mock server
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        //Check if response successful
        if (!response.ok){
            throw new Error(`Error fetching data: ${response.statusText}`);
        };

        // Parse the JSON response from the mock server
        const data = await response.json();

        // Extract event names from the JSON response
        const eventNames = parseEvents(data);
        //console.log(eventNames);
        return eventNames;
    }

    catch (error) {
        console.error('Error fetching data from mock server:', error);
        throw new Error('Error fetching data from mock server');
    };
}

module.exports = {
    fetchMockData
};