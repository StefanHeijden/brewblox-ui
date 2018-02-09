<template>
<widget-wrapper :tilesX=tilesX :tilesY=tilesY>
  <div class="gridWPid" :style="calcRows">
    <div class="titel">PID controller</div>
    <q-btn class="settingsButton" round icon="build" color="primary" small @click="$refs.settingsModal.open()"/>
    <read-block class="input" header="Input" :value="input.value"/>
    <read-block class="setPoint" header="Setpoint" :value="input.setPoint"/>
      <read-block class="error" header="P" :value="state.p"/>
      <read-block class="intergral" header="I" :value="state.i"/>
      <read-block class="derative" header="D" :value="state.d"/>
    <read-block class="output" header="Output" :value="output.value"/>
  </div>

  <q-modal ref="settingsModal" :content-css="{minWidth: '50%', minHeight: '80%'}">
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
        <q-list>
          <q-item sparse>          <!-- Settings for the input and setpoint-->
            <input-block header="Input" :value="input.value"/>
            <input-block header="Setpoint" :value="input.setPoint"/>
          </q-item>
          <div class="center">
            <q-checkbox v-model="settings.enabled" @click="changeBackground()" label="Enabled"/>
          </div>
          <q-item :class="{disabled: !settings.enabled}" sparse>          <!-- Settings for the error-->
            <input-block header="Error" :value="state.inputError" :onlyread="true"/>
            <text-block text="*"/>
            <input-block header="Kp" :value="settings.Kp"/>
            <text-block text="="/>
            <input-block class="col-3" header="P" :value="state.p" :onlyread="true"/>
          </q-item>
          <q-item :class="{disabled: !settings.enabled}" sparse>          <!-- Settings for the intergral-->
            <input-block header="Intergral" :value="state.integral" :onlyread="true"/>
            <text-block text="/"/>
            <input-block header="Ti" :value="settings.Ti"/>
            <text-block text="="/>
            <input-block class="col-3" header="I" :value="state.i" :onlyread="true"/>
          </q-item>
          <q-item :class="{disabled: !settings.enabled}" class="derivative" sparse>          <!-- Settings for the derivative-->
            <input-block header="Derivative * Kp" :value="derivativeKp" :onlyread="true"/>
            <text-block text="*"/>
            <input-block header="Td" :value="settings.Td"/>
            <text-block text="="/>
            <input-block class="col-3" header="D" :value="state.d" :onlyread="true"/>
          </q-item>
          <q-item :class="{disabled: !settings.enabled}" dense> 
            <div class="col-9 plus">+</div>
            <q-item-main class="col-3 line">
              <q-item-tile label>&nbsp</q-item-tile>
            </q-item-main>
          </q-item> 
          <q-item :class="{disabled: !settings.enabled}" sparse> 
            <div class="col-9"></div>
            <input-block class="col-3" header="Output" :value="output.value" :onlyread="true"/>
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
</widget-wrapper>
</template>

<script>
import WidgetWrapper from './WidgetWrapper.vue';
import InputBlock from '../common/InputBlock.vue';
import ReadBlock from '../common/ReadBlock.vue';
import TextBlock from '../common/TextBlock.vue';
import WidgetLayout from './mixins/WidgetLayout';
import {
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QModal,
  QModalLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QField,
  QCheckbox,
  QSelect,
} from 'quasar';


export default {
  name: 'WPid',
  mixins: [WidgetLayout],
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QModal,
    QModalLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QField,
    QCheckbox,
    QSelect,
    WidgetWrapper,
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
    calcRows() {
      const pixelsRow = this.tilesY * (100 / this.tilesX);
      console.log(document.querySelector('.gridWPid').width); /* NaN??? proprably the this.width */
      return `grid-template-rows: repeat(4, ${pixelsRow}px)`; /* works with numbers but  */
    },
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
@import './mixins/WidgetGrid.css'
.filters {
  padding: 10px;
}
.derivative {
  padding-bottom: 0px;
}
.plus {
  text-align: right;
}
.output {
  padding-top: 0px;
}
.line {
  border-bottom: solid black 1px;
}
</style>
