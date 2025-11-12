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
        <button  type="submit" v-else disabled class="btn btn-success mt-2">Modificar</button>
        
    </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
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
                    Swal.fire({
                        title: "Departamento modificado correctamente!",
                        icon: "success"
                    });
                    this.$router.push("/")
                })
            }
        }
    }
</script>

<style scoped>
h1 {
  color: #e0e0e0;
  margin-top: 20px;
}

.form {
  background-color: #2d2d2d;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #404040;
  margin-top: 20px;
}

label {
  color: #e0e0e0;
  margin-top: 10px;
  display: block;
  text-align: left;
}

.form-control {
  background-color: #1a1a1a;
  color: #e0e0e0;
  border-color: #404040;
}

.form-control:focus {
  background-color: #252525;
  color: #e0e0e0;
  border-color: #0d6efd;
}

.form-control:disabled {
  background-color: #1a1a1a;
  color: #666;
}
</style>