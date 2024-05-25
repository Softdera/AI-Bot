<template>
  <div class="chat-container">
    <h3>Welcome to Softbot</h3>
      <p>Ask your health questions here</p>
      <div class="message-list">
    <div v-for="(message, index) in messages" :key="index" :class="['message', message.user]">
      <p><strong>{{ message.user ? 'You' : 'Bot' }}:</strong> {{ message.text }}</p>
    </div>
    </div>
    <div class="message-input">
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
    <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    async sendMessage() {
      if (this.newMessage.trim() === '') return;
      
      this.messages.push({ user: true, text: this.newMessage });
      const userMessage = this.newMessage;
      this.newMessage = '';

      try {
        const response = await axios.post('http://localhost:5000/api/chatbot', { message: userMessage });
        this.messages.push({ user: false, text: response.data.reply });
      } catch (error) {
        console.error(error);  // Log the error to the console
        this.messages.push({ user: false, text: 'Error communicating with the chatbot service' });
      }
    }
  }
}
</script>


<style>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.chat-message {
  margin-bottom: 10px;
}
.chat-message p {
  margin: 0;
}

.message-input {
    display: flex;
  }
  .message-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .message-input button {
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;
  }

  .message-list {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  .message {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .message.user {
    background-color: #e0f7fa;
    text-align: right;
  }
  .message.bot {
    background-color: #ffeb3b;
    text-align: left;
  }
@media screen and (min-width: 600px) {
  .chat-container {
    max-width: 600px;
  }
}
</style>
