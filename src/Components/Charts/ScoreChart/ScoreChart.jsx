import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import classes from "./ScoreChart.module.scss"




function CustomLegendScore (payload) {
  return (
    <div className={classes.custom_legend_score}>
      <p className={classes.custom_legend_score_score}>
        {payload?.payload[0]?.payload.value}%
      </p>
      <p className={classes.custom_legend_score_objectif}> de votre objectif</p>
    </div>
  )
}



export const ScoreChart = (props) =>  {
  const { mainData } = props
  // Calcul du ratio de remplissage en fonction de mainData.todayScore
  const fillRatio = mainData.todayScore; // mainData.todayScore est déjà un nombre entre 0 et 1
  const dataScore = [
    {
      name: "score",
      uv: fillRatio,
      fill: "#FF0000"
    }
  ];
  console.log(mainData.todayScore)
    return (
        <ResponsiveContainer width={300} height={300} className={classes.scoreStyle}>
        <RadialBarChart cx="55%" cy="55%" innerRadius="70%" data={20} className={classes.centeredGraph}>
        <text
          x={40}
          y={30}
          fill="#000"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="15">Score</tspan>
        </text>
          <RadialBar
            background
            clockWise
            dataKey="uv"
            cornerRadius="50% "
            maxBarSize={10}
            fill="#FF0000"
            isAnimationActive
          />
          <text
          x="50%"
          y="35%"
          alignmentBaseline="central"
          fill="#000"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          
        >
          <tspan x={163} y={120} dy="1.2em" fontSize="26">
            {mainData.todayScore * 100}%
          </tspan>
        </text>
        <text
          x="50%"
          y="50%"
          alignmentBaseline="central"
          fill="#74798C"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          
        >
          <tspan x="54%" y={170} dy="1.2em">
            de votre objectif
          </tspan>
        </text>
          
        </RadialBarChart>
      </ResponsiveContainer>
      
    );
  }
