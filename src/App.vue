<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Button from './components/Button';
import Table from './components/Table';
</script>

<template>
  <div class="mt-1">
    <Button type="default" size="small">default</Button>
    <Button type="primary" size="small">primary</Button>
    <Button type="primary" size="small" loading disabled>loading</Button>
    <Button type="success" size="small">success</Button>
    <Button type="warning" size="small">warning</Button>
    <Button type="danger" size="small">danger</Button>
  </div>
  <div class="mt-5">
    <Button type="default">default</Button>
    <Button type="primary">primary</Button>
    <Button type="primary" loading disabled>loading</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
  </div>
  <div class="mt-5">
    <Button type="default" size="large">default</Button>
    <Button type="primary" size="large">primary</Button>
    <Button type="primary" size="large" loading disabled>loading</Button>
    <Button type="success" size="large">success</Button>
    <Button type="warning" size="large">warning</Button>
    <Button type="danger" size="large">danger</Button>
  </div>

  <div class="mt-5">
    <Table />
  </div>
</template>

<style lang="less">
#app {
  padding: 20px;
}

.d-button {
  & + & {
    margin-left: 8px;
  }
}
</style>
