<script>
export default {
     props: {
        posts: {
            type: Array,
            required: true,
        },
        activePost: {
            type: Number,
        },
        isDeletePost: {
            type: Boolean
        },
        id: Number,
        name: String,
        body: String,
     }
}


</script>

<template>

<div class="post" :id="id" v-if="(activePost === id && !isDeletePost)">
<h2 class="postTitle">{{ name }}</h2>
<p class="postBody">{{ body }}</p>
</div>
</template>

<style>
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