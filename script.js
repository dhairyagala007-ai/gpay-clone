function payNow() {
  const amount = document.getElementById("amount").value;

  if (amount === "") {
    alert("Enter amount");
    return;
  }

  document.getElementById("payment-screen").innerHTML = "<p style='text-align:center;margin-top:200px;'>Processing...</p>";

  setTimeout(() => {
    document.getElementById("payment-screen").style.display = "none";
    document.getElementById("success-screen").classList.remove("hidden");

    document.getElementById("success-text").innerText = `₹${amount} paid successfully`;
  }, 2000);
}