import { db, ref, push, onChildAdded } from "./firebase-config.js";

// Function to send chat messages
window.sendMessage = function () {
  let message = document.getElementById("chatMessage").value.trim();
  if (message) {
    push(ref(db, "chats"), {
      sender: "User", // Change to dynamic username later
      message: message,
      timestamp: new Date().toISOString(),
    });

    document.getElementById("chatMessage").value = ""; // Clear input field
  }
};

// Function to display messages in real-time
function displayChat() {
  let chatBox = document.getElementById("chatBox");

  onChildAdded(ref(db, "chats"), (snapshot) => {
    let data = snapshot.val();
    let messageElement = `
            <p><strong>${data.sender}:</strong> ${data.message} <br>
            <small>${new Date(
              data.timestamp
            ).toLocaleTimeString()}</small></p>`;

    chatBox.innerHTML += messageElement;
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
  });
}

// Load chat messages on page load
window.onload = function () {
  displayChat();
};
