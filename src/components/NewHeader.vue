<template>
  <div>
    <div class="top">
      <div class="cont-logo">
        <img class="logo" src="/MCK.png" />
        <router-link class="routerLink" to="MackenzieSolucoes"
          >Mackenzie Soluções</router-link
        >
      </div>
    </div>

    <nav class="nav">
      <router-link class="routerLink" to="/homeMack">Home</router-link>
      <router-link class="routerLink" to="/homeMack"
        >Cursos de Educação Corporativa</router-link
      >
      <router-link class="routerLink" to="/homeMack">Consultorias</router-link>
      <router-link class="routerLink" to="/homeMack">Produtos</router-link>
      <router-link class="routerLink" to="/homeMack"
        >Estrutura oferecida
      </router-link>
      <router-link class="routerLink" to="/homeMack">Vídeos</router-link>
      <router-link class="routerLink" to="/homeMack">Quem somos</router-link>
      <router-link class="routerLink" to="/homeMack">Contatos</router-link>
    </nav>
    <img class="banner" src="/banners/image1.jpg" />
  </div>
</template>
<script>
export default {
  name: "NewHeader",
};
</script>

<style scoped>
.top {
  background: #212121;
  height: 80px;
  width: 100%;
}
.cont-logo p {
  display: flex;
  align-items: center;
  border-width: 0 0 0 1px;
  height: 45px;
  padding-left: 30px;
  border-style: solid;
  border-color: white;
}
.cont-logo {
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
}
.logo {
  width: 200px;
}

.banner {
  height: 200px;
  width: 100%;
  object-fit: cover;
  background: red;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3c3c3c;
  height: 50px;
}

.routerLink {
  color: white !important;
  text-decoration: none;
  font-weight: 300;
  margin-right: 15px;
  padding-right: 15px;
  border-width: 0 1px 0 0;
  border-style: solid;
  border-color: white;
}
</style>