<template>
  <div>
    <NewHeader :bannerConteudo="bannerConteudo" />
  </div>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
export default {
  name: "Produtos",
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

<style></style>
