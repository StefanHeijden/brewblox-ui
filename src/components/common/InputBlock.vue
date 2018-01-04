<template>
  <q-item-main class="center">
    <q-item-tile class="label" label>{{ header }}</q-item-tile>
    <q-item-tile sublabel>
      <q-field>
        <q-input align="center" :readonly="onlyread" color="primary" :value="value" type="number" />
      </q-field>
    </q-item-tile>
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
  name: 'InputBlock',
  components: {
    QItemMain,
    QItemTile,
    QField,
    QInput,
  },
  props: {
    header: String,
    value: Number,
    onlyread: {
      type: Boolean,
      default: false,
    },
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