import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import PedidosView from "@/views/PedidosView.vue";
<<<<<<< HEAD
import ConfiguracaoPedidoView from "@/views/ConfiguracaoPedidoView.vue";
=======
>>>>>>> e1660a4 (Minhas alterações no projeto)

const routes = [
  {
    path: "/",
    name: "home",
    component: MenuView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView,
  },
<<<<<<< HEAD
  {
    path: "/config-pedido",
    name: "config-pedido",
    component: ConfiguracaoPedidoView,
  },
=======
>>>>>>> e1660a4 (Minhas alterações no projeto)
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
