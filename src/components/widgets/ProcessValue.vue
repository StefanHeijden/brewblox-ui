<template>
<widget-wrapper :tilesX="tilesX" :tilesY="tilesY">
  <div class="row justify-around titel">ProcessValue</div>
  <div class="row justify-around">
    <read-block header="Settings" :value="settings"/>
    <read-block header="Value" :value="value"/>
  </div>
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

.flex-content > *
  display: flex
  height: 100%

</style>