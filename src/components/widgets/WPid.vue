<template>
<widget-large id="widget-WPid">
   <!-- This card contains information of the PID-->
  <q-list class="center" separator sparse>
    <q-list-header>PID controller</q-list-header>
    <q-item class="center">
      <q-item-main>
        <q-item-tile label>Input</q-item-tile>
        <q-item-tile sublabel>{{ input.value | round(2, true) }}</q-item-tile>
      </q-item-main>
      <q-item-main>
        <q-item-tile label>Setpoint</q-item-tile>
        <q-item-tile sublabel>{{ input.setPoint | round(2, true) }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item :class="{disabled: !settings.enabled}">
      <q-item-main class="center">
        <q-item-tile label>P</q-item-tile>
        <q-item-tile sublabel>{{ state.p | round(2, true) }}</q-item-tile>
      </q-item-main>
      <q-item-main class="center">
        <q-item-tile label>I</q-item-tile>
        <q-item-tile sublabel>{{ state.i | round(2, true) }}</q-item-tile>
      </q-item-main>
      <q-item-main class="center">
        <q-item-tile label>D</q-item-tile>
        <q-item-tile sublabel>{{ state.d | round(2, true) }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side></q-item-side>
      <q-item-main class="center">
        <q-item-tile label>Output</q-item-tile>
        <q-item-tile sublabel>{{ output.value | round(2, true) }}</q-item-tile>
      </q-item-main>
       <q-item-side @click="$refs.settingsModal.open()" icon="build"></q-item-side>
    </q-item>
  </q-list>

  <q-modal ref="settingsModal" :content-css="{minWidth: '50%', minHeight: '70%'}">
    <!-- This modal displays the settings for the PID when the card is clicked/tapped-->
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn flat @click="$refs.settingsModal.close()" >
            Close
          </q-btn>
          <q-toolbar-title>
            Settings
          </q-toolbar-title>
        </q-toolbar>
        <q-list sparse>
          <q-item>          <!-- Settings for the input and setpoint-->
            <input-block header="Input" :value="input.value"/>
            <input-block header="Setpoint" :value="input.setPoint"/>
          </q-item>
          <div class="center">
            <q-checkbox v-model="settings.enabled" @click="changeBackground()" label="Enabled"/>
          </div>
          <q-item>          <!-- Settings for the error-->
            <read-block header="Error" :value="state.inputError"/>
            <text-block text="*"/>
            <input-block header="Kp" :value="settings.Kp"/>
            <text-block text="="/>
            <read-block class="col-3" header="P" :value="state.p"/>
          </q-item>
          <q-item>          <!-- Settings for the intergral-->
            <read-block header="Intergral" :value="state.integral"/>
            <text-block text="/"/>
            <input-block header="Ti" :value="settings.Ti"/>
            <text-block text="="/>
            <read-block class="col-3" header="I" :value="state.i"/>
          </q-item>
          <q-item>          <!-- Settings for the derivative-->
            <read-block header="Derivative * Kp" :value="derivativeKp"/>
            <text-block text="*"/>
            <input-block header="Td" :value="settings.Td"/>
            <text-block text="="/>
            <read-block class="col-3" header="D" :value="state.d"/>
          </q-item>
          <q-item> 
            <div class="col-9"></div>
            <read-block class="col-3" header="Output" :value="output.value"/>
          </q-item> 
        </q-list>        <!-- Settings for the filter-->
        <div class="filters">
          <q-field color="primary" label= "Input Filter">
            <q-select v-model="settings.inputFilter" :options="filterSelectOptions"/> 
          </q-field>
          <q-field color="primary" label= "Derivative Filter">
            <q-select v-model="settings.derivativeFilter" :options="filterSelectOptions"/> 
          </q-field>
        </div>
      </q-modal-layout>
  </q-modal>
</widget-large>
</template>

<script>
import WidgetLarge from './WidgetLarge.vue';
import InputBlock from '../common/InputBlock.vue';
import ReadBlock from '../common/ReadBlock.vue';
import TextBlock from '../common/TextBlock.vue';
import {
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QModal,
  QModalLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QInput,
  QField,
  QCheckbox,
  QSelect,
} from 'quasar';


export default {
  name: 'WPid',
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QModal,
    QModalLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QInput,
    QField,
    QCheckbox,
    QSelect,
    WidgetLarge,
    InputBlock,
    ReadBlock,
    TextBlock,
  },
  props: {
  },
  data: () => ({
    name: 'heater1pid',
    input: {
      value: 20,
      setPoint: 21.0859,
    },
    output: {
      value: 45.6758,
    },
    settings: {
      Kp: 10,
      Ti: 600,
      Td: 60,
      inputFilter: 3,
      derivativeFilter: 4,
      enabled: true,
    },
    state: {
      inputError: -1.0781,
      derivative: 0.0013,
      integral: 20889.84,
      p: 10.7813,
      i: 34.8164,
      d: 0.0781,
    },
    filterSelectOptions: [
      { label: '9 seconds', value: 0 },
      { label: '18 seconds', value: 1 },
      { label: '39 seconds', value: 2 },
      { label: '78 seconds', value: 3 },
      { label: '159 seconds', value: 4 },
      { label: '318 seconds', value: 5 },
      { label: '639 seconds', value: 6 },
    ],
  }),
  created() {
  },
  computed: {
    derivativeKp() { return (this.state.derivative * this.settings.Kp); },
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
.center {
  text-align: center;
}
.filters {
  padding: 10px;
}
</style>
