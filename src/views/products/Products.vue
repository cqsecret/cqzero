<template>
  <div class="products">
    <div class="topB">
      <nav-bar>
        <div slot="left">SPOTT</div>
        <div slot="right">
          <b-icon icon="list" scale="1.5"></b-icon>
        </div>
      </nav-bar>
    </div>
    <div class="center-bar">
      <ul>
        <li
          v-for="(item,index) in $store.state.productsInfo"
          :key="index"
          @click="toDetail(item)"
          :style="{'background-image':'url('+ item.surl+ ')'}"
        >
          <nav-bar class="proInfo">
            <div slot="left" v-if="isShow(item)">
              <img :src="item.logo" alt />
            </div>
            <div slot="right" v-if="isShow(item)">{{item.name}}</div>
          </nav-bar>
          <nav-bar class="proInfo">
            <div slot="left" class="ft-cl" v-if="isShow(item)">${{item.price}}</div>
            <div slot="right" v-if="isShow(item)">
              <b-icon
                :icon="item.isFavorites ? 'heart-fill' : 'heart'"
                :variant="item.isFavorites ? 'danger': 'dark'"
              ></b-icon>
            </div>
          </nav-bar>
        </li>
      </ul>
    </div>
    <div class="bottomB">
      <nav-bar>
        <div slot="left">
          <b-icon icon="text-left" scale="1"></b-icon>
        </div>
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
    name: 'products',
    data() {
      return {
        favorites: 'heart',
      }
    },
    computed: {
      isShow(item) {
        return function (item) {
          return true
        }
      },
    },
    methods: {
      toDetail(item) {
        this.$router.push(`/detail/${item.num}`)
      },
    },
    components: {
      NavBar,
    },
  }
</script>

<style lang="less" scoped>
  .products {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #eee;

    .topB {
      position: fixed;
      top: 0;
      width: 100%;
    }
  }

  .center-bar {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 44px 0;

    ul {
      height: 100%;
      margin-bottom: 0;

      li {
        height: 33%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom: 1px solid #fff;

        .proInfo {
          box-shadow: none;
          font-size: 13px;
          font-weight: 500;
          color: #999;

          .ft-cl {
            color: #333;
          }
        }

        img {
          width: 100%;
        }
      }
    }
  }
  .bottomB {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>