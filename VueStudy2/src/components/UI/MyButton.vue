<script>
export default {
    name: 'my-button'
}
</script>
<template>
    <button class="btn">
      <slot></slot>
      </button>
</template>
<style scoped>
.btn {
background-color: #333;
padding: 14px 28px;
color: #f2f2f2;
cursor: pointer;
margin-top: 30px;
border-radius: 3px;
border: none;
}
.btn:hover {
  background-color: #ddd;
  color: black;
  border: none;
  
}
</style>