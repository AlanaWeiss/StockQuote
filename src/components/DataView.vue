/* eslint-disable prefer-destructuring */
<template>
  <div class="hello">
      <h1>{{symbol}}</h1>
      <h2>{{apiData}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    symbol: String,
  },
  data: () => ({
    apiData: {
      symbol: '',
      latestDate: '',
      open: '',
      close: '',
      high: '',
      low: '',
      volume: '',
    },
  }),
  watch: {
    // eslint-disable-next-line object-shorthand, func-names
    symbol: function (newVal) {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${newVal}&apikey=NKBP6XMV10MR04SY`)
        .then((response) => response.json())
        .then((data) => {
          this.apiData.symbol = data['Meta Data']['2. Symbol'];
          // eslint-disable-next-line prefer-destructuring
          const entries = Object.entries(data['Time Series (Daily)']);
          // eslint-disable-next-line prefer-destructuring
          this.apiData.latestDate = entries[0][0];
        });
    },
  },
};
</script>
