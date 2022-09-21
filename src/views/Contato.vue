<template>
  <div>
    <NewHeader :bannerConteudo="bannerConteudo" />
    <div class="contact">
      <div style="display: flex; gap: 5px; margin-bottom: 10px">
        <div class="elementoX"></div>
        <h4>Contato</h4>
      </div>
      <div class="cont-contact">
        <div class="fale">
          <p>Fale conosco | Mackenzie Soluções</p>
          <div class="cont-input">
            <p>Nome:</p>
            <input type="text" />
          </div>
          <div class="cont-input">
            <p>E-mail:</p>
            <input type="text" />
          </div>
          <div class="cont-input">
            <p>Assunto:</p>
            <input type="text" />
          </div>
          <div class="cont-input">
            <p>Mensagem:</p>
            <input type="text" />
          </div>
        </div>
        <img class="map" src="/map.png" />
      </div>
    </div>
  </div>
</template>
<script>
import NewHeader from "../components/NewHeader.vue";
export default {
  name: "Contato",
  components: {
    NewHeader,
  },
  data() {
    return {
      bannerConteudo: {
        titleBanner: "Produtos",
        imgBanner: "/banners/image3.jpg",
      },
    };
  },
};
</script>

<style scoped>
.contact {
  background: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;
  margin-top: 60px;
}

.elementoX {
  display: flex;
  height: 26px;
  width: 3px;
  background: #24698f;
  margin-bottom: 15px;
}
h4 {
  font-size: 26px;
}
.cont-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.fale {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.fale input {
  width: 100%;
  height: 28px;
  border: 1px solid rgb(174, 174, 174);
}

.cont-input {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.cont-input p {
  margin-right: 10px;
  text-align: right;
  width: 100px;
}

.map {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
