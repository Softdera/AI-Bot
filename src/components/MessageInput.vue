

<template>
    <div class="message-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewMessage',
    data() {
      return {
        newMessage: ''
      }
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.$emit('sendMessage', this.newMessage.trim());
          this.newMessage = '';
        }
      }
    }
  }
  </script>
  
  <style>
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
  </style>
  