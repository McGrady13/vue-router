<template>
  <div id="admin">
    <ul class="list">
      <li class="list-left" v-for="item in routers">
        <router-link v-for="(child,index) in item.children" :key="index" :to="{path:item.path+''+child.path}">
          {{child.alias}}
        </router-link>
      </li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data(){
    return{
      routers:this.$router.options.routes
    }
  }
}
</script>

<style>
#admin {
  height: 100%;
  width: 100%;
 background-color: red;
 display: flex;
 justify-content: flex-start;
}
.list{
  width: 280px;
  height: 100%;
  background-color: pink;

}
.list-left{
  height:60px;
  width: 100%;
 
  list-style: none;
}
a{
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  text-decoration: none;
   background-color: #ccce; 
}
a:hover{
  background: yellowgreen;
}
.content{
  flex:1;
  height: 100%;
  background-color: blue;
}
</style>
