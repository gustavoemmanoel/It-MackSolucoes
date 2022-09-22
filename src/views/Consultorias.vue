<template>
  <div>
    <NewHeader :bannerConteudo="bannerConteudo" />
 
  </div>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
export default {
  name: "Consultorias",
  components: {
    NewHeader,
  },
  data() {
    return {
      bannerConteudo: {
        titleBanner: "Consultorias",
        imgBanner: "/banners/image2.jpg",
      },
    };
  },
};
</script>

<style></style>
