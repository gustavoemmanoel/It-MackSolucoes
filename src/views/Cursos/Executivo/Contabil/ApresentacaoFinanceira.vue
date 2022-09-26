<template>
  <div>
    <NewHeader :bannerConteudo="bannerConteudo" />
    <div class="container">
      <div class="grid">
        <div class="conteudo">
          <img class="principal-video" src="/videos/video4.png" />
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>Apresentação das demonstrações financeiras</h2>
            </div>
            <p>
              As demonstrações contábeis representam a realidade econômica das entidades. O conhecimento das técnicas de
              análise das demonstrações contábeis é fundamental para se poder interpretar essa realidade econômica.
              Assim, se faz relevante para a gestão financeira das empresas, entendimento de setores econômicos,
              investimentos em ações, análise de crédito, aprofundamento do entendimento dos impactos das transações
              econômicas nas empresas entre tantas outras utilidades.
            </p>
          </div>
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>Para Quem é o Curso ?</h2>
            </div>
            <p>Profissionais das áreas de contabilidade, informações gerenciais, finanças, auditoria, controles internos
              e relação com investidores de empresas e instituições financeiras, bem como estudantes e profissionais
              interessados em adquirir conhecimentos técnicos sobre o processo de elaboração de demonstrações contábeis.
            </p>
          </div>
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>Conteúdo</h2>
            </div>
            <ul>
              <li>Técnicas de Análise Horizontal e Vertical e liquidez.</li>

              <li>Análises da geração de caixa e de prazos médios.</li>

              <li>Análise da estrutura patrimonial e das dívidas operacionais e financeiras.</li>

              <li>Análise das margens e da geração e consumo de caixa.</li>

              <li>Análise da Rentabilidade: retorno do patrimônio líquido, retorno do investimento.</li>

              <li>Análise da Rentabilidade: retorno dos diferentes grupos de ativos, custo dos diferentes passivos, anatomia
              completa da rentabilidade. Tratamento do Arrendamento.</li>

              <li>Análise de Indicadores que se utilizam de dados de mercado. Elaboração do relatório de análise. Partindo
              para o próximo passo: projeções.</li>
            </ul>
          </div>
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>Metodologia</h2>
            </div>
            <p>
              O curso baseia-se no conceito de learning by doing, ou seja, utiliza
              um business simulation especializado de nível internacional,
              permitindo aos alunos conectarem os fundamentos com a prática para
              aplicarem imediatamente o aprendizado.
            </p>
          </div>
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>O Que o Faz Único?</h2>
            </div>
            <p>
              Inovador e totalmente on-line, permite um aprendizado rápido,
              flexível e com retenção elevada de conhecimento. Envolvente e
              experiencial, permite que o participante teste o que aprendeu em um
              verdadeiro laboratório virtual. Você desenvolverá conhecimento
              aplicável e prático, utilizando ferramentas típicas de gestão de
              empresas e competências que um administrador de empresas moderno
              necessita para obter sucesso.
            </p>
          </div>
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>Corpo Docente</h2>
            </div>
            <div class="grid-profs">
              <div class="card-profs">
                <img src="/profs/prof1.png" />
                <ul>
                  <li>Bacharel em Ciências Contábeis pela Pontifícia Universidade Católica de SP – PUC.</li>
                  <li>MBA em Gestão Financeira, Auditoria e Controladoria pela FGV – Fundação Getúlio Vargas.</li>
                  <li>Mestrado em Ciências Contábeis pela Universidade Mackenzie.</li>
                  <li>Professor Titular do Curso Ciências Contábeis – Contabilidade Internacional no Centro
                    Universitário
                    Fundação Santo André.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <aside>
          <div class="cont-conteudo">
            
            <button class="btn">
              <b>Faça seu orçamento agora</b>
            </button>
            <p>Mackenzie Soluções | Cursos Ecompany</p>
          </div>
          <div class="cont-conteudo">
            <div class="cont-elementX">
              <div class="elementX"></div>
              <h2>Webnars</h2>
            </div>
            <div class="img-videos">
              <div>
                <img src="/videos/video1.png" />
                <p>Como não perde uma grana, dia 14/07</p>
              </div>
              <div>
                <img src="/videos/video2.png" />
                <p>Como não perde uma grana, dia 14/07</p>
              </div>
              <div>
                <img src="/videos/video3.png" />
                <p>Como não perde uma grana, dia 14/07</p>
              </div>
              <div>
                <img src="/videos/video1.png" />
                <p>Como não perde uma grana, dia 14/07</p>
              </div>
              <div>
                <img src="/videos/video2.png" />
                <p>Como não perde uma grana, dia 14/07</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import NewHeader from "../../../../components/NewHeader.vue";
export default {
  name: "ApresentacaoFinaceira",
  components: {
    NewHeader,
  },
  data() {
    return {
      bannerConteudo: {
        titleBanner: "Apresentação das demonstrações financeiras",
        imgBanner: "/banners/analise-das-demonstracoes-contabeis.jpg",
      },
    };
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}

.principal-video {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 20px 0 0 0;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.cont-conteudo {
  border: 1px solid #cacaca;
  margin: 20px 0;
  padding: 25px 40px;
}

.cont-conteudo p,
.cont-conteudo li {
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #262626;
  margin: 0;
}
h2{
  font-size:20px ;
}


ul {
  margin-left: 30px;
}

.grid-profs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.aside {
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px black;
}

.card-profs {
  width: 100%;
}

.card-profs img {
  width: 250px;
}

.btn {
  border: none;
  border-radius: 6px;
  padding: 10px;
  color: white;
  background: #0086cf;
  width: 100%;
  margin: 10px 0;
}

.img-videos div {
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
}
</style>
