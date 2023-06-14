
<script>
import TopNav from './components/TopNav.vue'
import PostItem from './components/PostItem.vue'
import Edit from './components/Edit.vue'
import AddPost from './components/AddPost.vue'
import DeletePost from './components/DeletePost.vue'

export default {
    components: {
        TopNav, PostItem, Edit, AddPost, DeletePost 
    },
    data() {
        return {
            activePost: 1,
            isMenuOpen: false,
            dialogVisible: false,
            isDeletePost: false,
            isEdit: false,
            posts:[
                { id: 1, name: "Главная", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                { id: 2, name: "Щука", body: "Щу́ка[1], или обыкнове́нная щу́ка[1] (лат. Esox lucius), — рыба семейства щуковых. Распространена в пресных водах Евразии, центральной России, севера России и Северной Америки. Живёт обычно в прибрежной зоне, в водных зарослях, в непроточных или слабопроточных водах. Является литоральной рыбой. Может также встречаться и в опреснённых частях морей, например в Финском, Рижском и Куршском заливах Балтийского моря, в Таганрогском заливе Азовского моря. Щука хорошо выдерживает кислую реакцию воды, может комфортно жить в водоёмах с pH 4,75. При снижении содержания кислорода до 3,0—2,0 мг/л наступает угнетение дыхания, поэтому в заморных водоёмах щука часто погибает."},
                { id: 3, name: "Карп", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                { id: 4, name: "Окунь", body: "Речной окунь относится к хищным рыбам. В рационе взрослого окуня значительную долю занимают другие пресноводные рыбы. Речной окунь предпочитает придерживаться равнинных водоёмов, его можно встретить в реках, озёрах, прудах, водохранилищах и даже в солоноватых участках морей. Нерест у речного окуня происходит ранней весной. Самка окуня откладывает икринки в форме длинной (до 1 м) студенистой ленты. Окунь — популярный объект любительского рыболовства, в отдельных водоёмах имеет важное промысловое значение."},
                { id: 5, name: "Главная5", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                { id: 6, name: "Главная6", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                { id: 7, name: "Главная7", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                { id: 8, name: "Главная8", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},   
            ],   
        }
    },
    methods:{
      onChangePost(data) {        
        if(this.isDeletePost){
              let result = confirm("Хотите покинуть редактирование?")
              if(result){
                this.isDeletePost = false
                this.isEdit = false
                this.activePost = data.id
              }
          } else if (this.isEdit && !this.isDeletePost){
            this.isEdit = false
            this.activePost = data.id                
          } else {
            this.activePost = data.id
          }
        if(this.isMenuOpen){
          this.isMenuOpen = false
        }
        //теперь вместо этого из переменной менюОпен мы тоглим класс responsive
        /*if (this.$el.querySelector("#myTopnav").classList.contains("responsive")) {
          this.$el.querySelector("#myTopnav").classList.toggle("responsive");
          this.$el.querySelector('.container').classList.toggle("change");
        } */
      },
      onEdit(){
        this.activePost = this.$refs.getEdit.id
        this.isEdit = true
        if(this.isMenuOpen){
          this.isMenuOpen = false
        }
      },
      menuClick(){
        //Было так
        //this.$el.querySelector('.container').classList.toggle("change");
        //стало так, добавил новую переменную, которая тоглит с тру на фолс и соответственно открывает и закрывает меню
        if(!this.isMenuOpen){
          this.isMenuOpen = true
        } else {
          this.isMenuOpen = false
        }
        /*this.$el.querySelector('.container').classList.toggle("change");
        if (this.$el.querySelector("#myTopnav").classList.contains("topnav")) {
          this.$el.querySelector("#myTopnav").classList.toggle("responsive");
        } */
      },
      addPost(data){
        if(data.name.trim() && data.body.trim()){
        this.posts.push(data)
        alert('Пост успешно создан')
        this.dialogVisible = false
        }
      },
      deletePost(post){
        this.posts = this.posts.filter(p => p.id !== post)
        if(this.activePost == post){
          this.activePost = 1
        }
        alert('Пост успешно удален')
      },
      deleteCheckedPosts(data){
        data.forEach((item) => {
          this.posts = this.posts.filter(p => p.id !== item)
          if(this.activePost == item){
          this.activePost = 1
          console.log("Отработал при массовой")
        }
        })
        alert('Посты успешно удалены')
      }
    } 
} 


</script>

<template>
  <div class="app">
    <div class="topnav" id="myTopnav" :class="{responsive: isMenuOpen}">
  <top-nav v-for="post in posts"
  :key="post.id"
  :id="post.id"
  :name="post.name"
  :posts="posts" 
  :activePost="activePost"
  :class="{active: activePost === post.id}"
  @changePost = "onChangePost"
  />
  <a id="edit"
  ref="getEdit"
  :class="{active: activePost === 'edit'}" 
  @click = "onEdit">
  Редактировать</a>
    <a class="container" 
    :class="{change: isMenuOpen}"
    @click="menuClick">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </a>
    </div>
    
    <post-item v-for="post in posts"
  :key="post.id"
  :id="post.id"
  :name="post.name"
  :body="post.body"
  :posts="posts" 
  :activePost="activePost"
  :isDeletePost="isDeletePost"/>

  <delete-post v-model:isDeletePost="isDeletePost" v-if="isDeletePost" 
  :posts="posts" 
  :isDeletePost="isDeletePost"
  @delete="deletePost"
  @deleteChecked="deleteCheckedPosts"/>
</div>
<edit v-model:dialogVisible="dialogVisible" v-model:isDeletePost="isDeletePost" v-if="(!isDeletePost && isEdit)"/>
<add-post v-model:show="dialogVisible">
  <post-form @create="addPost"/>
</add-post>
  
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.app{
  width: 100%;
}



</style>
