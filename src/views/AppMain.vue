<script setup=""></script>

<template>
  <div class="app-main">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  overflow: auto;
  border-left: 1px solid;
  @include background_color('mainbackGround');
  @include border_color('borderColor');
  transition: all 0.1s ease;
  box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.2);
}
</style>
