<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/base.css'
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
