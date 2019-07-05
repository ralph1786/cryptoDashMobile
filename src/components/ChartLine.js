import React, { Component } from "react";
import { Text, View } from "react-native";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";

class ChartLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.data !== nextProps.data) {
      return {
        data: nextProps.data
      };
    }
    return null;
  }

  render() {
    const axesSvg = { fontSize: 10, fill: "#b971f7" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    return (
      <View style={{ height: 350, padding: 20, flexDirection: "row" }}>
        <YAxis
          data={this.state.data.reverse()}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
          formatLabel={value => `$${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={this.props.data}
            contentInset={verticalContentInset}
            svg={{ stroke: "rgb(134, 65, 244)" }}
          >
            <Grid
              svg={{
                stroke: "black"
              }}
            />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={this.props.data}
            formatLabel={value => `${value}D`}
            contentInset={{ left: 15, right: 15 }}
            svg={axesSvg}
          />
        </View>
      </View>
    );
  }
}

export default ChartLine;
