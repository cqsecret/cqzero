<template>
  <div class="category">
    <div class="backBtn">
      <b-icon @click="$router.go(-1)" class="h4 col-2" icon="arrow90deg-left"></b-icon>
    </div>
    <div class="mainList">
      <p>{{main}}</p>
      <ul>
        <li v-for="item in info" :key="item">
          <button @click="toProducts(item)">{{item}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'category',
    data() {
      return {
        info: ['New arrivals', 'Tops', 'Pants', 'Shoes', 'Underwear'],
        main: '',
      }
    },
    methods: {
      toProducts(item) {
        this.$router.push({
          path: `/products/${item}`,
          // path: '/products/',
        })
      },
    },
    beforeCreate() {
      // this.$store.state.genderShow = false
    },
    created() {
      this.main = this.$route.params.id + ' /'
    },
    destroyed() {
      this.$store.state.genderShow = true
    },
  }
</script>

<style lang='less' scoped>
  p {
    font-weight: 700;
  }

  .mainList {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 0;
    text-align: center;
    font-weight: 600;
    color: #333;

    li {
      margin: 25px 0;
      text-align: center;

      button {
        width: 100px;
        border: none;
        background: transparent;
      }
    }
  }
  .backBtn {
    margin-top: -60px;
  }
</style>