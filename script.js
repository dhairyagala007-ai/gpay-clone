function payNow() {
const receiver = document.getElementById("receiver").value.trim();
const amount = document.getElementById("amount").value.trim();

// Validation
if (receiver === "" || amount === "") {
alert("Please enter all details");
return;
}

if (!receiver.includes("@") && receiver.length !== 10) {
alert("Enter valid UPI ID or Phone Number");
return;
}

if (amount <= 0) {
alert("Enter valid amount");
return;
}

// Move to PIN screen
document.getElementById("payment-screen").style.display = "none";
document.getElementById("pin-screen").classList.remove("hidden");
}

function verifyPin() {
const pin = document.getElementById("pin").value;

if (pin.length !== 4 || isNaN(pin)) {
alert("Enter valid 4-digit PIN");
return;
}

// Show processing
document.getElementById("pin-screen").innerHTML =
"Processing...";

setTimeout(() => {
document.getElementById("pin-screen").style.display = "none";
document.getElementById("success-screen").classList.remove("hidden");

const receiver = document.getElementById("receiver").value;
const amount = document.getElementById("amount").value;

document.getElementById("success-text").innerText =
  `₹${amount} paid to ${receiver} successfully`;

}, 2000);
}