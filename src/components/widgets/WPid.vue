<template>
<widget-large id="widget-WPid">
   <!-- This card contains information of the PID-->
  <q-card class="WPid" @click="$refs.settingsModal.open()" inline>
    <q-card-title class="bigger">
      PID regelaar
    </q-card-title>
    <q-card-separator inline />
    <q-card-main>
      <!-- Display the input and setpoint-->
      <div class='row'>
        <div class="col-2" />
        <div class="col-3">
          <div class='row'>
            <div class="col-5" />
            <q-field inverted color="primary" label= "Input" />
          </div>
          <q-field>
            <q-input class="row" inverted readonly color="primary" v-model="input.value" type="number" />
          </q-field>
        </div>
        <div class="col-2" />
        <div class="col-3">
          <q-field inverted class="row" color="primary" label= "Setpoint" /> 
          <q-field>
            <q-input class="row" inverted readonly color="primary" v-model="input.setPoint" type="number" />
          </q-field>
        </div>
        <div class="col-2" />
      </div>
    </q-card-main>
    <q-card-separator inline />
    <q-card-main :class="{disabled: !settings.enabled}">
      <!-- Display the propotional, intergral and derivative-->
      <div class='row'>
        <div class="col-3">
          <q-field inverted class="row" color="primary" label= "P" /> 
          <q-field>
            <q-input class="row" inverted readonly color="primary" v-model="state.p" type="number" />
          </q-field>
        </div>
        <div class="col-1" />
        <div class="col-3">
          <q-field inverted class="row" color="primary" label= "I" /> 
          <q-field>
            <q-input class="row" inverted readonly color="primary" v-model="state.i" type="number" />
          </q-field>
        </div>
        <div class="col-1" />
          <div class="col-3">
            <q-field inverted class="row" color="primary" label= "D" /> 
            <q-field>
              <q-input class="row" inverted readonly color="primary" v-model="state.d" type="number" />
            </q-field>
          </div>
      </div>
    </q-card-main>
    <q-card-separator inline />
    <q-card-main>
      <!-- Display Output-->
      <div class='row'>
        <div class="col-4" />
          <div class="col-3">
            <q-field inverted class="row" color="primary" label= "Output" /> 
            <q-field>
              <q-input class="row" inverted readonly color="primary" v-model="output.value" type="number" />
            </q-field>
          </div>
        <div class="col-5" />
      </div>
    </q-card-main>
  </q-card>
  <q-modal ref="settingsModal" maximized>
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
        <div>
          <!-- Settings for the input and setpoint-->
          <div class='row'>
            <div class="col-4">
              <q-field inverted class="row" color="primary" label= "Input"> 
                <q-input class="row" inverted color="primary" v-model="input.value" type="number" />
              </q-field>
            </div>
            <div class="col-2" />
            <q-field class="col-4" color="primary" label= "Setpoint"> 
              <q-input inverted color="primary" v-model="input.setPoint" type="number" />
            </q-field>
          </div>
          <q-checkbox v-model="settings.enabled" @click="changeBackground()" label="Settings enabled"/>
          <hr>
          <!-- Settings for the filter-->
          <q-field label="Filtering"/>
          <q-field color="primary" label= "Input Filter">
            <q-select v-model="settings.inputFilter" :options="filterSelectOptions"/> 
          </q-field>
          <q-field color="primary" label= "Derivative Filter">
            <q-select v-model="settings.derivativeFilter" :options="filterSelectOptions"/> 
          </q-field>
          <hr>
          <!-- Settings for the error-->
          <div class="row">
            <div class="col-3">
              <q-field inverted class="row" color="primary" label= "Error" /> 
              <q-field>
                <q-input class="row" inverted readonly color="primary" v-model="state.inputError" type="number" />
              </q-field>
            </div>
            <q-field class="col-1" color="primary" label= "x"/>
            <div class="col-3">
              <q-field inverted class="row" color="primary" label= "Kp" /> 
              <q-field>
                <q-input class="row" inverted color="primary" v-model="settings.Kp" type="number" />
              </q-field>
            </div>
            <q-field class="col-2" color="primary" label= "="/>
            <div class="col-3">
              <q-field inverted class="row" color="primary" label= "P" /> 
              <q-field>
                <q-input class="row" inverted readonly color="primary" v-model="state.p" type="number" />
              </q-field>
            </div>
          </div>
          <!-- Settings for the intergral-->
          <div class="row">
            <div class="col-3">
              <q-field inverted class="row" color="primary" label= "Intergral of error" /> 
              <q-field>
                <q-input class="row" inverted readonly color="primary" v-model="state.integral" type="number" />
              </q-field>
            </div>
            <q-field class="col-1" color="primary" label= "/"/>
            <div class="col-3">
              <q-field inverted class="row" color="primary" label= "Ti" /> 
              <q-field>
                <q-input class="row" inverted color="primary" v-model="settings.Ti" type="number" />
              </q-field>
            </div>
            <q-field class="col-2" color="primary" label= "="/>
            <div class="col-3">
              <q-field inverted class="row" color="primary" label= "I" /> 
              <q-field>
                <q-input class="row" inverted readonly color="primary" v-model="state.i" type="number" />
              </q-field>
            </div>
          </div>
          <!-- Settings for the derivative-->
          <div class="row">
            <div class="col-2">
              <q-field inverted class="row" color="primary" label= "Derivative of error" /> 
              <q-field>
                <q-input class="row" inverted readonly color="primary" v-model="state.derivative" type="number" />
              </q-field>
            </div>
            <q-field class="col-1" color="primary" label= "x"/>
            <div class="col-2">
              <q-field inverted class="row" color="primary" label= "Kp" /> 
              <q-field>
                <q-input class="row" inverted color="primary" v-model="settings.Kp" type="number" />
              </q-field>
            </div>
            <q-field class="col-1" color="primary" label= "x"/>
            <div class="col-2">
              <q-field inverted class="row" color="primary" label= "Td" /> 
              <q-field>
                <q-input class="row" inverted color="primary" v-model="settings.Td" type="number" />
              </q-field>
            </div>
            <div class="col-1">
              <div class="row" >
              <p> &nbsp </p>
              </div>
              <div class="row" >
                <div class="col-6" />
                <q-field class="col-5" color="primary" label= "="/>
              </div>
            </div>
            <div class="col-2">
              <q-field inverted class="row" color="primary" label= "D" /> 
              <q-field>
                <q-input class="row" inverted readonly color="primary" v-model="state.d" type="number" />
              </q-field>
            </div>
          </div>
        </div>
      </q-modal-layout>
    <q-btn color="primary" @click="$refs.settingsModal.close()">Close</q-btn>
  </q-modal>
</widget-large>
</template>

<script>
import WidgetLarge from './WidgetLarge.vue';

import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
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
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
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
