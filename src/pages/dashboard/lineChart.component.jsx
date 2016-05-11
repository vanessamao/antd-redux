import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {name: '8:00', uv: 400, pv: 240, amt: 2400},
  {name: '9:00', uv: 300, pv: 139, amt: 2210},
  {name: '10:00', uv: 200, pv: 980, amt: 2290},
  {name: '11:00', uv: 278, pv: 390, amt: 2000},
  {name: '12:00', uv: 189, pv: 480, amt: 2181},
  {name: '13:00', uv: 239, pv: 380, amt: 2500},
  {name: '14:00', uv: 349, pv: 430, amt: 2100}
];

const LineChartComponent = React.createClass({
  render () {
    return (
      <LineChart width={600} height={300} data={data}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
});

export  default LineChartComponent;
