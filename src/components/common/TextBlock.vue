<template>
  <q-item-main>
    <q-item-tile class="label">{{ text }}</q-item-tile>
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