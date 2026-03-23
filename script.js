function payNow() {
  const receiver = document.getElementById("receiver").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (receiver === "" || amount === "") {
    alert("Please enter all details");
    return;
  }

  if (!receiver.includes("@") && !/^\d{10}$/.test(receiver)) {
    alert("Enter valid UPI ID or Phone Number");
    return;
  }

  if (Number(amount) <= 0) {
    alert("Enter valid amount");
    return;
  }

  document.getElementById("payment-screen").classList.add / remove;
  document.getElementById("pin-screen").innerHTML =
"<p class='processing'>Processing payment...</p>";
}

function goToPin() {
const receiver = document.getElementById("receiver").value.trim();
const amount = document.getElementById("amount").value.trim();

if (receiver === "" || amount === "") {
alert("Enter all details");
return;
}

if (!receiver.includes("@") && !/^\d{10}$/.test(receiver)) {
alert("Enter valid UPI ID or phone number");
return;
}

if (Number(amount) <= 0) {
alert("Enter valid amount");
return;
}

document.getElementById("step1").classList.add("hidden");
document.getElementById("step2").classList.remove("hidden");
}

function makePayment() {
const pin = document.getElementById("pin").value;

if (pin.length !== 4 || isNaN(pin)) {
alert("Enter valid 4-digit PIN");
return;
}

const receiver = document.getElementById("receiver").value;
const amount = document.getElementById("amount").value;

document.getElementById("step2").classList.add("hidden");
document.getElementById("step3").classList.remove("hidden");
document.getElementById("amount-display").innerText = `₹${amount}`;
document.getElementById("success-text").innerText =`₹${amount} paid to ${receiver}`;
}

function showReceipt() {
const receiver = document.getElementById("receiver").value;
const amount = document.getElementById("amount").value;

// Fill receipt data
document.getElementById("r-receiver").innerText = receiver;
document.getElementById("r-amount").innerText = `₹${Number(amount)}`;

// Date
const now = new Date();
document.getElementById("r-date").innerText = now.toLocaleString();

// Random Transaction ID
document.getElementById("r-id").innerText =
"TXN" + Math.floor(Math.random() * 1000000000);

// Switch screens
document.getElementById("step3").classList.add("hidden");
document.getElementById("step4").classList.remove("hidden");
}