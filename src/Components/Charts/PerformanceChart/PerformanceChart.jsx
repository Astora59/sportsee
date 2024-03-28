import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import classes from "./PerformanceChart.module.scss"

const kindLabels = {
  1: "cardio",
  2: "energy",
  3: "endurance",
  4: "strength",
  5: "speed",
  6: "intensity"
};  

export const PerformanceChart = (props) =>  {
  const {performance} = props;
  
   const dataWithLabels = performance.data.map(item => ({
        ...item,
        kind: kindLabels[item.kind]
    }));
  
    return (
      <div>
         <ResponsiveContainer className={classes.performanceChartStyle} width={300} height={300} tick={false} background-color="black">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataWithLabels}  >
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10, fill: 'white', fontWeight: 'bold' }} />
          <PolarRadiusAxis tick={false} axisLine={false} tickCount="4"/>
          <Radar dataKey="value" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
      </div>
     
    );
  }
