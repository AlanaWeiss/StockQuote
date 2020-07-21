<template>
  <div class="home">
   <search-bar v-on:symbolSearched="search"></search-bar>
    <data-view :symbol="symbol"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataView from '@/components/DataView.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';

export default {
  name: 'Home',
  components: {
    DataView,
    SearchBar,
  },
  data: () => ({
    initial: null,
    symbol: null,
  }),
  methods: {
    search(value) {
      this.symbol = value;
    },
  },
};
</script>
<style lang="scss" src="./Home.scss"></style>
