<template>
  <q-item-main>
    <q-item-tile class="label">{{ text }}</q-item-tile>
  </q-item-main>
</template>

<script>
import {
  QItemMain,
  QItemTile,
} from 'quasar';

export default {
  name: 'ReadBlock',
  components: {
    QItemMain,
    QItemTile,
  },
  props: {
    text: String,
  },
  created() {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
};
</script>

<style lang="stylus">
@import './mixins/Block.styl'
</style>