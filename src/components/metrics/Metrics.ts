import Vue from 'vue';
import Component from 'vue-class-component';
import createPlotlyComponent from 'vue-plotly.js/factory';

import Plotly from './plotly';
import { getById } from '../../store/blocks/OneWireTempSensor/getters';
import { findBlockWithMetrics } from '../../store/blocks/actions';

var currentdate = new Date().getTime();
var startdate = currentdate-10000000000;

@Component({
  props: {
    id: {
      default: '',
      type: String,
    },
  },
  components: {
    Plotly: createPlotlyComponent(Plotly),
  },
})
export default class Metrics extends Vue {
  plotly = {
    data: [
      {
        type: 'scatter',
        mode: "lines",
        name: 'trace0',
        x: this.testDatax(),
        y: this.testDatay(),
      },
      {
        type: 'scatter',
        mode: "lines",
        name: 'trace1',
        x: this.testDatax(),
        y: this.testDatay(),
      },
    ],
    layout: {
      title: 'A Fancy Plot',
      font: {
        color: '#fffafa'
      },
      paper_bgcolor: '#24333d',
      plot_bgcolor: '#24333d',
      line: {
        width: 6,
        color: '#fffafa'
      },
      xaxis: {
        gridcolor: '#7F7F7F',
      },
      spikedash: 'dot',
      yaxis: {
        gridcolor: '#7F7F7F',
      },
    },
  };

  get blockData() {
    return getById(this.$props.id);
  }

  get metrics() {
    return this.blockData.metrics;
  }

  get loading() {
    return this.blockData.isLoading;
  }

  created() {
    if (this.metrics.length === 0) {
      findBlockWithMetrics(this.$props.id);
    }
  }

  testDatax(){
    var data = [];
    var i;
    for(i=startdate; i< currentdate;i = i + 1000000){
      var date = new Date(i);
      data.push(date.toLocaleDateString() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }
    return data;
  }

  testDatay(){
    var data = [];
    var i = 0;
    var y = 0;
    for(i=startdate; i< currentdate;i = i + 1000000){
      y = y + Math.random() * 10 - 5;
      data.push(y);
    }
    return data;
  }

  getDate(){
    var date = new Date();
    return date.toLocaleDateString() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

  nextData(key:any, date:any) {
    return {
      type: 'scatter',
      mode: "lines",
      name: 'trace' + key,
      x: [...this.plotly.data[key].x, date],
      y: [...this.plotly.data[key].y, this.plotly.data[key].y[this.plotly.data[key].y.length-1] + Math.random() * 10 - 5],
    };
  }

  updateData() {
    setInterval(
      () => {
          this.$set(this.plotly, 'data', 
          [this.nextData(0, this.getDate()), 
            this.nextData(1, this.getDate())
          ]);
      },
      1000,
    );
  }
}
