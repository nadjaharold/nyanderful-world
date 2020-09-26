<template>
  <div>
    <Loading v-if="!isLoadingComplete" />
    <Header />
    <div class="mv">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Header from '~/components/Header.vue'
export default {
  components: {
    Loading,
    Header,
  },
  data() {
    return {
      isLoadingComplete: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingComplete = true
    }, 1200)
  },
}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
}
.mv {
  width: 100%;
  min-height: calc(100vh - 64px);
  background: url(/mv.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  z-index: 1;
  @include breakpoint-min(md) {
    background: none;
    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100vh;
      background-repeat: no-repeat;
      background-position: 50% 100%;
      background: url(/sp_mv.jpg);
      background-size: cover;
    }
  }
}
</style>
