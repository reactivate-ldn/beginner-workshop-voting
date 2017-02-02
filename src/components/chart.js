import React from 'react';
import { VictoryBar } from 'victory';
import Color from 'goethe';

const style = {
  labels: {
    fontSize: '1.2rem',
    fill: '#D3F9F4',
    opacity: 0.85
  },
  data: {
    fill: '#FFBD24'
  }
};

const Chart = ({ answers }) => (
  <VictoryBar
    data={answers.map(a => ({ option: a.answer, votes: a.votes }))}
    x="option"
    y={({ votes }) => votes}
    labels={({ option }) => option}
    style={style}
  />
);

export default Chart;
