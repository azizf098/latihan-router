import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/components/Home.vue"; 
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Produk from "@/components/Produk.vue";
import Detail from "@/components/Detail.vue";
import Kategori from '@/components/Kategori.vue';
import DetailKategori from '@/components/DetailKategori.vue';

import Login from '@/components/Login.vue';
import { user } from '../assets/user';

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = user.find((user) => user.isLoggedIn == true);
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login 
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login 
      }
    },
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;