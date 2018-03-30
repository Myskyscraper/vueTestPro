<template>
  <div id="app">
  
   

    <ul class="nav">
      <li>
        <router-link to ="/user/01">test1</router-link>
      </li>

      <li>
        <router-link to ="/user/02" >test2</router-link>
      </li>

      <li>
        <router-link to ="/user/03">test3</router-link>
      </li>

      <li>
        <router-link to ="/user/04">test4</router-link>
      </li>

      <li>
        <router-link to ="/user/05">test5</router-link>
      </li>

      <li>
        <router-link to ="/user/06">test6</router-link>
      </li>
    </ul>

     <router-view/>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:'tom'
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav{
  display: flex;
}

.nav li{
  line-height: 40px;
  list-style: none;
  flex: 1;

}


</style>
