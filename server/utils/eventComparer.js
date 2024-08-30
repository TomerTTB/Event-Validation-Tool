function compareArrays(eventList, mockData){

//Compare each item from eventList against mockData
const comparisonResults = eventList.map(eventName => {
    const matchingItems = mockData.filter(item => item === eventName);

    return {
        eventName: eventName,
        assertion: matchingItems.length > 0 ? 'Pass' : 'Fail',
        count: matchingItems.length,
        warning: matchingItems.length > 1 ? 'Yes' : 'No'
    };
});

//find events in mockData that are not in eventList
const extraEvents = mockData.filter(X => !eventList.includes(X));

    // Create a count for extra events using a forEach loop
    const extraEventCounts = {};
    extraEvents.forEach(event => {
        if (extraEventCounts[event]) {
            extraEventCounts[event]++;
        } else {
            extraEventCounts[event] = 1;
        }
    });

//Add the extra events to the results
const extraEventsResults = Object.keys(extraEventCounts).map(eventName => ({
    eventName: eventName,
    assertion: 'Extra',
    count: extraEventCounts[eventName],
}));

//console.log(...comparisonResults, ...extraEventsResults);
return [...comparisonResults, ...extraEventsResults];
};

module.exports = {
    compareArrays
};
// array1.map(...): This starts by iterating over each element in array1. The map function will create a new array based on the result of the function for each element.
// eventName => { ... }: For each element in array1, we're calling it eventName.
// array2.filter(item => item === eventName): For each eventName from array1, we're filtering array2 to find matching items.

// item => item === eventName checks if each item in array2 is exactly equal to the current eventName from array1.
// The filter function returns a new array containing all the elements that pass this test.


// const matchingItems = ...: The result of the filter operation (an array of matching items from array2) is stored in the matchingItems variable.

// In simpler terms, for each event name in array1, we're finding all matching event names in array2.
// The overall result (comparisonResults) will be an array where each element corresponds to an element in array1, and contains information about how that element matches up with elements in array2.