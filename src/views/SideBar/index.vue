<script setup>
import useTheme from './useTheme'
import useRouterChange from './useRouterChange'
const { currentNav, navList, handleNavClick } = useRouterChange()
const { currentMode, options, handleThemeChange } = useTheme()
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <div class="title-header">🔧小林工具箱</div>
      <div class="sidebar-list">
        <ul class="sidebar-list-content">
          <li
            v-for="nav in navList"
            :key="nav.value"
            :class="['sidebar-list-item', { 'is-active': nav.value === currentNav }]"
            @click="handleNavClick(nav)"
          >
            {{ nav.label }}
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <n-select v-model:value="currentMode" :options="options" @update:value="handleThemeChange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  .sidebar-container {
    display: flex;
    flex-direction: column;
    @include font_color('normalFontColor');
    height: 100%;
    padding: 60px 0 0;

    .title-header {
      text-align: center;
      margin: 20px 10px;
      font-size: 20px;
    }

    .sidebar-list {
      flex: 1;
      .sidebar-list-content {
        list-style: none;
        padding: 0;
        .sidebar-list-item {
          cursor: pointer;
          padding: 6px 20px;
          //border-left: 2px solid transparent;
          transition: all 0.3s ease;
          font-size: 14px;
          margin: 12px 10px;
          border-radius: 4px;
          color: #88c0a2;

          &:hover {
            color: #ffffff;
            background: rgba(24, 160, 88, 0.3);
            box-shadow: 0 0 3px 0 rgba(24, 160, 88, 0.4);
          }

          &.is-active {
            color: #ffffff;
            //border-left: 2px solid #18a058;
            background: rgba(24, 160, 88, 0.3);
          }
        }
      }
    }

    .sidebar-footer {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
  }
}
</style>
