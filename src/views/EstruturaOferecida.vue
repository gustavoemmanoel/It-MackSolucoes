<template>
  <div>
    <NewHeader :bannerConteudo="bannerConteudo" />
    <div class="container">
      <br />
      <br />
      <div class="grid">
        <div class="cont">
          <div class="cont-elementX">
            <div class="elementX"></div>
            <h2>O Que o Faz Único?</h2>
          </div>
          <ul>
            <li>Técnico de Sonorização</li>
            <li>Auxiliares de Limpeza</li>
            <li>Eletricista e Encanador</li>
            <li>Técnicos dos elevadores e ar condicionado.</li>
            <li>Segurança Patrimonial</li>
            <li>Bombeiro</li>
            <li>Auxiliares Educacionais para suporte</li>
          </ul>
        </div>
        <!--  -->
        <div class="cont">
          <div class="cont-elementX">
            <div class="elementX"></div>
            <h2>Concursos</h2>
          </div>
          <p>Principais empresas parceiras de concursos públicos:</p>
          <ul>
            <li>FUNDAÇÃO CESGRANRIO;</li>
            <li>VUNESP</li>
            <li>FUNDAÇÃO GETULIO VARGAS</li>
            <li>QUADRIX</li>
            <li>CONSESP</li>
          </ul>
        </div>
        <!--  -->
        <div class="cont">
          <div class="cont-elementX">
            <div class="elementX"></div>
            <h2>Espaços Patrocinado</h2>
          </div>
          <p>Por que patrocinar?</p>
          <ul>
            <li>Utilizar a estrutura do Mackenzie;</li>
            <li>Associar o nome de sua empresa à marca Mackenzie;</li>
            <li>Ganhar visibilidade;</li>
            <li>Divulgar projetos num universo de altíssimo nível.</li>
          </ul>
          <p>Quem pode patrocinar?</p>
          <ul>
            <li>Mackenzistas</li>
            <li>Pessoas Físicas;</li>
            <li>Pessoas Jurídicas.</li>
          </ul>
        </div>
      </div>
      <!--  -->
      <br />
      <br />
      <div class="cont">
        <div class="cont-elementX">
          <div class="elementX"></div>
          <h2>Locação de espaço</h2>
        </div>
        <!--  -->
        <div class="list">
          <img class="imgList" src="/banners/image1.jpg" alt="" />
          <div class="contList">
            <h6>
              A competência de business acumen é requerida para profissionais de
              diferentes áreas nas empresas.
            </h6>
            <ul>
              <li>
                Profissionais em fase de evolução na carreira necessitando
                ganhar experiência acelerada.
              </li>
              <li>
                Gerentes e novos executivos necessitando de aprofundamento e
                formação financeira.
              </li>
              <li>
                Participantes em programas de desenvolvimento de liderança
                multifuncional
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="list">
          <img class="imgList" src="/banners/image1.jpg" alt="" />
          <div class="contList">
            <h6>
              A competência de business acumen é requerida para profissionais de
              diferentes áreas nas empresas.
            </h6>
            <ul>
              <li>
                Profissionais em fase de evolução na carreira necessitando
                ganhar experiência acelerada.
              </li>
              <li>
                Gerentes e novos executivos necessitando de aprofundamento e
                formação financeira.
              </li>
              <li>
                Participantes em programas de desenvolvimento de liderança
                multifuncional
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="list">
          <img class="imgList" src="/banners/image1.jpg" alt="" />
          <div class="contList">
            <h6>
              A competência de business acumen é requerida para profissionais de
              diferentes áreas nas empresas.
            </h6>
            <ul>
              <li>
                Profissionais em fase de evolução na carreira necessitando
                ganhar experiência acelerada.
              </li>
              <li>
                Gerentes e novos executivos necessitando de aprofundamento e
                formação financeira.
              </li>
              <li>
                Participantes em programas de desenvolvimento de liderança
                multifuncional
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <br />
    <br />
    <ContatoInput />
  </div>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
import ContatoInput from "../components/ContatoInput.vue";
export default {
  name: "EstruturaOferecida",
  components: {
    NewHeader,
    ContatoInput,
  },
  data() {
    return {
      bannerConteudo: {
        titleBanner: "Estrutura Oferecida",
        imgBanner: "/banners/image7.jpg",
      },
    };
  },
};
</script>

<style>
.container {
  margin: auto;
  max-width: 1100px;
}

.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.cont {
  border: 1px solid #cacaca;
  padding: 10px;
}

ul {
  margin: 0;
  font-size: 14px;
}


/*  */
.list {
  display: flex;
  gap: 15px;
  font-size: 14px;
  margin-bottom: 10px;
}
.imgList {
  width: 250px;
  height: 140px;
  object-fit: cover;
}

.contList {
  display: flex;
  flex-direction: column;
}
</style>
