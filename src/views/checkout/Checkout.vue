<template>
  <div>
    <div>
      <nav-bar>
        <div slot="left">SPOTT</div>
        <div slot="right">
          <b-icon icon="list" scale="1.5"></b-icon>
        </div>
      </nav-bar>
    </div>
    <div class="check-info">
      <div class="back-btn">
        <b-icon icon="caret-left-fill" scale="0.8" shift-v="-2"></b-icon>
        <span class="min-font" @click="backToDetails">CART</span>
      </div>
      <div>
        <ul class="nav-checkInfo">
          <li
            v-for="(item,index) in navInfo"
            :key="index"
            :class="{active: isActive(index)}"
          >
            <router-link
              :to="'/checkout/' + itemToLowerCase(item)"
              tag="div"
            >{{index+1}}.{{item}}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <transition name="route-fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <div class="footBar">
      <nav-bar>
        <div slot="left" class="min-font">HELP</div>
        <div slot="right">
          <b-icon icon="reply"></b-icon>
        </div>
      </nav-bar>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'checkout',
    data() {
      return {
        navInfo: ['ADDRESSES', 'SHIPPING', 'PAY'],
      }
    },
    computed: {
      isActive: function () {
        return function (index) {
          return (
            this.$route.name.toLowerCase() == this.navInfo[index].toLowerCase()
          )
        }
      },
      itemToLowerCase: function () {
        return function (item) {
          return item.toLowerCase()
        }
      },
    },
    methods: {
      backToDetails() {
        this.$router.push('/cart')
      },
    },
    components: {
      NavBar,
    },
  }
</script>

<style lang="less" scoped>
  .min-font {
    font-size: 12px;
    color: #333;
    font-weight: 700;
  }

  .check-info {
    padding: 16px;

    .nav-checkInfo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      margin: 25px 0;

      li {
        width: 33%;
        border-bottom: 1px solid #999;
        padding-bottom: 10px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #999;
      }

      .active {
        color: #000;
        border-color: #000;
      }
    }
  }

  .footBar {
    position: fixed;
    width: 100%;
    bottom: 0;
  }

  .route-fade-enter-active {
    transition: all 0.8s ease-in;
  }
  .route-fade-leave-active {
    transition: all 0.2s linears;
  }
  .route-fade-enter {
    opacity: 0;
    transform: translateX(20px);
  }
  .route-fade-leave-to {
    opacity: 0;
    transform: translateX(40px);
  }
</style>