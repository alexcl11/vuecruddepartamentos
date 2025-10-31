<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </router-link>
                <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="#">Action</router-link></li>
                    <li><router-link class="dropdown-item" to="#">Another action</router-link></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><router-link class="dropdown-item" to="#">Something else here</router-link></li>
                </ul>
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