function parseEvents(jsonResponse){
    try {
        //Ensure response is an Array
        if (!Array.isArray(jsonResponse)){
            throw new Error('Mock response is not an Array, Expected an array of events');
        }

        //Get events from Array
        const eventNames = jsonResponse.map(item => item.event);
        return eventNames;
    }
    catch (error){
        console.error('Error parsing JSON response:', error);
        throw new Error('Error parsing JSON response');
    }
}

module.exports = {
    parseEvents
};