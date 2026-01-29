function orderNow() {
  const qty = document.getElementById("qty").value;
  const price = 30;
  const total = qty * price;

  const phoneNumber = "917498886372"; // 👈 replace with your number

  const message = `Hi, I want to order ${qty} Fruit Cup(s).\nTotal Amount: ₹${total}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
