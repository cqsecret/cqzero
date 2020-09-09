<template>
  <div class="rdiv">
    <div class="backbtn row">
      <b-icon @click="back" class="h4 col-2" icon="arrow90deg-left"></b-icon>
    </div>
    <div class="logindiv">
      <form action>
        <label for="username">USERNAME</label>
        <br />
        <input name="username" id="username" type="text" />
        <br />
        <label for="password">PASSWORD</label>
        <br />
        <input name="password" id="password" type="current-password" />
        <b-button class="logcontinue" @click="loadTo" variant="light">CONTINUE</b-button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      back() {
        this.$router.go(-1)
        this.$store.state.loadingShow = true
      },
      loadTo() {
        this.$router.push('/gender')
      },
    },
  }
</script>

<style lang="less" scoped>
  .rdiv {
    width: 100%;
    background-color: #eee;
    margin-top: -5px;
    overflow: hidden;

    .backbtn {
      margin-bottom: 10px;
    }
  }

  .logindiv {
    width: 90%;
    margin: 0 auto;
    font-size: 12px;

    input {
      display: inline-block;
      width: 100%;
      border: none;
      margin-bottom: 20px;
      border-bottom: 1px solid #000;
      font-size: 1rem;
      background-color: transparent;
    }

    button {
      display: block;
      width: 130px;
      margin: 0 auto;
      margin-top: 25px;
      margin-bottom: 5px;
    }
  }
</style>