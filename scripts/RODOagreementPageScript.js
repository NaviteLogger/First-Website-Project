var canvas = document.getElementById('signatureCanvas');
var context = canvas.getContext('2d');
var isMouseDown = false;

canvas.addEventListener('mousedown', function(event) {
  isMouseDown = true;
  context.beginPath();
  context.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', function(event) {
  if (isMouseDown) {
    context.lineTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
    context.stroke();
  }
});

canvas.addEventListener('mouseup', function(event) {
  isMouseDown = false;
});

function clearSignature() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  var signatureDataURL = canvas.toDataURL();
  // You can now send the signatureDataURL to your server for further processing/storage
  console.log(signatureDataURL);
}
