import React from 'react'
import { View, StyleSheet, processColor } from 'react-native'
import { LineChart } from 'react-native-charts-wrapper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    marginTop: 50,
    marginLeft: 5,
    height: 250,
    width: 350,
    // backgroundColor: 'white',
  },
})

const data = {
  dataSets: [
    {
      values: [
        { y: 32.4 },
        { y: 30.5 },
        { y: 30.8 },
        { y: 28.2 },
        { y: 28.4 },
        { y: 28.3 },
        { y: 27.1 },
        { y: 29.9 },
        { y: 30.1 },
        { y: 26.2 },
        { y: 25.3 },
        { y: 25.0 },
      ],
      label: '',
      config: {
        lineWidth: 2,
        drawCircles: false,
        highlightColor: processColor('red'),
        color: processColor('rgb(255, 150, 150)'),
        // drawFilled: true,
        fillColor: processColor('red'),
        fillAlpha: 30,
        valueTextSize: 0,
        valueFormatter: "##.0",
        dashedLine: {
          lineLength: 20,
          spaceLength: 0,
        },
      }
    },
    // {
    //   values: [{y: 90}, {y: 130}, {y: 100}, {y: 105}],
    //   label: 'Company Y',
    //   config: {
    //     lineWidth: 1,
    //     drawCubicIntensity: 0.4,
    //     circleRadius: 5,
    //     drawHighlightIndicators: false,
    //     color: processColor('blue'),
    //     drawFilled: true,
    //     fillColor: processColor('blue'),
    //     fillAlpha: 45,
    //     circleColor: processColor('blue')
    //   }
    // },
    // {
    //   values: [{y: 110}, {y: 105}, {y: 115}, {y: 110}],
    //   label: 'Company Dashed',
    //   config: {
    //     color: processColor('green'),
    //     drawFilled: true,
    //     fillColor: processColor('green'),
    //     fillAlpha: 50
    //   }
    // },
  ],
}

const legend = {
  enabled: false,
  textColor: processColor('blue'),
  textSize: 12,
  position: 'BELOW_CHART_RIGHT',
  form: 'SQUARE',
  formSize: 14,
  xEntrySpace: 10,
  yEntrySpace: 5,
  formToTextSpace: 5,
  wordWrapEnabled: true,
  maxSizePercent: 0.5,
  custom: {
    colors: [processColor('red'), processColor('blue'), processColor('green')],
    labels: ['Company X', 'Company Y', 'Company Dashed']
  }
}

const marker = {
  enabled: true,
  backgroundTint: processColor('teal'),
  markerColor: processColor('#F0C0FF8C'),
  textColor: processColor('white'),
}

const xAxis = {
  valueFormatter: ['', '', '', '', '', '', '', '', ''],
  // axisLineColor: processColor('teal')
}

const LineChartExample = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          data={data}
          description={{text: ''}}
          legend={legend}
          marker={marker}
          xAxis={xAxis}
          // drawBorders={true}
          drawGridBackground={true}
          gridLineWidth={0.5}
          gridBackgroundColor={processColor('rgb(250, 250, 255)')}
          borderColor={processColor('rgb(180, 180, 180)')}
          chartBackgroundColor={processColor('white')}
          borderWidth={1}
          drawBorders={true}

          touchEnabled={true}
          dragEnabled={true}
          scaleEnabled={true}
          scaleXEnabled={true}
          scaleYEnabled={true}
          pinchZoom={true}
          doubleTapToZoomEnabled={true}

          dragDecelerationEnabled={true}
          dragDecelerationFrictionCoef={0.99}

          keepPositionOnRotation={false}
        />
      </View>
    </View>
  )
}

export default LineChartExample
