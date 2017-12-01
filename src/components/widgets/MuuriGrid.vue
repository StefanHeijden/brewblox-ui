<template>
  <div :id="id" class="muuri-grid">
    <slot></slot>
  </div>
</template>

<script>
  import Muuri from 'muuri';

  export default {
    name: 'muuri-grid',
    data() {
      return {
        grid: null,
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
            items: '.item',
            dragEnabled: true,
          };
        },
      },
    },
    created() {
    },
    mounted() {
      this.createGrid();
      this.eventListening();
    },
    methods: {
      createGrid() {
        this.grid = new Muuri(`#${this.id}`, this.options);
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
    },
  };
</script>

<style lang="stylus">
  .grid {
    position: relative;
  }
  .item {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 5px;
    z-index: 1;
    background: #000;
  }
  .item.muuri-dragging {
    z-index: 3;
  }
  .item.muuri-releasing {
    z-index: 2;
  }
  .item.muuri-hidden {
    z-index: 0;
  }
  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
