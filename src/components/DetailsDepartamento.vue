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
                        <h4 class="text-primary mb-3">{{this.$route.params.nombre}}</h4>
                        
                        <div >
                            <h6 class="text-muted">ID Departamento</h6>
                            <span class="badge bg-secondary">{{this.$route.params.id}}</span>
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