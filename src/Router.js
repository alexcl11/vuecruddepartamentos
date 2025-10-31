import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue';
import CreateDepartamento from './components/CreateDepartamento.vue';
import UpdateDepartamento from './components/UpdateDepartamento.vue';
import DetailsDepartamento from './components/DetailsDepartamento.vue';
import DeleteDepartamento from './components/DeleteDepartamento.vue';

const myRoutes = [
    {path:"/", component: DepartamentosComponent},
    {path:"/createdepartamento", component: CreateDepartamento},
    {path:"/updatedepartamento/:id", component: UpdateDepartamento},
    {path:"/detailsdepartamento/:id/:nombre/:localidad", component: DetailsDepartamento},
    {path:"/delete/:id", component: DeleteDepartamento},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router