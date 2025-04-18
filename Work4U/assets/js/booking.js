const totalAmount = document.getElementById("totalAmount");
    const slotInput = document.getElementById("slot");
    const rate = 100;
  
    function parseTime(timeStr) {
      const [hours, minutes] = timeStr.split(":").map(Number);
      if (isNaN(hours) || isNaN(minutes)) return null;
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    }
  
    function getSlotDuration() {
      const [startStr, endStr] = slotInput.value.split("-").map(s => s.trim());
  
      const startTime = parseTime(startStr);
      const endTime = parseTime(endStr);
  
      if (!startTime || !endTime || endTime <= startTime) return null;
  
      const diffMs = endTime - startTime;
      return diffMs / (1000 * 60 * 60);
    }
  
    function updateTotal() {
      const duration = getSlotDuration();
      if (duration) {
        totalAmount.innerText = duration * rate;
      } else {
        totalAmount.innerText = 0;
      }
    }
  
    function validateAndSubmit() {
      const phone = document.getElementById('phone').value;
      const address = document.querySelector('.address').value;
      const date = document.getElementById('date').value;
      const slot = document.getElementById('slot').value;
      const instructions = document.querySelector('.instructions').value;
    
      if (!phone || !address || !date || !slot) {
        alert("Please fill out all required fields.");
        return;
      }
    
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        alert("User not logged in.");
        return;
      }
    
      const order = {
        email: currentUser.email,
        phone: phone,
        address: address,
        date: date,
        slot: slot,
        instructions: instructions,
        service: "Labour Booking",
        payment: "Pending" 
      };
    
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      existingOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));
    
      alert("Booking successful!");
      window.location.href = "../dashboard/customer.html"; 
    }
  
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}


function getOrders(email) {
  return JSON.parse(localStorage.getItem('orders_' + email)) || [];
}

function saveOrders(email, orders) {
  localStorage.setItem('orders_' + email, JSON.stringify(orders));
}

function renderOrderHistory() {
  const user = getCurrentUser();
  const orders = getOrders(user.email);
  const tbody = document.getElementById('orderHistoryBody');
  const noOrdersMsg = document.getElementById('noOrdersMsg');
  tbody.innerHTML = '';

  if (orders.length === 0) {
    noOrdersMsg.style.display = 'block';
  } else {
    noOrdersMsg.style.display = 'none';
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${order.service}</td><td>${order.hhr}</td><td>${order.payment}</td>`;
      tbody.appendChild(row);
    });
  }
}


document.getElementById('bookNowBtn').addEventListener('click', function() {
  const user = getCurrentUser();
  const orders = getOrders(user.email);

  
  const newOrder = {
    service: document.getElementById('serviceInput').value,
    hhr: document.getElementById('hhrInput').value,
    payment: document.getElementById('paymentInput').value
  };

  orders.push(newOrder);
  saveOrders(user.email, orders);
  renderOrderHistory();
});


window.onload = function() {
  renderOrderHistory();
};
  
    slotInput.addEventListener("input", updateTotal);
