<script setup="">
import { ref } from 'vue'
</script>

<template>
  <div class="content-box">
    <div class="content-box-container">
      <div class="content-box-header" />
      <div class="content-box-content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-box {
  width: 100%;
  height: 100%;
  padding: 10px;
  .content-box-container {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .content-box-header {
      width: 100%;
      height: 30px;
      background: #322348;
    }
    .content-box-content {
      flex: 1;
      background: #221536;
    }
  }
}
</style>
