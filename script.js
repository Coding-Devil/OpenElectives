document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        usn: document.getElementById('usn').value,
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value
    };
    
    // POST request to SheetDB
    fetch('https://sheetdb.io/api/v1/eaxiekyuvjdog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: formData}),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Redirect to Google Form
        window.location.href = 'https://forms.gle/f8gWPmVBUTcSgoHLA';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
