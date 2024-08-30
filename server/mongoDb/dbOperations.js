const { getClient } = require('./db');

async function getEventList(selectedFlow) {
    try {
        // Specify the database and collection
        const client = getClient();
        const database = client.db('flowEventsDB');
        const collection = database.collection('flowEventLists');

        // Retrieve the document using the flowName
        const eventList = await collection.findOne(
            { flowName: selectedFlow },
            { projection: { _id: 0, events: 1 } }
        );

        //console.log('Mongo Event List:', eventList);

        return eventList.events;
    } catch (err) {
        console.error('Error retrieving data from MongoDB', err);
        throw new Error('Error retrieving data from MongoDB');
    }
}

module.exports = {
    getEventList
};
