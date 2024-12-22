import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LineChartComponent from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChartComponent from "./components/PieChart";
import ProgressChartComponent from "./components/ProgressChart";
import ContributionGraphComponent from "./components/ContributionGraph";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 10, paddingTop: 30 }}>
        <StatusBar style="dark" />
        <LineChartComponent />
        <PieChartComponent />
        <BarChart />
        <ProgressChartComponent />
        <ContributionGraphComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
