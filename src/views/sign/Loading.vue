<template>
  <div class="loading">
    <div class="mainhead">
      <h1 class="mallName">SPOTT</h1>
    </div>
    <transition name="slide-fade-1">
      <div class="mainbody" v-if="$store.state.loadingShow">
        <div class="bgImg">
          <img src="~assets/img/sign/sign.jpg" />
        </div>
        <div class="loadbtns" @click="$store.state.loadingShow = false">
          <b-button-group vertical>
            <router-link to="/login">
              <b-button>LOGIN</b-button>
            </router-link>
            <router-link to="/signup">
              <b-button variant="light">SIGN UP</b-button>
            </router-link>
          </b-button-group>
        </div>
      </div>
    </transition>
    <transition name="slide-fade-2">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style lang="less" scoped>
  .loading {
    height: 100%;
  }
  .mallName {
    width: 100%;
    height: 100%;
    line-height: 145px;
    text-align: center;
  }

  .mainbody {
    width: 100%;
    position: absolute;
    top: 150px;
    background-color: #ccc;

    .bgImg {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .loadbtns {
      margin: 0 auto;
      text-align: center;
      margin-top: 120px;

      button {
        width: 130px;
      }
    }
  }

  .slide-fade-1-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-2-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-1-enter,
  .slide-fade-2-enter {
    transform: translateX(-20px);
  }

  .slide-fade-2-leave-to {
    opacity: 0;
  }
</style>