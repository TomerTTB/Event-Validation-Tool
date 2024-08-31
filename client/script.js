// Function to handle button click and send data to server
function handleButtonClick() {
    // Get the session ID and selected flow
    const sessionId = document.getElementById('sessionIdInput').value;
    const selectedFlow = document.getElementById('flowSelection').value;

    // Create an object with the data to send
    const data = {
        sessionId: sessionId,
        selectedFlow: selectedFlow
    };

    // Send the data to the server using Fetch API
    fetch('http://127.0.0.1:8081/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        // Handle the server response here (e.g., display a success message)
        //document.getElementById('responseMessage').textContent = JSON.stringify(result, null, 2);
        displayResponseInTable(result.comparisonResults);
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any errors here (e.g., display an error message)
    });
}

// Add event listener to the button
document.getElementById('getEventsButton').addEventListener('click', handleButtonClick);

// Enable/disable button based on session ID input
document.getElementById('sessionIdInput').addEventListener('input', function() {
    const sessionIdInput = this.value;
    document.getElementById('getEventsButton').disabled = !sessionIdInput.trim();
});