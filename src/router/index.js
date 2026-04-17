import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../view/Inicio.vue";
import Galeria from "../view/Galeria.vue";
import SobreNosotros from "../view/SobreNosotros.vue";
import Contactanos from "../view/Contactanos.vue";

const router = createRouter({
    history: createWebHistory(), 
    routes:[
        {
            path: '/',
            name: "Inicio",
            component: Inicio
        },
        {
            path: '/galeria',
            name: "Galeria",
            component: Galeria
        },
        {
            path: '/sobreNosotros',
            name: "SobreNosotros",
            component:SobreNosotros
        },
        {
            path:'/contactanos',
            name:"Contactanos",
            component:Contactanos
        },
    ] 
})
export default router;