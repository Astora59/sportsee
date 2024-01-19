import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import classes from "./PerformanceChart.module.scss"



export const PerformanceChart = (props) =>  {
  const {performance} = props;
    return (
      <div>
         <ResponsiveContainer className={classes.performanceChartStyle} width={258} height={250} tick={false} tickCount="1" background-color="black">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance} tickCount="1">
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="subject" tick={false}/>
          <PolarRadiusAxis tick={false} axisLine={false} tickCount="4"/>
          <Radar name="Mike" dataKey="A" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
     
    );
  }
