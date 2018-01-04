<template>
  <q-item-main class="center">
    <q-item-tile label>{{ header }}</q-item-tile>
    <q-item-tile sublabel>{{ value | round(2, true) }}</q-item-tile>
  </q-item-main>
</template>

<script>
import {
  QItemMain,
  QItemTile,
  QField,
  QInput,
} from 'quasar';

export default {
  name: 'ReadBlock',
  components: {
    QItemMain,
    QItemTile,
    QField,
    QInput,
  },
  props: {
    header: String,
    value: Number,
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