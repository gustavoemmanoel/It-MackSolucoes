<template>
  <div><NewHeader :bannerConteudo="bannerConteudo" /></div>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
export default {
  name: "QuemSomos",
  components: {
    NewHeader,
  },
  data() {
    return {
      bannerConteudo: {
        titleBanner: "Quem somos",
        imgBanner: "/banners/image1.jpg",
      },
    };
  },
};
</script>

<style></style>
