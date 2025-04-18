const userDatabase = {
    
    getUsers() {
      return JSON.parse(localStorage.getItem('users')) || [];
    },
  
    
    saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    },
  
    
    addUser(user) {
      const users = this.getUsers();
      users.push(user);
      this.saveUsers(users);
    },
  
    
    findUser(email, password) {
      const users = this.getUsers();
      return users.find(user => user.email === email && user.password === password);
    },
  
    
    userExists(email, phone) {
      const users = this.getUsers();
      return users.some(user => user.email === email || user.phone === phone);
    }
  };
  
  export default userDatabase;