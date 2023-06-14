<script>
export default {
}
</script>
<template>
    <div class="edit">
        <div class="column">
            <h2>Создать пост</h2>
            <my-button @click="this.$emit('update:dialogVisible', true)">Создать</my-button>
        </div>
        <div class="column">
            <h2>Удалить пост</h2>
            <my-button @click="this.$emit('update:isDeletePost', true)">Удалить</my-button>

            
        </div>
    </div>
</template>
<style>
.edit {
    width:100%;
    height: 300px;
    margin-top: 100px;
}
.column {
    width: 50%;
    float: left;
    text-align: center;
    margin: 0 0 50px 0;
}
/* Clear floats after the columns */
.edit:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

</style>