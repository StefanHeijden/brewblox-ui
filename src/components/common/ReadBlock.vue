<template>
  <q-item-main>
    <q-item-tile class="label" label>{{ header }}</q-item-tile>
    <q-item-tile sublabel>
      <q-field>
        <q-input align="center" :readonly="true" color="primary" :value="value" type="number" />
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
.label {
  text-align: center;
  font-size: 0.8rem;
  color: rgba(0,0,0,0.54);
}
</style>