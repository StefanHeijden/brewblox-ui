<template>
  <div :id="id" class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'height': height,
    }">
    <div class="item-content item-sm">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-sm',
    props: {
      id: {
        type: [Number, String],
        default: 'item-sm',
      },
      width: { // width has to be equal to largewidget.width/2 - margin
        type: String,
        default: '245px',
      },
      height: { // height has to be equal to largewidget.height/2 - margin
        type: String,
        default: '245px',
      },
      onClick: {
        type: Function,
        default(id) {
          return null;
        },
      },
    },
  };
</script>

<style scoped lang="stylus">
.item {
  background-color: ;
}
</style>