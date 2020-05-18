import React, { Component } from 'react';

import { ResponsiveCalendar } from '@nivo/calendar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveLine } from '@nivo/line'

import palette  from '../../global.js';

export const FitnessCalendar = (props) => {
  let now = new Date();
  let toDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
  let fromDate = `${now.getFullYear()}-03-18`  
  
  return (
    <ResponsiveCalendar
        data={props.data}
        from={fromDate}
        to={toDate}
        emptyColor="#426266"
        colors={[ '#7ca7de', "#3d91ff" ,'#006eff']}
        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        monthBorderColor={palette.midnight_green}
        monthLegendColor="#fff"
        dayBorderWidth={4}
        granularity="month"
        dayBorderColor={palette.midnight_green}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                color: "#fff",
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
        
        margin={{ top: 20, right: 0, bottom: 40, left: 20 }}
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
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         translateY: 30,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#fff',
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
  )
}

export const RadarChart = (props) => {

  return (
    <ResponsiveRadar
        data={props.data}
        keys={props.keys}
        indexBy="exercise"
        maxValue="auto"
        margin={{ top: 70, right: 90, bottom: 40, left: 90 }}
        curve="linearClosed"
        borderWidth={5}
        borderColor={{ theme: 'background' }}
        gridLevels={4}
        gridShape="circular"
        gridLabelOffset={23}
        enableDots={true}
        dotSize={10}
        enableDotLabel={false}
        dotColor={palette.midnight_green}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        colors={{ scheme: 'blues' }}
        fillOpacity={0.5}
        blendMode="normal"
        animate={true}
        motionStiffness={25}
        motionDamping={15}
        isInteractive={true}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#fff"
              }
            }
          }
        }}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: 40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#fff',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#fff'
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export const LineChart = (props) => {
  return (
    <ResponsiveLine
        data={props.data}
        margin={{ top: 70, right: 110, bottom: 70, left: 70 }}
        xScale={{
          type: "point"
        }}
        yScale={{ type: 'linear', min: 0, max: 20, stacked: true, reverse: false }}
        curve="natural"
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'pace (min/km) / distance (km)',
            legendOffset: -40,
            legendPosition: 'middle',
            textColor: '#fff',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#fff"
              }
            },
            legend: {
              text: {
                fill: "#fff"
              }
            }
          }
        }}
        enableArea={true}
        areaOpacity={0.4}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemTextColor: '#fff',
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}