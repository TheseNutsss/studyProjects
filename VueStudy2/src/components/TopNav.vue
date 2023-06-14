<script>
    export default {
      props: {
        posts: {
          type: Array,
          required: true,
        },
        activePost: {
          type: Number,
          required: true,
        },
        id: Number,
        name: String,
      },
      methods: {
        changePost () {
          this.$emit('changePost', {
            id: this.id,
            
          })
          //console.log('из топнав',this.$el)
        }, 
      }
    }
</script>

<template>
  <a @click="changePost" :id="id">{{ name }}</a>
  
</template>

<style>
.topnav {
  overflow: hidden;
  background-color: #333;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
  cursor: pointer;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
.topnav .container{
  display: none;
}
.container {
  display: inline-block;
  cursor: pointer;
  height: 48px;
}
.container:hover div  {
  background-color: #333;
}
.bar3, .bar2  {
  width: 35px;
  height: 5px;
  background-color: white;
  margin-bottom: 6px;
  transition: 0.4s;
  
}

.bar1 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin-bottom: 6px;
  margin-top: -3px;
  transition: 0.4s;
  
}

.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
  
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
  
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.container {
    float: right;
    display: block;
    
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .container {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: center;
  }
}

</style>