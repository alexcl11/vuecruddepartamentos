<template> 
    <div class="container mt-4" v-if="statusTabla">
        <table class="table">
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-for="departamento in departamentos" :key="departamento">
                <tr>
                    <td>{{departamento.numero}}</td>
                    <td>{{departamento.nombre}}</td>
                    <td>{{departamento.localidad}}</td>           
                    <td>
                        <router-link class="btn btn-success" 
                        :to="`/detailsdepartamento/${departamento.numero}/${departamento.nombre}/${departamento.localidad}`">
                            Detalles
                        </router-link>
                        <router-link class="btn btn-primary mx-2" 
                        :to="`/updatedepartamento/${departamento.numero}`">
                            Modificar
                        </router-link>
                        <!-- <button @click="deleteDepartamento(departamento.numero)" class="btn btn-danger">Borrar</button> -->
                        <router-link class="btn btn-danger mx-2" 
                        :to="`/delete/${departamento.numero}`">
                            Borrar
                        </router-link>
                    </td>        
                    
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container mt-4" v-else>
        <img src="./../assets/loading.gif"/>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'
    import ServiceDepartamentos from './../services/ServiceDepartamentos' 
    const service = new ServiceDepartamentos()
    export default{
        name: "DepartamentosComponent", 
        data(){
            return{
                departamentos: [],
                statusTabla: false,
            }
        },
        mounted(){
            this.loadDepartamentos()
        }, 
        methods: {
            deleteDepartamento(id){
                Swal.fire({
                    title: "¿Estás seguro de eliminar el departamento?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, eliminar!",
                    cancelButtonText: "Cancelar"
                    }).then((result) => {
                    if (result.isConfirmed) {
                        console.log(id)
                        service.deleteDepartamento(id).then(response => {
                            console.log(response)
                            Swal.fire({
                                title: "Departamento eliminado correctamente!",
                                icon: "success"
                            });
                            this.loadDepartamentos()
                        })
                        
                    }
                });
                
                
            },
            loadDepartamentos(){
                this.statusTabla = false
                service.getDepartamentos().then(response => {
                    this.departamentos = response
                    console.log(this.departamentos)
                    this.statusTabla = true
                })
            }
        }

    }
</script>

<style scoped>
.container {
  background-color: transparent !important;
}

.table {
  background-color: #2d2d2d !important;
  color: #e0e0e0 !important;
  border-color: #404040 !important;
}

.table thead {
  background-color: #3a3a3a !important;
  color: #ffffff !important;
}

.table thead th {
  background-color: #3a3a3a !important;
  color: #ffffff !important;
  border-color: #404040 !important;
}

.table tbody tr {
  background-color: #2d2d2d !important;
  border-color: #404040 !important;
}

.table tbody tr:hover {
  background-color: #353535 !important;
}

.table td, .table th {
  border-color: #404040 !important;
  color: #e0e0e0 !important;
  background-color: transparent !important;
}

.table td {
  background-color: #2d2d2d !important;
}
</style>