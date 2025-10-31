<template>
    <h1>Crear Departamento</h1>
    <div class="container d-flex flex-column align-items-center">
        <form @submit.prevent="createDepartamento" class="form w-25">
        <label>Nº Departamento</label>
        <input type="number" class="form-control" v-model="departamento.numero"/>
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
        name: "CreateDepartamento", 
        data(){
            return{
                departamento: {
                    numero: null, 
                    nombre: null,
                    localidad: null
                }
            }
        }, 
        methods: {
            createDepartamento(){
                let departamento = {
                    numero: parseInt(this.departamento.numero),
                    nombre: this.departamento.nombre, 
                    localidad: this.departamento.localidad
                }
                service.createDepartamento(departamento).then(response => {
                    console.log(response)
                    alert("Se ha creado correctamente")
                    this.$router.push("/")
                })
            }
        }
    }
</script>