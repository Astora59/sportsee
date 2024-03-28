import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import classes from "./Sessions.module.scss"
import moment from 'moment';
import "moment/locale/fr";


export const SessionsChart = (props) =>  {
  const {session} = props; 
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.custom_tooltip}>
          <p className={classes.customKilo}>{`${payload[0].value}`} min</p>
        </div>
      );
    }
  
    
  
    return null;
  };
  const formatXAxisTick = (tickItem) => {
    // Configurez moment pour utiliser la locale française
    moment.locale('fr');
  
    // Utilisez moment pour obtenir la première lettre du nom du jour de la semaine
    const firstLetterOfDay = moment().day(tickItem).format('dd')[0].toUpperCase();
    return firstLetterOfDay;
  };


  const CustomActiveDot = () => {
    console.log(CustomActiveDot)
    return (
      <div className={classes.bigDot}><div className={classes.smallDot}></div></div>
    )
  }

  const CustomCursor = () => {
    console.log("CustomCursor");  
    return (
        <div className={classes.customCursor}></div>
    )
    
    
  }


    return (
      <>
        
      <ResponsiveContainer className={classes.sessionsChart_style} width={300} height={300}>
        <LineChart
          data={session?.sessions}
          margin={{
            bottom: 20,
            left: 20,
            right: 20,
            top: 20,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF', opacity: '0.5' }} tickFormatter={formatXAxisTick}  margin={{
            left: 20,
            right: 20,
          }}   />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFF"  dot={false} strokeWidth={2} activeDot={{
              fill: '#fff',
              r: 4,
              strokeWidth: 4,
            }} />
          
          <text
            x="30"
            y="30"
            opacity={0.6}
            textAnchor="start"
            dominantBaseline="hanging"
            fill="white"
          >
            Durée moyenne des
          </text>
          <text
            x="30"
            y="50"
            textAnchor="start"
            opacity={0.6}
            dominantBaseline="hanging"
            fill="white"
          >
            sessions
          </text>{' '}
          
        </LineChart>
      </ResponsiveContainer>
      </>
      
    );
  }

