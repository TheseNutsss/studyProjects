<script>
export default {
     props: {
        posts: {
            type: Array,
            required: true,
        },
        isDeletePost: {
            type: Boolean
        },
        
     },
     data () {
        return {
            multipleDelete: false,
            checkedPosts: []
        }
     },
     methods: {
        showSelect(){
            this.multipleDelete = !this.multipleDelete
            if(!this.multipleDelete){
                this.checkedPosts = []
                
            }
        },
        deleteAll(){
            
            if(this.checkedPosts.length){
            this.$emit('deleteChecked', this.checkedPosts)
            this.checkedPosts = []
            this.multipleDelete = !this.multipleDelete
            } else {
                alert("Вы не выбрали ни одного поста")
            }
        }
     }
     
     
}

</script>

<template >
    <div><my-button @click="showSelect">
        <p v-if="!multipleDelete">Выбрать несколько</p>
        <p v-else >Отменить выбор</p>
    </my-button></div>
    
<div class="post" v-for="post in posts" 
:key="post.id"
:id="post.id">

<h2 class="postTitle"><input v-if ="post.id !== 1 && multipleDelete"
type="checkbox"
v-model="checkedPosts"
:value=post.id
:id="post.id"
:key="post.id"/>{{ post.name }}</h2>

<my-button v-if =" post.id !== 1 && !multipleDelete" @click="$emit('delete', post.id)">Удалить</my-button> 
</div>
<div class="done">
<my-button v-if="!multipleDelete" @click="$emit('update:isDeletePost', false)">Готово</my-button>
<h2 v-if="multipleDelete && checkedPosts.length > 4 ">Выбрано {{ checkedPosts.length }} постов</h2>
<h2 v-else-if="multipleDelete && checkedPosts.length > 1">Выбрано {{ checkedPosts.length }} поста</h2>
<h2 v-else-if="checkedPosts.length && checkedPosts.length < 2">Выбран {{ checkedPosts.length }} пост</h2>


<my-button v-if="multipleDelete" @click="deleteAll">Удалить выбранные посты </my-button>

</div>

</template>

<style>
.done {
    width:100%;
    height: 300px;
    text-align: center;
}
.post{
    width: 90%;
    margin: 200px auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;
}
.postTitle{
    font-weight: bold;
    font-size: 30px;   
}
.postBody{
    margin-top: 10px;   
}

</style>