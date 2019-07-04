<template>
  <div>
    <div class="breadcrumb-menu">
      <breadcrumb-menu :skipLevel=0 />
    </div>
    <div>
      <h1>This is a placehold page</h1>
      <h2>Under constructing...</h2>
    </div>
  </div>
</template>

<script>
import BreadcrumbMenu from '@/components/BreadcrumbMenu'

export default {
  name: 'placehold_page',
  components: {
    BreadcrumbMenu
  }
}
</script>

<style scoped>
</style>
