<template>
  <div>
    <NewHeader :bannerConteudo="bannerConteudo" />
  </div>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
export default {
  name: "Extensao",
  components: {
    NewHeader,
  },
  data() {
    return {
      bannerConteudo: {
        titleBanner: "Extensão",
        imgBanner: "/banners/image4.jpg",
      },
    };
  },
};
</script>
