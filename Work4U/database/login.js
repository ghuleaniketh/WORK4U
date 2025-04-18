import userDatabase from './database.js';

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

 
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  
  const user = userDatabase.findUser(email, password);
  if (!user) {
    alert('Invalid email or password.');
    return;
  }

  alert(`Welcome back, ${user.fname}!`);
  
  localStorage.setItem('currentUser', JSON.stringify(user));
  window.location.href = '../auth/home.html'; 
});