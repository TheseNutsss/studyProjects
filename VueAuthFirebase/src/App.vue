<script>
export default {  
}
</script>

<template>
  <div class="app">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app{
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: relative;
}

.alertMsg, .errMsg span:hover{
  cursor: pointer;
}
.alertMsg {
  background-color: rgba(21, 255, 0, 0.24);
}
.errMsg {
  background-color: rgba(255, 0, 0, 0.253);
}
</style>
