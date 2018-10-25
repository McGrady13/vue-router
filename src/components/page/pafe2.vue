<template>
  <div id="pafe2">
    <ul class="list">
      <li class="list-left" v-for="item in routers">
        <div v-for="(child,index) in item.children">
          <router-link v-for="(child1,index1) in child.children" :key="index1" :to="{path:item.path+''+child.path+'/'+child1.path}">
          {{child1.alias}}
        </router-link>
        </div>
      </li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pafe2',
  data(){
    return{
      routers:this.$router.options.routes
    }
  }
}
</script>

<style>
#pafe2 {

}

</style>
