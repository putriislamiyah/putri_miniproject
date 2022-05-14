<template>
  <div class="p-8 relative rounded-3xl duration-200 shadow shadow-orange-800 hover:shadow-xl">
    <img src="../../assets/mock.png" class="mb-24" alt="mock">
    <p class="text-2xl font-semibold text-black">{{ feature.title }}</p>
    <p class="mt-8 mb-32 leading-loose">{{ feature.description }}</p>
    <learn-button :url="feature.url" />
  </div>
</template>

<script>
import LearnButton from '../atom/LearnButton.vue'
export default {
  props: ['feature'],
  components: {
    LearnButton
  }
}
</script>