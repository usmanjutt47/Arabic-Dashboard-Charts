import { View, Text, Dimensions } from "react-native";
import React from "react";
import { PieChart as RNLineChart } from "react-native-chart-kit";

export default function PieChartComponent() {
  return (
    <>
      <View>
        <RNLineChart
          data={[
            {
              name: "A",
              population: 20,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "B",
              population: 45,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "C",
              population: 28,
              color: "red",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "D",
              population: 80,
              color: "#ffffff",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "E",
              population: 99,
              color: "rgb(0, 0, 255)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "F",
              population: 43,
              color: "rgb(0, 255, 0)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "X",
              population: 43,
              color: "rgb(0, 255, 0)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            }
          ]}
          width={Dimensions.get("window").width}
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
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </>
  );
}
