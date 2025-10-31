<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">CRUD Departamentos</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Departamentos</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/createdepartamento">Crear Departamento</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: "MenuComponent", 
    }
</script>

<style scoped>
.navbar {
  background-color: #2d2d2d !important;
  border-bottom: 1px solid #404040;
}

.navbar-brand {
  color: #e0e0e0 !important;
  font-weight: bold;
}

.navbar-brand:hover {
  color: #ffffff !important;
}

.nav-link {
  color: #b0b0b0 !important;
}

.nav-link:hover {
  color: #ffffff !important;
}

.nav-link.active {
  color: #ffffff !important;
}
</style>