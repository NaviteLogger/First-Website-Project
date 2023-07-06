document.addEventListener('DOMContentLoaded', function() {
    var currentDateElement = document.getElementById('currentDate');
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', locale: 'pl-PL' };
    currentDateElement.textContent = currentDate.toLocaleDateString('pl-PL', options);
  });

function submitForm() {
    var name = document.getElementById('clientsNameAndSurnameInput').value;
    var surname = document.getElementById('employeeNameAndSurnameInput').value;
    
    // Perform any additional client-side validation if needed
    
    // Send the form data to the server for processing
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Success! Do something with the response if needed
        console.log(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify({ name: name, surname: surname }));
  }