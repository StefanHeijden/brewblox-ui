<template>
  <div>
    <muuri-grid>
      <w-pid :dims="{x: 5, y: 3}" />
      <w-pid />
      <widget-wrapper>
        <p>Large widget.</p>
      </widget-wrapper>
      <widget-wrapper>
        <p>Large widget.</p>
      </widget-wrapper>
      <widget-wrapper>
        <p>Large widget.</p>
      </widget-wrapper>
    </muuri-grid>
  </div>
</template>

<script>
import {
} from 'quasar';
import WPid from '../../widgets/WPid.vue';
import MuuriGrid from '../../widgets/MuuriGrid.vue';
import WidgetWrapper from '../../widgets/WidgetWrapper.vue';

export default {
  name: 'index',
  components: {
    WPid,
    MuuriGrid,
    WidgetWrapper,
  },
  data() {
    return {
    };
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
</style>
