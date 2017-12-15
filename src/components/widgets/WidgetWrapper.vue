<template>
  <div :id="id" class="widget-large"  > <!-- :style="{ width: this.vwx, padding-bottom: this.vwy }" --> 
    <div class="content">
      {{ vwx }} + {{ vwy }}
      <slot></slot>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget-wr',
    data: {
      styleObject: {
        width: this.vwx,
        paddingBottom: this.vwy,
      },
    },
    props: {
      id: {
        type: [Number, String],
        default: 'ww',
      },
      onClick: {
        type: Function,
        default(id) {
          return null;
        },
      },
      dims: {
        x: Number,
        y: Number,
      },
    },
    computed: {
      vwx() {
        if (window.innerWidth > 1400) {
          const xnew = ((25 / 12) * this.dims.x);
          return `${xnew}vw`;
        }
        if (window.innerWidth > 1050) {
          return (`${(33.3333333 / 12) * this.dims.x}vw`);
        }
        if (window.innerWidth > 700) {
          return (`${(50 / 12) * this.dims.x}vw`);
        }
        return (`${(100 / 12) * this.dims.x}vw`);
      },
      vwy() {
        if (window.innerWidth > 1400) {
          return (`${(25 / 12) * this.dims.y}vw`);
        }
        if (window.innerWidth > 1050) {
          return (`${(33.3333333 / 12) * this.dims.y}vw`);
        }
        if (window.innerWidth > 700) {
          return (`${(50 / 12) * this.dims.y}vw`);
        }
        return (`${(100 / 12) * this.dims.y}vw`);
      },
    },
  };
</script>

<style scoped lang="stylus">
.widget-large {
  width: 50vw;
  padding-bottom: 50vw;
}
/* padding bottom container trick is used to make the widget square */
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