// Assuming this function is called when you receive the response from the server
function displayResponseInTable(responseData) {
    const tableBody = document.getElementById('eventsTableBody');
    tableBody.innerHTML = ''; // Clear existing table rows

    responseData.forEach(event => {
        const row = tableBody.insertRow();
        
        const cellEventName = row.insertCell(0);
        const cellAssertion = row.insertCell(1);
        const cellCount = row.insertCell(2);
        const cellWarning = row.insertCell(3);

        cellEventName.textContent = event.eventName;
        cellAssertion.textContent = event.assertion;
        cellCount.textContent = event.count;
        cellWarning.textContent = event.warning;

        // Optional: Add classes based on assertion or warning for styling
        if (event.assertion === 'Pass') {
            cellAssertion.classList.add('pass');
        } else {
            cellAssertion.classList.add('fail');
        }

        if (event.warning === 'Yes') {
            cellWarning.classList.add('warning');
        }
    });
}