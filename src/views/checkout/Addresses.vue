<template>
  <div>
    <ul>
      <li v-for="(item, index) in needInputList" :key="index">
        <p :class="{pDefault: isInput(index)}">{{item}}</p>
        <input
          @focus="changeInput(index)"
          :data-activeIndex="index"
          type="text"
          required
        />
      </li>
    </ul>
    <div class="next-btn">
      <b-button @click="toNext" variant="dark" block>NEXT</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addresses',
    data() {
      return {
        needInputList: [
          'First Name *',
          'Last Name *',
          'Street *',
          'City *',
          'Postal Code *',
          'State *',
          'Country *',
        ],
      }
    },
    methods: {
      changeInput(index) {
        if (event.target.dataset.activeindex == index) {
          event.target.dataset.activeindex = '0'
        }
      },
      toNext() {
        this.$router.push('shipping')
      },
    },
    computed: {
      isInput: function () {
        return function () {
          return
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  ul {
    margin-bottom: 0;
  }
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

  .pDefault {
    bottom: -12px;
    font-size: 14px;
    color: #333;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }

  .next-btn {
    width: 40%;
    margin-top: 30px;
  }
</style>