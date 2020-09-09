<template>
  <div class="cart">
    <div class="topBar">
      <nav-bar>
        <div slot="left">SPOTT</div>
        <div slot="right">
          <b-icon icon="list" scale="1.5"></b-icon>
        </div>
      </nav-bar>
    </div>
    <div class="mainBar">
      <div class="head-name">
        <h5>Cart</h5>
      </div>
      <div class="pro-list">
        <p v-if="$store.state.cartList.length == 0">nothing need to pay~</p>
        <ul v-else>
          <li v-for="item in $store.state.cartList" :key="item.num">
            <div class="delete-btn fl">
              <button @click="deletePro(item.num)" class="none-btn">x</button>
            </div>
            <div class="pro-img fl">
              <img :src="item.surl" alt />
            </div>
            <div class="pro-info fl">
              <p class="info-price">${{item.price}}</p>
              <p class="info-name">{{item.name}}</p>
              <div class="choice-both">
                <div class="choice-color fl">
                  <b-form-select
                    v-model="selectedColor"
                    :options="optionsColor"
                    class="mb-3"
                    size="sm"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-select>
                </div>
                <div class="choice-size fr">
                  <b-form-select
                    v-model="selectedSize"
                    :options="optionsSize"
                    class="mb-3"
                    size="sm"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-select>
                </div>
              </div>
            </div>
            <div class="count-need fr">
              <span @click="item.countNeed++">+</span>
              <strong>{{item.countNeed}}</strong>
              <span @click="item.countNeed > 1 ? item.countNeed-- : 1">-</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="total-price">
        <span class="fl">TOTAL</span>
        <strong class="fr">${{totalPrice}}</strong>
      </div>
      <div class="check-out">
        <b-button @click="toCheckout" variant="dark">CHECK OUT</b-button>
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
    name: 'cart',
    data() {
      return {
        // countNeed: 1,
        // totalPrice: '$99',
        selectedColor: 'A',
        optionsColor: [
          { item: 'A', name: 'Gray' },
          { item: 'B', name: 'Red' },
          { item: 'C', name: 'Blue' },
        ],
        selectedSize: '2',
        optionsSize: [
          { item: '1', name: '250' },
          { item: '2', name: '255' },
          { item: '3', name: '260' },
        ],
      }
    },
    methods: {
      deletePro(num) {
        this.$store.commit('deleteCartList', num)
      },
      toCheckout() {
        this.$router.push('checkout')
      },
    },
    computed: {
      totalPrice() {
        if (this.$store.state.cartList.length == 0) return 0
        let totalP = 0
        this.$store.state.cartList.forEach(
          (item) => (totalP += item.price * item.countNeed)
        )
        return totalP
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
  .cart {
    height: 100%;
    .none-btn {
      border: none;
      outline: none;
      background-color: #fff;
      font-size: 12px;
      font-weight: 700;
      span {
        margin-left: 8px;
      }
    }

    .mainBar {
      padding: 0 12px;
      height: 80%;

      .head-name {
        margin: 20px 0;
      }

      .pro-list {
        height: 80%;
        overflow: hidden;

        ul {
          border-bottom: 1px solid #ccc;
        }
        li {
          height: 120px;
          margin-bottom: 16px;

          .delete-btn {
            height: 100%;
            text-align: center;
            line-height: 100%;
            margin: 0 20px 0 10px;

            button {
              height: 100%;
            }
          }
          .pro-img {
            width: 25%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .pro-info {
            margin-left: 5px;
            padding: 10px;
            height: 100%;
            width: 55%;

            p {
              margin-bottom: 0;
            }
            .info-price {
              font-weight: 700;
              font-size: 0.8rem;
            }

            .info-name {
              font-size: 12px;
              color: #999;

              &::after {
                display: block;
                content: '';
                width: 100%;
                border-bottom: 1px solid #999;
                margin-top: 15px;
              }
            }
            .choice-both {
              width: 100%;
              overflow: hidden;
              margin-top: 15px;

              .choice-color,
              .choice-size {
                width: 50%;
              }
            }
          }

          .count-need {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

            span {
              display: inline-block;
              background-color: #eee;
              width: 20px;
            }
          }
        }
      }

      .total-price {
        overflow: hidden;
        text-align: center;
        span {
          line-height: 1.8rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: #999;
        }
        strong {
          font-size: 1.2rem;
        }
      }
      .check-out {
        width: 100%;
        margin-top: 15px;
        text-align: center;

        button {
          display: inline-block;
          width: 40%;
          height: 40px;
          font-size: 0.8rem;
        }
      }
    }
  }
  .footBar {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>