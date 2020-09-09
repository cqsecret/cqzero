<template>
  <div class="detail" @touchstart="handleStart" @touchend="handleEnd">
    <div class="topBar">
      <nav-bar>
        <div slot="left">SPOTT</div>
        <div slot="right" @click="isShowChoice = true">
          <b-icon icon="list" scale="1.5"></b-icon>
        </div>
      </nav-bar>
    </div>
    <div class="main-choice-list" v-show="isShowChoice">
      <div class="choice-top">
        <div class="fl">SPOTT</div>
        <div class="fr">
          <button>
            <b-icon icon="person" scale="1.3"></b-icon>
          </button>
          <span class="column-line"></span>
          <button @click="toCart">
            <sup>
              <b-badge variant="danger">{{$store.state.cartList.length}}</b-badge>
            </sup>
            <b-icon icon="handbag" scale="1"></b-icon>
          </button>
          <span class="column-line"></span>
          <button @click="isShowChoice = false">
            <b-icon icon="x" scale="1.8"></b-icon>
          </button>
        </div>
      </div>
      <div class="main-list">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Boys</li>
          <li>Girls</li>
          <li>Sale</li>
          <li>Services</li>
        </ul>
      </div>
      <div>
        <nav-bar class="choice-bottom">
          <div slot="left" class="min-font">HELP</div>
          <div slot="right">
            <b-icon icon="reply" scale="1" variant="dark"></b-icon>
          </div>
        </nav-bar>
      </div>
    </div>
    <div class="main-carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        img-width="375"
        img-height="520"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide :img-src="imgA[0]"></b-carousel-slide>

        <b-carousel-slide :img-src="imgA[1]"></b-carousel-slide>

        <b-carousel-slide :img-src="imgA[2]"></b-carousel-slide>
      </b-carousel>
    </div>
    <transition name="fadeIn">
      <div class="addToCart" v-if="mainInfoBottom != '-30%'">
        <div class="backgroundDiv"></div>
        <button :style="checkBtnStyle" @click="handleCheck($route.params.id)">
          {{toCartString}}
          <b-icon icon="check" v-if="isChecked" class="h2" shift-v="-2"></b-icon>
        </button>
      </div>
    </transition>
    <div
      class="main-info"
      :style="{bottom: mainInfoBottom, width: mainInfoWidth, left: mainInfoLeft}"
    >
      <div class="info-first">
        <div class="fl">
          <p style="font-weight: 700">NIKE REACT ELEMENT SS</p>
          <p style="font-size: 12px;color: #999">WOMEN'S SHOES</p>
        </div>
        <div class="fr">
          <b-icon icon="three-dots" variant="secondary" class="h4"></b-icon>
        </div>
      </div>
      <div class="info-price">
        <div class="fl">
          $130
          <span>210</span>
        </div>
        <div
          class="fr min-font"
          v-show="mainInfoBottom !== '0'"
          @click="handleCollection($route.params.id)"
        >
          <b-icon :icon="favorites" :variant="heartColor"></b-icon>
        </div>
      </div>
      <div class="info-color">
        <p class="min-font">COLOR</p>
        <div>
          <label>
            <input type="radio" name="color" value="black" checked />
          </label>
          <label>
            <input type="radio" name="color" value="white" />
          </label>
          <label>
            <input type="radio" name="color" value="blue" />
          </label>
          <label>
            <input type="radio" name="color" value="yellow" />
          </label>
        </div>
      </div>
      <div class="info-size">
        <p class="min-font">SIZE</p>
        <ul>
          <li>250</li>
          <li>255</li>
          <li class="active-size">260</li>
          <li>265</li>
          <li>270</li>
          <li>275</li>
          <li>280</li>
        </ul>
      </div>
      <div class="info-foot">
        <button class="fl" @click="toMoreInfo">
          <b-icon icon="caret-down-fill" shift-v="-4"></b-icon>
          <span>MORE INFO</span>
        </button>
        <div class="fr">
          <b-icon icon="reply"></b-icon>
        </div>
      </div>
    </div>
    <transition name="moreInfoShow">
      <div class="more-info" v-if="ifShow">
        <div class="more-info-first">
          <button class="fl" @click="backMainInfo">
            <b-icon icon="caret-up-fill"></b-icon>
            <span>BACK</span>
          </button>
          <div class="fr">
            <b-icon icon="three-dots" variant="secondary" class="h4"></b-icon>
          </div>
        </div>
        <div class="more-info-details">
          <h6 style="font-weight: 700">DETAILS</h6>
          <p>
            The Nike React Element 55 Women's Shoe borrows design lines from heritage Nike runners like the Internationalist, adds reflective graphics then places it all on Nike React technology.
            <br />The rubber pods on the midsole and outsole of the sneaker are more than an eye-catching design element.
          </p>
        </div>
        <div class="more-info-foot">
          <button class="fl" @click="backToProducts">
            <b-icon icon="caret-down-fill" shift-v="-4"></b-icon>
            <span>REVIEWS</span>
          </button>
          <div class="fr moreQuestion">
            <span>SHOPPING</span>
            <b-icon icon="question-circle"></b-icon>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  const imgA = [
    require('assets/img/products/detail/shoesDet4.jpg'),
    require('assets/img/products/detail/shoesDet2.jpg'),
    require('assets/img/products/detail/shoesDet3.jpg'),
  ]

  export default {
    name: 'detail',
    data() {
      return {
        isShowChoice: false,
        slide: 0,
        sliding: null,
        imgA,
        movestartY: 0,
        moveendY: 0,
        toCartString: 'ADD TO CART',
        isChecked: false,
        checkBtnStyle: {
          width: '30%',
          height: '40px',
          left: '35%',
          borderRadius: '5px',
        },
        mainInfoLeft: '0',
        mainInfoBottom: '-30%',
        mainInfoWidth: '100%',
        isCollection: true,
        ifShow: false,
      }
    },
    computed: {
      // 收藏红心填充
      favorites() {
        return this.isCollection ? 'heart' : 'heart-fill'
      },
      // 收藏红心颜色
      heartColor() {
        return this.isCollection ? 'dark' : 'danger'
      },
    },
    methods: {
      // 轮播组件
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },

      // 加入购物车按钮事件
      handleCheck(num) {
        this.isChecked = true
        this.toCartString = ''
        this.checkBtnStyle = {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          left: '45%',
        }
        this.$store.commit('addToCartList', num)
      },

      // 屏幕上下滑动事件
      handleStart(event) {
        let touch = event.changedTouches[0]
        this.movestartY = touch.screenY
      },
      handleEnd(event) {
        let touch = event.changedTouches[0]
        this.moveendY = touch.screenY
        let moveY = this.movestartY - this.moveendY
        if (this.ifShow) {
          return
        }
        if (Math.abs(moveY) < 50) {
          return
        } else {
          if (moveY > 0) {
            // move up
            this.mainInfoBottom = '0'
          } else {
            // move down
            this.mainInfoBottom = '-30%'
          }
        }
      },
      // 产品收藏事件
      handleCollection(num) {
        this.isCollection = !this.isCollection
        this.$store.commit('proCollect', num)
      },
      toMoreInfo() {
        this.mainInfoWidth = '90%'
        this.mainInfoBottom = '20px'
        this.mainInfoLeft = '5%'
        this.ifShow = true
      },
      backMainInfo() {
        this.ifShow = false
        this.mainInfoWidth = '100%'
        this.mainInfoBottom = '0'
        this.mainInfoLeft = '0'
      },
      backToProducts() {
        this.$router.go(-1)
      },
      toCart() {
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
  button {
    border: none;
    outline: none;
    background-color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
  .detail {
    height: 100%;
    overflow: hidden;
    position: relative;

    .topBar {
      width: 100%;
      position: fixed;
      background: transparent;
      z-index: 1;
      color: #fff;
    }
    .main-choice-list {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 99;
      background-color: #fff;
      opacity: 0.95;

      .choice-top {
        height: 44px;
        line-height: 44px;
        font-size: 1rem;
        font-weight: 700;
        margin: 0 5px;

        button {
          width: 30px;
        }

        .fr {
          margin-right: 10px;
        }

        .column-line {
          display: inline-block;
          height: 12px;
          border-right: 1px solid #999;
          margin: 0 10px;
        }

        button {
          font-size: 12px;
        }
      }

      .main-list {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 600;

        ul > li {
          margin-bottom: 40px;
        }
      }
    }
    .main-carousel {
      position: absolute;
      z-index: 0;
    }
    .addToCart {
      width: 100%;
      height: 100%;

      .backgroundDiv {
        width: 100%;
        height: 100%;
        background-color: #666;
        opacity: 0.5;
      }

      button {
        position: absolute;
        top: 20%;
        transition: all 0.3s linear;
      }
    }
    .main-info {
      position: absolute;
      // left: 0;
      padding: 20px;
      height: 50%;
      background-color: #fff;
      transition: all 0.5s linear;

      p {
        margin-bottom: 10px;
      }

      .info-first {
        overflow: hidden;
      }

      .info-price {
        font-weight: 700;
        margin: 10px 0 25px 0;
        overflow: hidden;

        span {
          font-weight: normal;
          font-size: 0.5rem;
          color: #999;
          text-decoration: line-through;
        }
      }
      .info-color {
        margin-bottom: 15px;

        label {
          margin-bottom: 0;
        }
        input {
          margin-right: 1.5rem;
        }
      }
      .info-size {
        overflow: hidden;
        .active-size {
          color: #000;
          font-weight: 700;
        }
        li {
          float: left;
          margin-right: 20px;
          font-size: 14px;
          color: #aaa;
        }
      }
      .info-foot {
        overflow: hidden;
        margin-top: 30px;
      }
    }
    .more-info {
      position: absolute;
      width: 100%;
      padding: 20px;
      height: 50%;
      background-color: #fff;
      bottom: 0;
    }

    .more-info-first {
      overflow: hidden;
      margin-bottom: 30px;
    }
    .more-info-details {
      font-size: 14px;
      font-weight: 500;
    }
    .more-info-foot {
      margin-top: 30px;
      overflow: hidden;

      .moreQuestion {
        font-size: 12px;
        font-weight: 600;
        color: #999;
      }
      span {
        margin-right: 8px;
      }
    }
  }

  .fadeIn-enter,
  .fadeIn-leave-to {
    opacity: 0;
  }
  .fadeIn-enter-active,
  .fadeIn-leave-active {
    transition: all 0.5s linear;
  }
  .moreInfoShow-enter,
  .moreInfoShow-leave-to {
    transform: translateY(100%);
  }

  .moreInfoShow-enter-active,
  .moreInfoShow-leave-active {
    transition: all 0.5s linear;
  }
</style>