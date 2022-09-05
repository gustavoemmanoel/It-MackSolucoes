<template>
  <div>
    <el-button>
      mateus
    </el-button>

    <NewHeader />
    <router-view />
    <NewFooter />
  </div>
</template>

<script>
import NewFooter from "./components/NewFooter.vue";
import NewHeader from "./components/NewHeader.vue";
export default {
  name: "app",
  components: {
    NewHeader,
    NewFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  font-family: "roboto";
  padding: 0;
  margin: 0;
}
.routerLink {
  text-decoration: none;
}
</style>
