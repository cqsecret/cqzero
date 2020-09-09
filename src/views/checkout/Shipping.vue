<template>
  <div>
    <div class="choice-ship">
      <b-form-group button-variant="dark">
        <b-form-radio
          v-model="selected"
          class="fl"
          name="some-radios"
          value="A"
          checked
        >
          Boxberry Pickup and Postamats
          <p>Estimated Delivery: Sep 24 - Sep 26</p>
        </b-form-radio>
        <span class="fr">
          <strong>$4.00</strong>
        </span>
        <b-form-radio
          v-model="selected"
          class="fl"
          name="some-radios"
          value="B"
        >
          Boxberry Delivery
          <p>Estimated Delivery: Sep 21</p>
        </b-form-radio>
        <span class="fr">
          <strong>$4.54</strong>
        </span>
        <b-form-radio
          v-model="selected"
          class="fl"
          name="some-radios"
          value="c"
        >
          Nova Poshta Pickup
          <p>Estimated Delivery: Sep 21</p>
        </b-form-radio>
        <span class="fr">
          <strong>$4.00</strong>
        </span>
      </b-form-group>
    </div>
    <div class="all-btn">
      <div>
        <b-button @click="backBtn" variant="outline-dark" block>BACK</b-button>
      </div>
      <div>
        <b-button @click="nextBtn" variant="dark" block>NEXT</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shipping',
    data() {
      return {
        selected: 'A',
      }
    },
    methods: {
      backBtn() {
        this.$router.push('addresses')
      },
      nextBtn() {
        this.$router.push('pay')
      },
    },
  }
</script>

<style lang="less" scoped>
  .choice-ship {
    font-weight: 500;

    p {
      font-size: 14px;
      font-weight: 500;
      color: #ccc;
    }
  }

  .all-btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    bottom: -174px;

    div {
      width: 40%;
    }
  }
</style>