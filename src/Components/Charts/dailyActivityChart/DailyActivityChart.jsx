import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import classes from "./DailyActivityChart.module.scss"





export const DailyActivityChart = (props) => {
  const {activity} = props;
  const formatXAxis = (index, i) => {
    return i + 1
  }
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.custom_tooltip}>
          <p className={classes.customKilo}>{`${payload[0].value}`}kg</p>
          <p className={classes.customKilo}>{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }
  
    return null;
  };
    return (
      
      <ResponsiveContainer width={835} height={320} className={classes.activityChart}>
        <div className={classes.legend}>
          <p className={classes.graphTitle}>Activité quotidienne</p>
          <div className={classes.graphLegend}>
            <div className={classes.textBdisplay}>
              <div className={classes.circleB}></div>
                <p className={classes.textB}>Poids(kg)</p>
            </div>
            <div className={classes.textBdisplay}>
              <div className={classes.circleR}></div>
                <p className={classes.textB}>Calories brûlées (kCal)</p>
            </div>
          
          </div>
        </div>
        

        <BarChart
          width={300}
          height={300}
          data={activity?.sessions}
          barCategoryGap = "30%"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false}/>
          <XAxis tickLine={false} dataKey="day" tickFormatter={formatXAxis} tick={{ fill: '#9B9EAC'}}/>
          <YAxis orientation="right" tickLine={false} axisLine={false} type="number" domain={[0, "auto"]} tickCount={3} tick={{ fill: '#9B9EAC'}}/>
          <Tooltip content={<CustomTooltip />}/>
          <Bar radius={[5, 5, 0, 0]} dataKey="kilogram" fill="#282D30" activeBar={<Rectangle fill="#282D30" stroke="#282D30" />} />
          <Bar radius={[5, 5, 0, 0]} dataKey="calories" fill="#E60000" activeBar={<Rectangle fill="#E60000" stroke="E60000" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
