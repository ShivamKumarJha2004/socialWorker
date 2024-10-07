document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple validation
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Reset the form
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  function toggleMenu() {
    const menu = document.getElementById('check');
    menu.checked = !menu.checked; // Toggle the checkbox state
}

  