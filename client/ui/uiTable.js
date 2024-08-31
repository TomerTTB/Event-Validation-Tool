// Function to display response in a table
function displayResponseInTable(comparisonResults, mockData) {
    const tableBody = document.getElementById('responseBody');
    tableBody.innerHTML = ''; // Clear existing table content
    
    comparisonResults.forEach(result => {
        const row = tableBody.insertRow();
             if (result.assertion === 'Pass') {
                row.classList.add('pass'); 
            }   else if (result.assertion === 'Fail') {
                row.classList.add('fail'); 
            }   
            
            if (result.assertion === 'Pass' && result.count > 1) {
                row.classList.add('multiple');
            }

            if (result.assertion === 'Extra') {
                row.classList.add('extra'); 
            }
            
        row.insertCell(0).textContent = result.eventName;
        row.insertCell(1).textContent = result.assertion;
        row.insertCell(2).textContent = result.count;
        // row.insertCell(3).textContent = result.warning;

        //Insert button to the right table cell
        
    });

    // Add button to the specific cell with ID 'responseCell'
    const responseCell = document.getElementById('responseCell');
    responseCell.innerHTML = '';
    responseCell.appendChild(createButton(mockData));
}

// Function to create a button element
    function createButton(mockData) {
    const button = document.createElement('button');
    button.textContent = 'Response Data';
    button.className = 'action-button';
    button.addEventListener('click', () => {

        console.log(mockData);

        const jsonString = JSON.stringify(mockData, null, 2);

        // Create a new Blob with the JSON data
        const blob = new Blob([jsonString], { type: 'application/json' });

        //Create an object URL for the Blob
        const url = URL.createObjectURL(blob);

        // Open the URL in a new tab
        window.open(url, '_blank');

    });
    return button;
}

