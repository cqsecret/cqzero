<template>
  <div class="gender">
    <div>
      <nav-bar>
        <div slot="left">SPOTT</div>
        <div slot="right">
          <b-icon icon="list" scale="1.5"></b-icon>
        </div>
      </nav-bar>
    </div>
    <div class="center-bar">
      <transition name="bottom-in">
        <div v-if="$store.state.genderShow">
          <ul class="mainList">
            <li v-for="item in genderList" :key="item">
              <router-link :to="{name:'category',params:{id: item}}">
                <button @click="$store.state.genderShow = false">{{item}}</button>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>

      <div class="category-list">
        <transition name="bottom-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="bottom-bar">
      <nav-bar>
        <div slot="left" style="font-size:12px">HELP</div>
        <div slot="right">
          <b-icon icon="reply" scale="1"></b-icon>
        </div>
      </nav-bar>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'gender',
    data() {
      return {
        genderList: ['Men', 'Women', 'Boys', 'Girls'],
      }
    },
    computed: {},
    components: {
      NavBar,
    },
    methods: {},
  }
</script>

<style lang="less" scoped>
  .gender {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url('~assets/img/gender/backgroundimg.jpg') no-repeat;
    background-position: center;

    .center-bar {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .category-list {
        position: absolute;
        width: 100%;
        margin: 0 auto;
        z-index: 99;
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
    }
  }
  .bottom-in-enter-active {
    transition: all 0.3s ease-in;
  }
  .bottom-in-enter {
    transform: translateY(5px);
  }
</style>