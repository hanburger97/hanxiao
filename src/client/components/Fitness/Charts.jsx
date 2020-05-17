import React, { Component } from 'react';

import { ResponsiveCalendar } from '@nivo/calendar';
import { ResponsivePie } from '@nivo/pie'
import palette  from '../../global.js';

export const FitnessCalendar = (props) => {
  let now = new Date();
  // let lastYear = new Date();
  // lastYear.setYear(now.getFullYear() -1);
  // now.setDate(now.getDate() - 1);

  let toDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
  let fromDate = `${now.getFullYear()}-03-18`
  // let fromDate = `${lastYear.getFullYear()}-${lastYear.getMonth()}-${lastYear.getDate()}`
  console.log(fromDate, toDate)
  
  
  return (
    <ResponsiveCalendar
        data={props.data}
        from={fromDate}
        to={toDate}
        emptyColor="#36454f"
        colors={[ '#857750', "#b89733" ,'#ad8200']}
        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        monthBorderColor={palette.midnight_green}
        dayBorderWidth={4}
        granularity="month"
        dayBorderColor={palette.midnight_green}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 16,
                itemCount: 3,
                itemWidth: 30,
                itemHeight: 30,
                itemsSpacing: 10,
                itemDirection: 'right-to-left'
            }
        ]}
    />
  )
}

export const PieChart = (props) =>{

  return (
    <ResponsivePie
        data={props.data}
        
        margin={{ top: 40, right: 0, bottom: 40, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableRadialLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#fff"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 30,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#fff',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
}