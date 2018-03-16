import Vue from 'vue';
import Component from 'vue-class-component';
import createPlotlyComponent from 'vue-plotly.js/factory';

import Plotly from './plotly';
import { getById } from '../../store/blocks/OneWireTempSensor/getters';
import { findBlockWithMetrics } from '../../store/blocks/actions';

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
        x: ['2013-10-04 22:23:00', '2013-10-05 22:23:00', '2013-10-06 22:23:00'],
        y: [2, 5, 3],
      },
    ],
    layout: {
      title: 'A Fancy Plot',
      font: {
        color: '#fffafa'
      },
      paper_bgcolor: '#24333d',
      plot_bgcolor: '#24333d',
      xaxis: {
        gridcolor: '#7F7F7F',
      },
      spikedash: 'dot',
      yaxis: {
        gridcolor: '#7F7F7F',
      },
    },
    restyle: {
      '.modebar': {
        "background-color": 'white',
      }
    }
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

  updateData() {
    setInterval(
      () => {
        this.$set(this.plotly, 'data', [
          {
            type: 'scatter',
            x: [...this.plotly.data[0].x, this.plotly.data[0].x.length + 1],
            y: [...this.plotly.data[0].y, Math.floor(Math.random() * Math.floor(10))],
          },
        ]);
      },
      10,
    );
  }
}
