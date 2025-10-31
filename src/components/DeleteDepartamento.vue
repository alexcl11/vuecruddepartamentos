<template>
    <h1>
        Eliminar Departamento
    </h1>
</template>

<script>
    import Swal from 'sweetalert2'
    import ServiceDepartamentos from '@/services/ServiceDepartamentos'
    const service = new ServiceDepartamentos()
    export default{
        name: "DeleteDepartamento", 
        mounted(){
            let id = this.$route.params.id;
            service.deleteDepartamento(id).then(response => {
                console.log(response)
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
                            this.$router("/")
                        })
                        
                    }
                });
            })
        }
    }
</script>