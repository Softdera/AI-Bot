
<template>
    <div class="message-list">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.user]">
        {{ message.text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageList',
    props: ['messages']
  }
  </script>
  
  <style>
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
  </style>
  