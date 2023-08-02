<template>
    <br>
    <br>
  <center>
  <div>
    <img :src="getImgSrc(detail.img)" alt="Category Image" />
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Harga : {{ detail.harga }}</h4>
    <h4>Deskripsi : {{ detail.deskripsi }}</h4>
  </div>
  </center>
  </template>
  
  <script>
  import { produk } from '../assets/Produk';
  
  export default {
    props: ['id_produk'],
    setup(props) {
      const getImgSrc = (imgFileName) => {
          return "../src/assets/img/" + imgFileName + '';
        };
      const detail = produk['produk'].find(function (item) {
        return item.id == props.id_produk;
      });
      return {
        detail,
        getImgSrc
      };
    },
  };
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
width: 240px;
height: 190px;
}
</style>  