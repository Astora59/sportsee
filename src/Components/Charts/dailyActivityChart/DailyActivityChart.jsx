import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import classes from "./DailyActivityChart.module.scss"


export const DailyActivityChart = (props) => {
    return (
      <ResponsiveContainer width={835} height={320} className={classes.activityChart}>
        <BarChart
          width={300}
          height={300}
          data={props}
          barCategoryGap = "30%"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis tickLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false}/>
          <Tooltip />
          <Legend />
          <Bar radius={[5, 5, 0, 0]} dataKey="kilogram" fill="#282D30" activeBar={<Rectangle fill="#282D30" stroke="#282D30" />} />
          <Bar radius={[5, 5, 0, 0]} dataKey="calories" fill="#E60000" activeBar={<Rectangle fill="#E60000" stroke="E60000" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
