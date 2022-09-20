<template>
  <div class="container">
    <div class="flex" v-for="(youtubeX, index) in youtube" :key="index">
      <div class="contImg">
        <img class="imgYt" :src="youtubeX.imgYt" />
        <div class="time">{{ youtubeX.time }}</div>
      </div>
      <div>
        <h6>
          {{ youtubeX.title }}
        </h6>
        <p>{{ youtubeX.data }}</p>
        <p class="description">
          {{ youtubeX.descricao }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Videos",
  data() {
    return {
      youtube: [
        {
          title:
            "WEBINAR - A IMPORTÂNCIA DA GESTÃO ESTRATÉGICA FRENTE AO MUNDO VUCA QUE VIVEMOS - 26/01",
          imgYt: "/youtube/img_1.jpg",
          data: "há 1 ano",
          descricao:
            "No dia 26 de janeiro, às 19h, o Centro de Ciências Sociais e Aplicadas (CCSA) da Universidade Presbiteriana Mackenzie (UPM) realizou o webinar “A importância da Gestão Estratégica frente ao mundo VUCA que vivemos”. ",
          time: "8:20",
        },
        {
          title:
            "WEBINAR - MERCADO FINANCEIRO E SEUS RISCOS: UMA DISCUSSÃO SOBRE INVESTIMENTOS - 21/01",
          imgYt: "/youtube/img_2.jpg",
          data: "há 1 ano",
          descricao:
            'No dia 21 de janeiro, às 19h, foi realizado o webinar "Mercado Financeiro e seus Riscos: uma discussão sobre investimentos", organizado pelo Centro de Ciências Sociais e Aplicadas (CCSA) da Universidade Presbiteriana Mackenzie (UPM).',
          time: "8:20",
        },
        {
          title:
            "WEBINAR - O IMPACTO DA LIDERANÇA NA TRANSFORMAÇÃO ORGANIZACIONAL E GESTÃO DE PESSOAS - 20/01",
          imgYt: "/youtube/img_3.jpg",
          data: "há 1 ano",
          descricao:
            'No dia 20 de janeiro de 2021, às 19h, aconteceu o webinar "O Impacto da Liderança na Transformação Organizacional e Gestão de Pessoas", organizado pelo Centro de Ciências Sociais e Aplicadas (CCSA) da Universidade Presbiteriana Mackenzie (UPM).',
          time: "8:20",
        },
        {
          title:
            "WEBINAR MACK TALKS - A FORÇA DA MARCA COMO REFERÊNCIA NO MUNDO DA COMUNICAÇÃO - 17/11/20",
          imgYt: "/youtube/img_4.png",
          data: "há 2 ano",
          descricao:
            "No dia 17 de novembro foi realizada a 11ª edição do Mack Talks, série de encontros virtuais para debater cenários e tendências do mundo corporativo, promovido pelo Mackenzie Soluções, área de negócios do Instituto...",
          time: "8:20",
        },
      ],
    };
  },
};
</script>

<style>
.container {
  margin-top: 30px;
  width: 1200px;
}
.flex {
  display: flex;
}

h6 {
  font-weight: 600;
}

.description {
  color: gray;
}

.contImg {
  position: relative;
  object-fit: cover;
  width: 360px;
  height: 202px;
}

.imgYt {
  background: black;
  height: 100%;
  object-fit: contain;
}

.time {
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 0 4px;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.8);
  height: max-content;
}

.flex {
  margin-bottom: 20px;
  gap: 20px;
}
</style>
