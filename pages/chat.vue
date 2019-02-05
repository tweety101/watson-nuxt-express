<template>
  <div class="chat-page">
    <h1>Chat Window</h1>
    <li v-for="message in messages">{{ message.text}}</li>
    <div class="chat__container">
      <input class="chat__input" @keyup.enter="addMessage">
    </div>
  </div>
</template>


<script>

export default {
  computed: {
    messages () {
      return this.$store.state.messages.list
    }
  },
  methods: {
    addMessage (e) {
      this.$store.commit('messages/add', e.target.value)
      e.target.value = ''
    }
  }
  
}
</script>


<style scoped>
.chat-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
