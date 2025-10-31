import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos{
    getDepartamentos(){
        return new Promise(function(resolve){
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request;
            axios.get(url).then(response => {
                resolve(response.data) 
            })
        })
    }
    getDepartamento(id){
        return new Promise(function(resolve){
            let request = `api/departamentos/${id}`
            let url = Global.urlDepartamentos+request;
            axios.get(url).then(response => {
                resolve(response.data) 
            })
        })
    }
    createDepartamento(departamento){
        return new Promise(function(resolve) {
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request;
            axios.post(url, departamento).then(response => {
                resolve(response)
            })

        })
    }
    updateDepartamento(departamento){
        return new Promise(function(resolve) {
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request;
            axios.put(url, departamento).then(response => {
                resolve(response)
            })

        })
    }
    deleteDepartamento(id){
        return new Promise(function(resolve){
            let request = `api/departamentos/${id}`
            let url = Global.urlDepartamentos+request;
            axios.delete(url).then(response => {
                resolve(response.data) 
            })
        })
    }
}