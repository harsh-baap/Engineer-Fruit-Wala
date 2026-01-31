function orderNow() {
  const qty = document.getElementById("qty").value;
  const price = 30;
  const total = qty * price;

  const phoneNumber = "917498886372";

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;

  const message = `Hi, I am ${name}. I want to order ${qty} Fruit Cup(s).\nTotal Amount: ₹${total}\nAddress: ${address}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
