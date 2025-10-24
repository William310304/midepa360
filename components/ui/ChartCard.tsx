import { Colors } from "@/constants/theme";
import React from "react";
import { Text, useColorScheme, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import styled from "styled-components/native";

export const ChartCard = () => {
  const isDark = useColorScheme() === 'dark';
  const textColor = isDark? Colors.dark.text: Colors.light.text;
  const textMuteColor = isDark? Colors.dark.subText : Colors.light.subText;
  const data = [
    // Enero
    {
      value: 9000, // escala (para no desbordar)
      label: "Ene",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: textColor },
      frontColor: "#8C5CFF", // ingresos
    },
    { value: 7000, frontColor: "#4ADE80" }, // egresos

    // Febrero
    {
      value: 8500,
      label: "Feb",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle:{ color: textColor },
      frontColor: "#8C5CFF",
    },
    { value: 6500, frontColor: "#4ADE80" },

    // Marzo
    {
      value: 8800,
      label: "Mar",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: textColor },
      frontColor: "#8C5CFF",
    },
    { value: 7200, frontColor: "#4ADE80" },

    // Abril
    {
      value: 9200,
      label: "Abr",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: textColor },
      frontColor: "#8C5CFF",
    },
    { value: 6800, frontColor: "#4ADE80" },

    // Mayo
    {
      value: 8600,
      label: "May",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: textColor },
      frontColor: "#8C5CFF",
    },
    { value: 6900, frontColor: "#4ADE80" },

    // Junio
    {
      value: 9400,
      label: "Jun",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: textColor },
      frontColor: "#8C5CFF",
    },
    { value: 7500, frontColor: "#4ADE80" },
  ];
  return (
    <Container>
      <Title>Comparación mensual</Title>

      <BarChart
        barWidth={12}
        noOfSections={10}
        // barBorderRadius={4}
        yAxisTextStyle={{ color: textMuteColor }}
        xAxisLabelTextStyle={{ color: textMuteColor }}
        // spacing={24}
        data={data}
        height={260}
        showYAxisIndices
        roundedTop
        // hideRules
        // xAxisThickness={0}
        // yAxisThickness={0}
        // showFractionalValues
        maxValue={10000}
        // yAxisLabelPrefix="S/"
        yAxisColor="#ccc"
        xAxisColor="#ccc"
        isAnimated
        renderTooltip={(item: any, index: any) => {
          return (
            <View
              style={{
                marginBottom: 5,
                marginLeft: -10,
                backgroundColor: '#ffcefe',
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 4,
              }}>
              <Text>S/{item.value}</Text>
            </View>
          )
        }}
        onPress={(item: any, index: any) => console.log('item', item.value)}
      />

      <LegendContainer>
        <Legend color="#8C5CFF" label="Ingresos" />
        <Legend color="#30E07B" label="Egresos" />
      </LegendContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme})=>theme.background};
  border-radius: 16px;
  padding: 16px;
  /* margin-bottom: 5px; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 14px;
  color: ${({theme})=> theme.subText};
  /* margin-bottom: 10px; */
  font-weight: 600;
`;

const LegendContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

const Legend = ({ color, label }: { color: string; label: string }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 6,
      }}
    />
    <Title style={{  fontSize: 12 }}>{label}</Title>
  </View>
);

