<template>
  <div>
    <div class="top">
      <div class="cont-logo">
        <img class="logo" src="/MCK.png" />
        <router-link class="nav-link" to="MackenzieSolucoes"
          >Mackenzie Soluções</router-link
        >
      </div>
    </div>

    <nav class="nav bg-dark justify-content-center">
      <router-link class="linha nav-link nav-item active" to="/PaginaInicial"
        >Página Inicial</router-link
      >
      <div class="nav-link nav-item dropdown">
        <button
          class="bg-dark text-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cursos de Educação Corporativa
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/Executivo">Executivo</a></li>
          <li><a class="dropdown-item" href="/Extensao">Extensão</a></li>
        </ul>
      </div>
      <router-link class="nav-link nav-item" to="/Consultorias"
        >Consultorias</router-link
      >
      <router-link class="nav-link nav-item" to="/Produtos"
        >Produtos</router-link
      >
      <router-link class="nav-link nav-item" to="/EstruturaOferecida"
        >Estrutura oferecida</router-link
      >
      <router-link class="nav-link nav-item" to="/Videos">Vídeos</router-link>
      <router-link class="nav-link nav-item" to="/QuemSomos"
        >Quem somos</router-link
      >
      <router-link class="nav-link nav-item" to="/Contato"
        >Contatos</router-link
      >
    </nav>
    <div class="bannerContainer">
      <h1>{{ bannerConteudo.titleBanner }}</h1>
      <img class="banner" :src="bannerConteudo.imgBanner" />
    </div>
  </div>
</template>
<script>
export default {
  name: "NewHeader",
  props: {
    bannerConteudo: String,
  },
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

.bannerContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  position: relative;
}
h1 {
  z-index: 1;
  position: relative;
  color: #fafafa;
  text-shadow: #3c3c3c 2px 2px 4px;
}
.banner {
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
}

.nav-link {
  color: #fafafa;
  text-decoration: none;
  font-weight: 300;
  padding-right: 15px;
  border-width: 0 2px 0 0;
  border-style: solid;
  border-color: #3c3c3c;
}

.linha {
  border-width: 0 1px 0 1px;
}

.dropdown-toggle {
  border: none;
  font-weight: 300;
}

select::selection {
  background-color: red;
}
</style>
