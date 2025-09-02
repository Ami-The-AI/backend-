document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("prompt");
  const output = document.getElementById("response");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    output.textContent = "Thinking...";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ prompt: input.value })
      });
      const data = await res.json();
      output.textContent = data.response || data.error || "No response";
    } catch (err) {
      output.textContent = "Error: " + err.message;
    }
  });
});
