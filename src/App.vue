<template>
<div>
   <TopMenu />
  <MainMenu/>

</div>
 
  
</template>

<script>
import TopMenu from '@/components/TopMenu.vue'
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'App',
  components: {TopMenu, MainMenu},
}
</script>

<style>

</style>
