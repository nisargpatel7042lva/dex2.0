import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Polyline, Defs, LinearGradient, Stop } from 'react-native-svg';

interface MiniChartProps {
  data?: number[];
  width?: number;
  height?: number;
  style?: ViewStyle;
}

const defaultData = [10, 20, 18, 25, 30, 28, 35, 40, 38, 45, 50, 48, 55];

const MiniChart: React.FC<MiniChartProps> = ({ data = defaultData, width = 120, height = 40, style }) => {
  // Normalize data to fit chart
  const min = Math.min(...data);
  const max = Math.max(...data);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / (max - min)) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <View style={[styles.container, style]}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="chartGradient" x1="0" y1="0" x2="0" y2={height}>
            <Stop offset="0%" stopColor="#22C55E" stopOpacity="1" />
            <Stop offset="100%" stopColor="#181A1B" stopOpacity="0.2" />
          </LinearGradient>
        </Defs>
        <Polyline
          points={points}
          fill="none"
          stroke="url(#chartGradient)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MiniChart; 