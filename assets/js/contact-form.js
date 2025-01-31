document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm")
  const formStatus = document.getElementById("formStatus")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    formData.append("_captcha", "false")
    formData.append("_template", "table")

    try {
      const response = await fetch("https://formsubmit.co/ajax/mubashirahmed421@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const result = await response.json()

      if (result.success === "true") {
        displayStatus("Message sent successfully!", "success")
        form.reset()
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      displayStatus("An error occurred. Please try again later.", "error")
      console.error("Error:", error)
    }
  })

  function displayStatus(message, type) {
    formStatus.textContent = message
    formStatus.style.color = type === "success" ? "#4CAF50" : "#f44336"
    formStatus.style.display = "block"
    formStatus.style.padding = "10px"
    formStatus.style.marginTop = "10px"
    formStatus.style.borderRadius = "4px"
    formStatus.style.backgroundColor = type === "success" ? "#E8F5E9" : "#FFEBEE"

    // Hide the status message after 5 seconds
    setTimeout(() => {
      formStatus.style.display = "none"
    }, 5000)
  }
})

