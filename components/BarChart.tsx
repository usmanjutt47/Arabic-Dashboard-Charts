import { View, Text } from "react-native";
import React from "react";
import { BarChart as ChartKitBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};

export default function BarChart() {
  return (
    <View style={{ flex: 1 }}>
      <ChartKitBarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#000",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 20
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        yAxisLabel="R "
        yAxisSuffix="k"
      />
    </View>
  );
}
