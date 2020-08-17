<template>
  <h1>{{ msg }}</h1>
  <button @click="increaseCount">count is: {{ state.count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <button class="btn btn-success p-2" @click="increaseValue">Value is: {{ state.value }}</button>
</template>

<script>
import {reactive, computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
import Value from "../components/Value.vue";


export default defineComponent({
    name: 'HelloWorld',
    components: {
      Value
    },
    props: {
      msg: String
    },
    setup() {
      const store = useStore();
      const state = reactive({
        count: 0,
        value: computed(() => store.getters.getValue)
      })
      function increaseValue() {
       store.commit('increaseValue')
      }
      function increaseCount() {
        state.count += 1;
      }

      return {
        state,
        increaseCount,
        increaseValue
      }
    }
  }
)
</script>
