<template>
  <div :id="id" class="muuri-grid">
    <slot></slot>
  </div>
</template>

<script>
  import Muuri from 'muuri';

  let self = null;

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
      self = this;
    },
    mounted() {
      this.createGrid();
      this.eventListening();
    },
    methods: {
      createGrid() {
        this.grid = new Muuri(`#${this.id}`, this.options);
        self.$emit('gridCreated', this.grid);
      },
      eventListening() {
        this.grid.on('synchronize', () => {
          self.$emit('synchronize');
        });
        this.grid.on('layoutStart', (items) => {
          self.$emit('layoutStart', items);
        });
        this.grid.on('layoutEnd', (items) => {
          self.$emit('layoutEnd', items);
        });
        this.grid.on('add', (items) => {
          self.$emit('add', items);
        });
        this.grid.on('remove', (indices) => {
          self.$emit('remove', indices);
        });
        this.grid.on('showStart', (items) => {
          self.$emit('showStart', items);
        });
        this.grid.on('showEnd', (items) => {
          self.$emit('showEnd', items);
        });
        this.grid.on('hideStart', (items) => {
          self.$emit('hideStart', items);
        });
        this.grid.on('hideEnd', (items) => {
          self.$emit('hideEnd', items);
        });
        this.grid.on('filter', (shownItems, hiddenItems) => {
          self.$emit('filter', shownItems, hiddenItems);
        });
        this.grid.on('sort', (currentOrder, previousOrder) => {
          self.$emit('sort', currentOrder, previousOrder);
        });
        this.grid.on('move', (data) => {
          self.$emit('move', data);
        });
        this.grid.on('send', (data) => {
          self.$emit('send', data);
        });
        this.grid.on('beforeSend', (data) => {
          self.$emit('beforeSend', data);
        });
        this.grid.on('receive', (data) => {
          self.$emit('receive', data);
        });
        this.grid.on('beforeReceive', (data) => {
          self.$emit('beforeReceive', data);
        });
        this.grid.on('dragInit', (item, event) => {
          self.$emit('dragInit', item, event);
        });
        this.grid.on('dragStart', (item, event) => {
          self.$emit('dragStart', item, event);
        });
        this.grid.on('dragMove', (item, event) => {
          self.$emit('dragMove', item, event);
        });
        this.grid.on('dragScroll', (item, event) => {
          self.$emit('dragScroll', item, event);
        });
        this.grid.on('dragEnd', (item, event) => {
          self.$emit('dragEnd', item, event);
        });
        this.grid.on('dragReleaseStart', (item) => {
          self.$emit('dragReleaseStart', item);
        });
        this.grid.on('dragReleaseEnd', (item) => {
          self.$emit('dragReleaseEnd', item);
        });
        this.grid.on('destroy', () => {
          self.$emit('destroy');
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
    color: #fff;
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
