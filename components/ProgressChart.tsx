import React from "react";
import { View, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const ProgressChartComponent = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    data: Array.from({ length: 4 }, () => Math.random())
  };

  return (
    <View>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={10}
        radius={32}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#000",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(2155, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        hideLegend={false}
      />
    </View>
  );
};

export default ProgressChartComponent;
