function createGrid() {
    const target = document.getElementById('target');
    target.innerHTML = ''; 
    const gridSize = 100;
    for (let i = 1; i <= gridSize; i++) {
        
        const cell = document.createElement('div');
        cell.id = `cell-${i}`;
        cell.innerText = i;
        cell.classList.add('grid-cell'); 
        target.appendChild(cell); 
    }

    position = 0; 
}

document.getElementById('createBtn').addEventListener('click', createGrid);

function toggle(position) {
    const cell = document.getElementById(`cell-${position}`);
    if (cell) {
        cell.classList.toggle('on'); 
    }
}

let position = 0; 
function move() {
    const gridSize = 100;

    const interval = setInterval(function () {
        if (position > 0) {
            toggle(position); 
        }

        position++; 

        if (position > gridSize) {
            clearInterval(interval); 
        } else {
            toggle(position); 
        }
    }, 1000); 
}

document.getElementById('moveBtn').addEventListener('click', move);

// Initialize EmailJS with your user ID (you get this from EmailJS)
(function() {
    emailjs.init('svnaveen116@gmail.com');
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Create the message parameters
    const params = {
      from_name: name,
      from_email: email,
      message: message
    };
  
    // Send the message via EmailJS
    emailjs.send('', 'YOUR_TEMPLATE_ID', params)
      .then(function(response) {
        alert('Message sent successfully!', response.status, response.text);
      }, function(error) {
        alert('Failed to send message.', error);
      });
  });
  