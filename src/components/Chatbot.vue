<template>
    <div class="chat">
      <h3>Welcome to Softbot</h3>
      <p>Ask your health questions here</p>
      <MessageList :messages="messages" />
      <NewMessage @sendMessage="handleSendMessage" />
    </div>
  </template>
  
  <script>
  //import axios from '@/axios'; 
  import MessageList from './MessageList.vue';
  import NewMessage from './MessageInput.vue';
  
export default {
  name: 'Chatbot',
  components: {
    NewMessage,
    MessageList,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async handleSendMessage(message) {
      this.messages.push({ text: message, user: 'user' });
      await this.getBotResponse(message);
    },
    async getBotResponse(message) {
      try {
        const response = await axios.post('/api/chat', { message }); // Send POST request to Express.js server
        const botResponse = response.data.text;
        this.messages.push({ text: botResponse, user: 'bot' }); // Display response to the user
      } catch (error) {
        console.error('Error communicating with server:', error.response?.data || error.message);
        this.messages.push({ text: 'Error: Could not fetch response.', user: 'bot' });
      }
    },
  },
};
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
}

/* Adjustments for responsiveness */
@media screen and (min-width: 600px) {
  .chat {
    max-width: 600px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
}
</style>