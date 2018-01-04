<template>
<widget-wrapper :tilesX="2" :tilesY="2">
  <q-list separator sparse>
    <q-item>
      <q-item-main class="center">ProcessValue</q-item-main>
    </q-item>
    <q-item>
      <read-block header="Settings" :value="settings"/>
      <read-block header="Value" :value="value"/>
    </q-item>
  </q-list>
</widget-wrapper>
</template>

<script>
import WidgetWrapper from './WidgetWrapper.vue';
import ReadBlock from '../common/ReadBlock.vue';
import WidgetLayout from './mixins/WidgetLayout';
import {
  QList,
  QListHeader,
  QItem,
  QItemMain,
  QItemTile,
} from 'quasar';

export default {
  name: 'ProcessValue',
  mixins: [WidgetLayout],
  components: {
    QList,
    QListHeader,
    QItem,
    QItemMain,
    QItemTile,
    WidgetWrapper,
    ReadBlock,
  },
  props: {
  },
  data: () => ({
    name: 'heater1pid',
    settings: 35,
    value: 40,
  }),
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

<style scoped lang="stylus">
@import './mixins/Widget.styl'
</style>