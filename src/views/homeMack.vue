<template>
  <div class="container">
    <input class="pesquisar" type="text" placeholder="Digite um curso" />
    <div class="card-grid">
      <div v-for="(grid, index) in cardInfos.conteudos" :key="index">
        <div>
          <router-link class="routerLink" :to="grid.toLink">
            <div class="card">
              <div class="container-card">
                <img class="img" :src="grid.imgCard" />
                <div class="hover" />
                <p class="text-card-hover">Visitar</p>
              </div>
              <div class="cont-text">
                <div style="display: flex; gap: 5px; margin-bottom: 10px">
                  <div class="elementoX"></div>
                  <h5>
                    {{ grid.nameLab }}
                  </h5>
                </div>
                <p>{{ grid.description }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeMack",
  data() {
    return {
      cardInfos: {
        conteudos: [
          {
            nameLab: "Nome do curso",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting ets containing Lorem Ipsum passages, and em Ipsum.",
            imgCard: "/banners/image1.jpg",
            toLink: "./homeMack",
          },
          {
            nameLab: "Nome do curso",
            description:
              "Lorem Ipsumn Maker including versions of Lorem Ipsum.",
            imgCard: "/banners/image2.jpg",
            toLink: "./homeMack",
          },
          {
            nameLab: "Nome do curso",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetti Maker including versions of Lorem Ipsum.",
            imgCard: "/banners/image3.jpg",
            toLink: "./homeMack",
          },
          {
            nameLab: "Nome do curso",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typese desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imgCard: "/banners/image4.jpg",
            toLink: "./homeMack",
          },
          {
            nameLab: "Nome do curso",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetstandard dummy text ever since the 1500m Ipsum.",
            imgCard: "/banners/image5.jpg",
            toLink: "./homeMack",
          },
          {
            nameLab: "Nome do curso",
            description:
              "Dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s, ke Aldus PageMaker including versions of Lorem Ipsum.",
            imgCard: "/banners/image6.jpg",
            toLink: "./homeMack",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
}

.pesquisar {
  height: 40px;
  margin: 30px 0;
  width: 400px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  border-radius: 6px;
  color: #cccccc;
  justify-self: flex-start;
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.card {
  background: #fafafa;
  width: 100%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.149);
  cursor: pointer;
}
.container-card {
  display: flex;
  position: relative;
}
.text-card-hover {
  position: absolute;
  margin: auto;
  color: white;
  opacity: 0;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: 300;
  transition: 0.3s;
}
.elementoX {
  display: flex;
  height: 26px;
  width: 3px;
  background: #24698f;
}
h5 {
  font-size: 20px;
}
.card:hover .text-card-hover {
  opacity: 1;
  transition: 0.1s;
}
.hover {
  position: absolute;
  background: black;
  transition: 0.3s;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.card:hover .hover {
  transition: 0.1s;
  opacity: 0.4;
}
.img {
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-width: 0 0 5px 0;
  border-style: solid;
  border-color: #af1816;
}
.cont-text {
  color: black;
  font-size: 16px;
  padding: 10px;
}
.cont-text p {
  color: #5f5f5f;
  font-size: 14px;
}
</style>