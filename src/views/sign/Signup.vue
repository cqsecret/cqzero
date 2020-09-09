<template>
  <div class="sdiv">
    <div class="backbtn row">
      <b-icon @click="back" class="h4 col-2" icon="arrow90deg-left"></b-icon>
    </div>
    <b-container fluid>
      <b-row class="my-1" v-for="item in info" :key="item.txt">
        <b-col sm="3">
          <label :for="`type-${item.txt}`">{{ item.txt }}</label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-${item.txt}`" :type="item.type"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-button class="signupbtn" variant="dark">Submit</b-button>
  </div>
</template>

<script>
  export default {
    name: 'signup',
    data() {
      return {
        info: [
          {
            type: 'text',
            txt: 'Nickname',
          },
          {
            type: 'text',
            txt: 'meal',
          },
          {
            type: 'text',
            txt: 'Realname',
          },
          {
            type: 'date',
            txt: 'Birthday',
          },
          {
            type: 'tel',
            txt: 'Telephone',
          },
          {
            type: 'email',
            txt: 'E-mail',
          },
        ],
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
        this.$store.state.loadingShow = true
      },
    },
  }
</script>

<style lang="less" scoped>
  .sdiv {
    width: 100%;
    overflow: hidden;
    background-color: #eee;

    .signupbtn {
      display: block;
      width: 130px;
      margin: 0 auto;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
</style>