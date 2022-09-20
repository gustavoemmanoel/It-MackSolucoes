<template>
  <div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Roboto', sans-serif; */

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700;800;900&display=swap");
/* font-family: 'Roboto Slab', serif; */
* {
  font-family: "Roboto", sans-serif !important;
  padding: 0;
  margin: 0;
}
.routerLink {
  text-decoration: none;
}
</style>
