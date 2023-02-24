<template>
  <Vue3Marquee>
    <img class="px-8 w-40" height="200" width="300" src="https://i.ibb.co/r5nSBnT/vod.png" />
    <img class="px-8 w-40" height="200" width="300" src="https://i.ibb.co/tLTMXZ9/gen.png" />
    <img class="px-8 w-40" height="200" width="300" src="https://i.ibb.co/PtRNBtm/shot.png" />
    <img class="px-8 w-40" height="200" width="300" src="https://i.ibb.co/r5nSBnT/vod.png" />
    <img class="px-8 w-40" height="200" width="300" src="https://i.ibb.co/tLTMXZ9/gen.png" />
    <img class="px-8 w-40" height="200" width="300" src="https://i.ibb.co/PtRNBtm/shot.png" />
  </Vue3Marquee>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  components: {
    Vue3Marquee,
  },
}
</script>