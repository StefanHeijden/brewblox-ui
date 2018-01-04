<template>
  <div :style="styleCalc"> 
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
    styleCalc() {
      const width = `${(Math.min(100, (this.tilesX / this.tilesGrid) * 100))}%`;
      const height = `${(Math.min(100, (this.tilesY / this.tilesGrid) * 100))}%`;
      return (
        {
          width,
          paddingBottom: height,
        }
      );
    },
  },
};
</script>

<style scoped lang="stylus">
.content {
  position: absolute;
  left: 5px;
  right: 5px;
  top: 5px;
  bottom: 5px;
  background: #eee;
}
</style>