<template>
    <div class="container mt-4" >
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Detalles del Departamento</h3>
                <router-link to="/" class="btn btn-outline-light btn-sm">
                    Volver
                </router-link>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class=" container d-flex">
                            
                            <h4 class="text-primary "><span class="badge bg-secondary">Nº{{this.$route.params.id}}</span>  {{this.$route.params.nombre}}</h4>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h6 class="text-muted">Localidad</h6>
                            <address >
                                {{this.$route.params.localidad}}
                            </address>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "DetailsComponent"
    }
</script>

<style scoped>
.container {
  background-color: transparent;
}

.card {
  background-color: #2d2d2d;
  color: #e0e0e0;
  border-color: #404040;
}

.card-header {
  background-color: #1e3a5f !important;
  color: #ffffff;
  border-color: #404040;
}

.card-body {
  background-color: #2d2d2d;
}

h3, h4, h6 {
  color: #e0e0e0;
}

.text-primary {
  color: #5da3ff !important;
}

.text-muted {
  color: #aaa !important;
}

.badge {
  background-color: #4a4a4a !important;
}

address {
  color: #e0e0e0;
}
</style>