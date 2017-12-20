<template>
  <div class='muuri-grid' ref="dashboard" v-resize:debounce="onResize">
    <w-pid :tilesGrid="tiles" />
    <w-pid :tilesGrid="tiles" />
    <w-pid :tilesGrid="tiles" />
    <w-pid :tilesGrid="tiles" />
    <w-pid :tilesGrid="tiles" />
    <w-pid :tilesGrid="tiles" />
    <w-pid :tilesGrid="tiles" />
  </div>
</template>

<script>
  import Muuri from 'muuri';
  import WPid from '../../widgets/WPid.vue';
  import resize from 'vue-resize-directive';

  export default {
    name: 'index',
    components: {
      WPid,
    },
    data() {
      return {
        grid: null,
        tiles: 12,
      };
    },
    props: {
      id: {
        type: String,
        default: 'grid',
      },
      options: {
        type: Object,
        default() {
          return {
            items: '.muuri-grid > *',
            dragEnabled: true,
            rounding: false,
          };
        },
      },
    },
    created() {
    },
    directives: {
      resize,
    },
    ready() {
      window.addEventListener('resize', this.onResize);
    },
    mounted() {
      this.createGrid();
      this.eventListening();
    },
    methods: {
      createGrid() {
        this.grid = new Muuri(this.$refs.dashboard, this.options);
        this.$emit('gridCreated', this.grid);
      },
      eventListening() {
        this.grid.on('synchronize', () => {
          this.$emit('synchronize');
        });
        this.grid.on('layoutStart', (items) => {
          this.$emit('layoutStart', items);
        });
        this.grid.on('layoutEnd', (items) => {
          this.$emit('layoutEnd', items);
        });
        this.grid.on('add', (items) => {
          this.$emit('add', items);
        });
        this.grid.on('remove', (indices) => {
          this.$emit('remove', indices);
        });
        this.grid.on('showStart', (items) => {
          this.$emit('showStart', items);
        });
        this.grid.on('showEnd', (items) => {
          this.$emit('showEnd', items);
        });
        this.grid.on('hideStart', (items) => {
          this.$emit('hideStart', items);
        });
        this.grid.on('hideEnd', (items) => {
          this.$emit('hideEnd', items);
        });
        this.grid.on('filter', (shownItems, hiddenItems) => {
          this.$emit('filter', shownItems, hiddenItems);
        });
        this.grid.on('sort', (currentOrder, previousOrder) => {
          this.$emit('sort', currentOrder, previousOrder);
        });
        this.grid.on('move', (data) => {
          this.$emit('move', data);
        });
        this.grid.on('send', (data) => {
          this.$emit('send', data);
        });
        this.grid.on('beforeSend', (data) => {
          this.$emit('beforeSend', data);
        });
        this.grid.on('receive', (data) => {
          this.$emit('receive', data);
        });
        this.grid.on('beforeReceive', (data) => {
          this.$emit('beforeReceive', data);
        });
        this.grid.on('dragInit', (item, event) => {
          this.$emit('dragInit', item, event);
        });
        this.grid.on('dragStart', (item, event) => {
          this.$emit('dragStart', item, event);
        });
        this.grid.on('dragMove', (item, event) => {
          this.$emit('dragMove', item, event);
        });
        this.grid.on('dragScroll', (item, event) => {
          this.$emit('dragScroll', item, event);
        });
        this.grid.on('dragEnd', (item, event) => {
          this.$emit('dragEnd', item, event);
        });
        this.grid.on('dragReleaseStart', (item) => {
          this.$emit('dragReleaseStart', item);
        });
        this.grid.on('dragReleaseEnd', (item) => {
          this.$emit('dragReleaseEnd', item);
        });
        this.grid.on('destroy', () => {
          this.$emit('destroy');
        });
      },
      onResize() {
        const parentWidth = this.$refs.dashboard.clientWidth;
        const widths = [
          { min: 1200, width: 12 },
          { min: 900, width: 8 },
          { min: 600, width: 6 },
          { min: 0, width: 4 },
        ];
        this.tilesGrid = widths.find((item) => parentWidth > item.min).width;
      },
    },
  };
</script>

<style lang="stylus">
  .muuri-grid {
    position: relative;
    min-height: calc(100vh - 50px);
  }
  .muuri-item {
    display: block;
    position: absolute;
    margin: 0;
    z-index: 1;
  }
  .muuri-item-dragging {
    z-index: 3;
  }
  .muuri-item-releasing {
    z-index: 2;
  }
  .muuri-item-hidden {
    z-index: 0;
  }
</style>