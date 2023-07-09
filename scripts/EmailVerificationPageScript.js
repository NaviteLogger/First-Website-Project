function submitEmail() {
    var email = document.getElementById('user_email').value;
    
    // Perform any additional client-side validation if needed
    
    // Send the email to the server for processing
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Success! Do something with the response if needed
        console.log(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify({ email: email }));
}

function testFunction() {
    console.log("test");
}

export { testFunction };

