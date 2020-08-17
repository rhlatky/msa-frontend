<template>
<p>in "Value component" value is: {{state.value}}</p>
</template>

<script>
import {reactive, computed, defineComponent} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: "Value",
  setup() {
    const store = useStore()
    const state = reactive({
      value: computed(() => store.getters.getValue)
    })
    return {
      state
    }
  }
})
</script>

<style lang="scss" scoped>
  p {
    background-color: aquamarine;
  }
</style>
