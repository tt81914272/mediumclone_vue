<template>
  <div class="container">
    <mcv-topbar />

    <router-view></router-view>
  </div>
</template>

<style></style>


<script>
import McvTopbar from '@/components/Topbar'

export default {
  name: 'McvApp',
  components: {
    McvTopbar,
  },
}
</script>

