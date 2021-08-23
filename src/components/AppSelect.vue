<template>
  <div>
    <label for="select">What {{ select }} do you want?</label>
    <!-- emit first param is an event, change -->
    <select @change="$emit('change', { option: $event.target.value })" :id="select" name="thing">
      <option value>--Please choose--</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    select: {
      type: String,
      default: 'cursine'
    },
    selectOptions: {
      type: Array,
      default: () => ['tacos', 'pizza', 'dim sum']
    }
  },
});
</script>

<style lang="scss" scoped>
select {
  padding: 3px;
}
</style>
