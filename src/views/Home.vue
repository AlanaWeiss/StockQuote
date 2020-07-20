<template>
  <div class="home">
   <search-bar></search-bar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SearchBar,
  },
  data: () => ({
    initial: null,
  }),
};
</script>
<style lang="scss" src="./Home.scss"></style>
