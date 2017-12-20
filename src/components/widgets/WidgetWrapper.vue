<template>
  <div class="widgetwrapper" :style="styleCalc"> 
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
      styleObject: {
        width: this.widthWidget,
        paddingBottom: this.widthWidget,
      },
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
    tilesWidget: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    styleCalc() {
      const width = `${(Math.min(100, (this.tilesWidget / this.tilesGrid) * 100))}%`;
      return (
        {
          width,
          paddingBottom: width,
        }
      );
    },
  },
};
</script>

<style scoped lang="stylus">
.widgetwrapper {
}
.content {
  position: absolute;
  left: 5px;
  right: 5px;
  top: 5px;
  bottom: 5px;
  background: #eee;
}
</style>