const BACKEND_URL = "http://localhost:3000";


function addBook() {
  fetch(`${BACKEND_URL}/books/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      price: document.getElementById("price").value
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText = "Book Added Successfully";
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Error adding book";
  });
}

