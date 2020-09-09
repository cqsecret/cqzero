<template>
  <div>
    <ul>
      <li v-for="(item, index) in needInputList" :key="index">
        <p class="pDefault">{{item}}</p>
        <input type="text" required />
      </li>
    </ul>
    <div class="allBtns">
      <b-button variant="dark" block>BUY</b-button>
      <b-button @click="backTo" variant="light" block>BACK</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pay',
    data() {
      return {
        needInputList: ['Your card *', 'DD/YY *', 'CVV *', 'Your Email *'],
      }
    },
    methods: {
      backTo() {
        this.$router.push('shipping')
      },
    },
  }
</script>

<style lang="less" scoped>
  li {
    margin-bottom: 8px;
  }
  p {
    position: relative;
    bottom: 0;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 500;
    color: #999;
    transition: all 0.1s ease-in;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }

  .allBtns {
    width: 80%;
    position: relative;
    bottom: -160px;
    margin: 0 auto;
  }
</style>