<template>
    <center>
    <h1>Produk</h1>
    </center>
    <div class="flex-container" style="margin-left: 7%;">
      <div v-for="produk in state" :key="produk.id" class="card">
        <img :src="getImgSrc(produk.img)" alt="">
        <router-link class="container" :to="{name: 'Detail', params: { id_produk: produk.id}}">
          <h4>{{ produk.nama }}</h4>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
    import {
      onMounted , reactive
    } from 'vue'
    import { produk } from '../assets/Produk';
  
    export default {
      setup(props, context)
      {
        const state = reactive(produk["produk"]);
  
        const getImgSrc = (imgFileName) => {
          return '../src/assets/img/' + imgFileName + ''; 
        };
  
        onMounted(() => {
          context.emit("id-menu", 4)
        });
        return {
          state,
          getImgSrc
        }
      }
    }
  </script>
  
  <style scoped>
    .flex-container{
      display: flex;
      flex-wrap: wrap;
    }
  .card{
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
    text-align: center;
  }
  .container{
    padding: 2px 16px;
  }
  
  img{
    width: 200px;
    height: 160px;
  }
  </style>