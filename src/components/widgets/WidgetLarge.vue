<template>
  <div :id="id" class="widget-large">
    <div class="content">
      <slot></slot>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget-lg',
    props: {
      id: {
        type: [Number, String],
        default: 'wl',
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
.widget-large {
}
/* padding bottom container trick is used to make the widget square */
.widget-large {
  width: 100vw;
  padding-bottom: 100vw;
}
@media screen and (min-width: 700px) {
  .widget-large {
    width: 50vw;
    padding-bottom: 50vw;
  }
}
@media screen and (min-width: 1050px) {
  .widget-large {
    width: 33.3vw;
    padding-bottom: 33.3vw;
  }
}
@media screen and (min-width: 1400px) {
  .widget-large {
    width: 25vw;
    padding-bottom: 25vw;
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