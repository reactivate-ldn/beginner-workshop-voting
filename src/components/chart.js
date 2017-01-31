import React from 'react';
import { VictoryBar } from 'victory';

const style = {
  labels: {
    fontSize: '1.2rem'
  }
};

const Chart = () => (
  <VictoryBar
    data={[
      { option: 'React', votes: 100 },
      { option: 'Ember', votes: 80 },
      { option: 'Angular', votes: 20 },
      { option: 'Vue', votes: 25 }
    ]}
    x="option"
    y={({ votes }) => votes}
    labels={({ option }) => option}
    style={style}
  />
);

export default Chart;
