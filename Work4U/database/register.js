import userDatabase from './database.js';

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

 
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  
  if (!fname || !lname || !phone || !email || !password) {
    alert('Please fill out all fields.');
    return;
  }

 
  if (userDatabase.userExists(email, phone)) {
    alert('User with this email or phone number already exists.');
    return;
  }

 
  const user = { fname, lname, phone, email, password };

 
  userDatabase.addUser(user);

  alert('Registration successful!');
  console.log('Current User Database:', userDatabase.getUsers()); 

  
  window.location.href = 'login.html';
});