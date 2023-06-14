<script>

export default {
  name:'post-form',
  methods:{
    createPost() {
      this.post.id= Date.now()
      this.$emit('create', this.post)
      this.post = {
        name: '',
        body: ''
      }
    }
  },
  data(){
    return {
      post: {
        name: '',
        body: '',
      }
      
    }
  }
    
}
</script>
<template>
  <h2>Создание поста</h2>
    <form @submit.prevent>
      <my-input
      v-model="post.name"
      placeholder="Заголовок"
      type="text"
      />
      <my-input
      v-model="post.body"
      placeholder="Текст"
      type="text"
      />
      <my-button @click="createPost">Создать пост</my-button>
    </form>
</template>
<style scoped>
h2 {
  margin-bottom: 30px;;
}
</style>