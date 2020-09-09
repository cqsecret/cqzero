<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<style lang="less" scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-weight: 700;
    background-color: transparent;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    overflow: hidden;
  }

  .left,
  .right {
    height: 100%;
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>