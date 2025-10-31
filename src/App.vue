<template>
  <MenuComponent></MenuComponent>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
body {
  background-color: #1a1a1a;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e0e0e0;
  background-color: #1a1a1a;
  min-height: 100vh;
}

/* Estilos globales para tema oscuro */
.table {
  background-color: #2d2d2d;
  color: #e0e0e0;
}

.table thead {
  background-color: #3a3a3a;
  color: #ffffff;
}

.table tbody tr {
  border-color: #404040;
}

.table tbody tr:hover {
  background-color: #353535;
}

.table td, .table th {
  border-color: #404040;
}

.card {
  background-color: #2d2d2d;
  color: #e0e0e0;
  border-color: #404040;
}

.card-header {
  background-color: #3a3a3a !important;
  border-color: #404040;
}

.card-body {
  background-color: #2d2d2d;
}

.form-control {
  background-color: #2d2d2d;
  color: #e0e0e0;
  border-color: #404040;
}

.form-control:focus {
  background-color: #353535;
  color: #e0e0e0;
  border-color: #0d6efd;
}

.form-control:disabled {
  background-color: #1a1a1a;
  color: #888;
}

label {
  color: #e0e0e0;
}

h1, h2, h3, h4, h5, h6 {
  color: #e0e0e0;
}

.text-muted {
  color: #aaa !important;
}

.container {
  background-color: transparent;
}
</style>
