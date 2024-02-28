<template>
  <div id="app">
    <header>
      <h1>Регистрация клиента</h1>
    </header>
    <main>
      <ClientForm />
    </main>
  </div>
</template>

<script>
import ClientForm from './components/ClientForm.vue'

export default {
  name: 'App',
  components: {
    ClientForm 
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  background-color: #006400; 
  color: white; 
  text-align: center;
  padding: 20px 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.client-form {
  max-width: 768px; 
  width: 100%;
}
</style>
