<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="app-head">
    <!--    <ul class="bar-list">-->
    <!--      <li class="bar-list-item" v-for="bar in barList">-->
    <!--        {{ bar.title }}-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<style lang="scss" scoped>
.app-head {
  width: 100%;
  height: 50px;
  -webkit-app-region: drag;
  position: fixed;
  top: 0;

  .bar-list {
    height: 100%;
    width: 100%;
    padding: 0 80px;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    .bar-list-item {
      -webkit-app-region: no-drag;
      background: rgba(255, 255, 255, 0.2);
      margin: 0 10px;
      padding: 4px 20px;
      border-radius: 4px;
      color: #ffffff;
      font-size: 14px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
