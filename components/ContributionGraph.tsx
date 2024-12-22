import { View, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { ContributionGraph } from "react-native-chart-kit";

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 }
];

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#000",
  backgroundGradientTo: "#ffa726",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};

export default function ContributionGraphComponent() {
  return (
    <View style={styles.container}>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        numDays={105}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        tooltipDataAttrs={() => ({
          stroke: "#fff",
          fill: "#c3c3"
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});
