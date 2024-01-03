import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import classes from "./PerformanceChart.module.scss"

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export const PerformanceChart = () =>  {
    return (
      <div>
         <ResponsiveContainer className={classes.performanceChartStyle} width={258} height={250} tick={false} tickCount="1" background-color="black">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} tickCount="1">
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="subject" tick={false}/>
          <PolarRadiusAxis tick={false} axisLine={false} tickCount="4"/>
          <Radar name="Mike" dataKey="A" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
     
    );
  }
