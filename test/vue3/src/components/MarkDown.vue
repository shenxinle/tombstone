<template>
<div class="container">
  <textarea :value="value" @input="updateValue" ></textarea>
  <div class="view" v-html="compiledValue"></div>
</div>
</template>

<script>
import { ref, computed } from 'vue';
import marked from 'marked';
import debounce from 'lodash/debounce';

export default {
  setup() {
    const value = ref('');
    const updateValue = debounce((e) => {
      value.value = e.target.value;
    }, 200);
    const compiledValue = computed(() => {
      return marked(value.value);
    });

    return {
      value,
      updateValue,
      compiledValue
    }
  }
}
</script>


<style scoped>
.container {
  display: flex;
  height: 500px;
}
textarea, .view {
  flex: 1;
}
textarea {
  padding: 12px 16px;
}
.view {
  padding: 12px 16px;
}
</style>