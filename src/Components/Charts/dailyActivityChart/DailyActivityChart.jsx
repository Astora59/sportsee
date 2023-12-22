import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

export const UserData = () => {
  const [projects, setProjects] = useState([])
  const [useMock, setUseMock] = useState(false)

  useEffect(() => {
      async function fetchData(id) {
          const response = await fetch(useMock ? "http://localhost:3001/userMainData.json" : `http://localhost:3000/user/${id}"`);
          const data = response.json();
          setProjects(data)
          
      }
      fetchData();
  }, [useMock])
  const handleSwitchSourceData = () => {
      setUseMock(!useMock)
  }}

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="black" activeBar={<Rectangle fill="black" stroke="black" />} />
          <Bar dataKey="uv" fill="#FF0101" activeBar={<Rectangle fill="#FF0101" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
