<template>
<div class="ui-page">
  <component :is="template" class="ui-page-content" />
</div>
</template>

<script>

import VueTypes from 'vue-types';


const pageTypes = {
  processgrid: () => import('./grid'),
  chart: () => import('./chart'),
  dashboard: () => import('./dashboard'),
};

export default {
  name: 'ui-page',
  components: {
    ...pageTypes,
  },
  data() {
    return {
    };
  },
  props: {
    template: VueTypes.string.isRequired,
    slug: VueTypes.string.isRequired,
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
.ui-page {
  width: 100%;
  height: 100%;
}
.ui-page-content {
  width: 100%;
  height: 100%;
}
</style>
