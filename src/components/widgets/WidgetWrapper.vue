<template>
  <div :class="[classWidth, classHeight]"> 
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'widget-wr',
  data() {
    return {
    };
  },
  props: {
    id: {
      type: [Number, String],
      default: 'ww',
    },
    onClick: VueTypes.func,
    tilesGrid: {
      type: Number,
      default: 12,
    },
    tilesX: {
      type: Number,
      default: 4,
    },
    tilesY: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    classWidth() { return `width${this.tilesX}`; },
    classHeight() { return `height${this.tilesY}`; },
  },
};
</script>

<style scoped lang="stylus">
.content
  min-height 100%
</style>