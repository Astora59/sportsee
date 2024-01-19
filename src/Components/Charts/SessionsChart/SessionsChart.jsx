import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import classes from "./Sessions.module.scss"



export const SessionsChart = (props) =>  {
  const {session} = props; 
    return (
      <ResponsiveContainer className={classes.sessionsChart_style} width={300} height={263}>
        <LineChart
          width={500}
          height={300}
          data={session?.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false}  />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFF" activeDot={{ r: 8 }} dot={false} strokeWidth={2} />
          
        </LineChart>
      </ResponsiveContainer>
    );
  }

