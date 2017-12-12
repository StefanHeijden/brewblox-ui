<template>
  <div :id="id" class="widget-small">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget-sm',
    props: {
      id: {
        type: [Number, String],
        default: 'ws',
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
.widget-small {
  width: 50vw;
  padding-bottom: 50vw;
}
@media screen and (min-width: 700px) {
  .widget-small {
    width: 25vw;
    padding-bottom: 25vw;
  }
}
@media screen and (min-width: 1050px) {
  .widget-small {
    width: 16.65vw;
    padding-bottom: 16.65vw;
  }
}
@media screen and (min-width: 1400px) {
  .widget-small {
    width: 12.5vw;
    padding-bottom: 12.5vw;
  }
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