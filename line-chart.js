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
        { y: 35.4 },
        { y: 30.5 },
        { y: 30.8 },
        { y: 28.2 },
        { y: 28.4 },
        { y: 28.3 },
        { y: 27.1 },
        { y: 29.9 },
        { y: 30.1 },
        { y: 26.2 },
        { y: 17.3 },
      ],
      label: '',
      config: {
        lineWidth: 1.5,
        drawCircles: false,
        drawCubic: false,
        highlightColor: processColor('red'),
        color: processColor('rgb(255, 150, 150)'),
        // drawFilled: true,
        fillColor: processColor('red'),
        fillAlpha: 255,
        valueTextSize: 0,
        valueFormatter: "##.0",
        dashedLine: {
          lineLength: 20,
          spaceLength: 0,
        },
      }
    },
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
  /* what is drawn */
  enabled: true,
  drawLabels: true,
  drawAxisLine: true,
  drawGridLines: true,

  /* style */
  textColor: processColor('rgb(150, 150, 150)'),
  textSize: 8,
  // fontFamily: string,
  // fontStyle: number,
  gridColor: processColor('rgb(200, 200, 200)'),    // 縦線(グリッド)のカラー
  gridLineWidth: 1,   // 横線(グリッド)の太さ
  axisLineColor: processColor('rgb(200, 200, 200)'),   // X軸のカラー
  axisLineWidth: 1,  // X軸の太さ
  gridDashedLine: {   // 横線(グリッド)の点線設定
    lineLength: 4,
    spaceLength: 1,
  },
  // limit lines  (境界線を入れる場合に利用)
  // limitLines: [
  //   {
  //     limit: 1,
  //     label: 'limit1',
  //     lineColor: processColor('red'),
  //     lineWidth: 1,
  //   }
  // ],
  // drawLimitLinesBehindData: true,

  // axisMinimum: 1,
  // axisMaximum: 40,
  granularity: 1, // 粒度
  granularityEnabled: true,

  labelCount: 10,   // ラベル数(グリッド縦線の数)
  labelCountForce: false,

  centerAxisLabels: false,  // ラベルを点の位置でなく間に表示する

  // valueFormatter: 'largeValue',
  valueFormatter: ['4/20', '・', '・', '・', '・', '4/25', '・', '・', '・', '・', 'Today'],

  /* xAxis固有 */
  labelRotationAngle: 0,  // ラベルの回転角度
  avoidFirstLastClipping: false,   // 最初と最後のラベルがはみ出さないように内側に寄せる
  position: 'BOTTOM',
}

const yAxis = {
  left: {
    // what is drawn
    enabled: true,
    drawLabels: true,
    drawAxisLine: true,
    drawGridLines: true,

    /* style */
    textColor: processColor('rgb(150, 150, 150)'),
    textSize: 8,
    // fontFamily: string,
    // fontStyle: number,
    gridColor: processColor('rgb(200, 200, 200)'),    // 縦線(グリッド)のカラー
    gridLineWidth: 1,   // 横線(グリッド)の太さ
    axisLineColor: processColor('rgb(200, 200, 200)'),   // X軸のカラー
    axisLineWidth: 1,  // X軸の太さ
    gridDashedLine: {   // 横線(グリッド)の点線設定
      lineLength: 4,
      spaceLength: 1,
    },
    // limit lines  (境界線を入れる場合に利用)
    // limitLines: [
    //   {
    //     limit: 10,
    //     label: 'limit1',
    //     lineColor: processColor('red'),
    //     lineWidth: 30,
    //   }
    // ],
    // drawLimitLinesBehindData: true,

    axisMinimum: 0,
    axisMaximum: 50,
    granularity: 1, // 粒度
    granularityEnabled: true,

    labelCount: 6,   // ラベル数(グリッド縦線の数)
    labelCountForce: false,

    centerAxisLabels: false,  // ラベルを点の位置でなく間に表示する
    // valueFormatter: ['0', '', '', '', '', '', '', '', '8', '', '', '', '', '', '14', '', '', '', '', '', '', '', '', '', '24', '', '', '', '', '', '', '', '', '', '34', '35', '', '', '', '', '', '' ],
    // valueFormatter: [0, 8, 14, 24, 35],
  },
  right: {
    enabled: false,
  },
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
          yAxis={yAxis}
          // drawBorders={true}
          drawGridBackground={false}
          gridLineWidth={0.5}
          gridBackgroundColor={processColor('rgb(250, 250, 255)')}
          borderColor={processColor('rgb(200, 200, 200)')}
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
