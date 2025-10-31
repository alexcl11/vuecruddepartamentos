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
                        <button @click="deleteDepartamento(departamento.numero)" class="btn btn-danger">Borrar</button>
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
            service.getDepartamentos().then(response => {
                this.departamentos = response
                console.log(this.departamentos)
                this.statusTabla = true
            })
        }, 
        methods: {
            deleteDepartamento(id){
                console.log(id)
                // service.deleteDepartamento(id).then(response => {
                //     console.log(response)
                //     alert("Se ha eliminado el departamento")
                // })
            }
        }

    }
</script>