function add(){
   alert("Hellow Welcome to our Page"); 
}

$(document).ready(() => {
   $(".chat-btn").click(() => {
       $(".chat-box").slideToggle("slow");
       $("input").slideToggle("slow");
       $("button").slideToggle("slow");
   });
});

// sendMessage funtion section

function sendMessage() {
   const userInput = document.getElementById('user-input').value;
   if (userInput.trim() === '') return;

   const chatBox = document.getElementById('chat-box');

   // Add user message
   const userMessage = document.createElement('div');
   userMessage.className = 'message user-message';
   userMessage.textContent = userInput;
   chatBox.appendChild(userMessage);

   // Clear input
   document.getElementById('user-input').value = '';

   // Add bot response
   setTimeout(() => {
       const botMessage = document.createElement('div');
       botMessage.className = 'message bot-message';
       botMessage.textContent = getBotResponse(userInput);
       chatBox.appendChild(botMessage);

       // Scroll to the bottom
       chatBox.scrollTop = chatBox.scrollHeight;
   }, 500);
}

// getBotResponse Function section

function getBotResponse(input) {
   // Simple responses for demonstration
   const responses = {
       'hello': 'Hi there!',
       'hi': 'Hi there!',
       'kuzu la': 'kuzu la! how can i help you',
       'kuzu': 'kuzu la! how can i help you',
       'kuzu zangpola': 'Kuzu zangpo la, how can I help you!',
       'how are you': 'I\'m doing great, thanks for asking!',
       'what is your name': 'My name is Boty, nice to meet you!',
       'bye': 'Goodbye! Please  come back soon.',

   };

   return responses[input.toLowerCase()] || 'I am not sure how to respond to that. Please wait until I am trained to respond to that.';
}