document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm")
  const formStatus = document.getElementById("formStatus")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (!name || !email || !message) {
      displayStatus("Please fill in all fields.", "error")
      return
    }

    // Use FormSubmit.co for form submission
    fetch("https://formsubmit.co/your-email@example.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        displayStatus("Message sent successfully!", "success")
        form.reset()
      })
      .catch((error) => {
        displayStatus("An error occurred. Please try again later.", "error")
        console.error("Error:", error)
      })
  })

  function displayStatus(message, type) {
    formStatus.textContent = message
    formStatus.className = type === "success" ? "text-green-600" : "text-red-600"
    formStatus.style.display = "block"

    // Hide the status message after 5 seconds
    setTimeout(() => {
      formStatus.style.display = "none"
    }, 5000)
  }
})

