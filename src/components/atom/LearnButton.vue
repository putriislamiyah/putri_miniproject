<template>
    <a :href="url" class="p-4 absolute bottom-8 left-8 rounded-full duration-200 hover:bg-orange-800 hover:text-white">Learn more <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2" /></a>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  props: ['url'],
  components: {
    FontAwesomeIcon
  }
}
</script>