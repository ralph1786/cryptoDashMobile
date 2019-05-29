import React, { Component } from "react";
import { View } from "react-native";
import { BarChart, Grid } from "react-native-svg-charts";
import { Text } from "react-native-svg";

class ChartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    console.log(this.state.data);
    const data = this.state.data;
    // const data = [12, 43, 53, 76, 12, 39];

    const CUT_OFF = 20;
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <Text
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={7}
          fill={value >= CUT_OFF ? "white" : "black"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {value}
        </Text>
      ));

    return (
      <View style={{ flexDirection: "row", height: 200, paddingVertical: 16 }}>
        <BarChart
          style={{ flex: 1 }}
          data={data}
          svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.HORIZONTAL} />
          <Labels />
        </BarChart>
      </View>
    );
  }
}

export default ChartBar;
