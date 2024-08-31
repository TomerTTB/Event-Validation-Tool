// Function to display response in a table
function displayResponseInTable(comparisonResults) {
    const tableBody = document.getElementById('responseBody');
    tableBody.innerHTML = ''; // Clear existing table content

    comparisonResults.forEach(result => {
        const row = tableBody.insertRow();
             if (result.status === 'Pass') {
                row.classList.add('pass'); 
            }   else if (result.status === 'Fail') {
                row.classList.add('fail'); 
            }   
            
            if (result.status === 'Pass' && result.count > 1) {
                row.classList.add('multiple');
            }

            if (result.status === 'Extra') {
                row.classList.add('extra'); 
            }
            
        row.insertCell(0).textContent = result.eventName;
        row.insertCell(1).textContent = result.status;
        row.insertCell(2).textContent = result.count;
        // row.insertCell(3).textContent = result.warning;
    });
}