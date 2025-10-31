<template>
    <h1>Modificar Departamento</h1>
    <div class="container d-flex flex-column align-items-center">
        <form @submit.prevent="updateDepartamento" class="form w-25">
        <label>Nº Departamento</label>
        <input disabled type="number" class="form-control" v-model="departamento.numero"/>
        <label class="">Nombre</label>
        <input type="text" class="form-control" v-model="departamento.nombre"/>
        <label>Localidad</label>
        <input type="text" class="form-control" v-model="departamento.localidad"/>
        <button v-if="departamento.numero && departamento.nombre && departamento.localidad" 
        class="btn btn-success mt-2">Crear</button>
        <button  type="submit" v-else disabled class="btn btn-success mt-2">Crear</button>
        
    </form>
    </div>
</template>

<script>
    import ServiceDepartamentos from '@/services/ServiceDepartamentos'
    const service = new ServiceDepartamentos()
    export default{
        name: "UpdateDepartamento", 
        data(){
            return{
                departamento: {
                    numero: null, 
                    nombre: null,
                    localidad: null
                }
            }
        }, 
        mounted(){
            service.getDepartamento(this.$route.params.id).then(response=>{
                this.departamento = response
            })
        },
        methods: {
            updateDepartamento(){
                console.log(this.departamento)
                let departamento = {
                    numero: parseInt(this.departamento.numero),
                    nombre: this.departamento.nombre, 
                    localidad: this.departamento.localidad
                }
                service.updateDepartamento(departamento).then(response => {
                    console.log(response)
                    alert("Se ha modificado correctamente")
                    this.$router.push("/")
                })
            }
        }
    }
</script>