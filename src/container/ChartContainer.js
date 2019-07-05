import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import { apiKey } from "../../constant";
import ChartLine from "../components/ChartLine";
// import ChartBar from "../components/ChartBar";

class ChartContainer extends Component {
  state = {
    chosenCurrency: this.props.selectedCurrency.currency,
    data: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps);
    if (prevState.chosenCurrency !== nextProps.selectedCurrency.currency) {
      return {
        chosenCurrency: nextProps.selectedCurrency.currency
      };
    }
    return null;
  }

  getCurrencyInfo = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${
          this.state.chosenCurrency
        }&tsym=USD&limit=10&api_key=${apiKey}`
      )
      .then(res => {
        function newArray(arr) {
          const arrData = [];
          for (let i = 0; i < arr.length; i++) {
            arr[i].time = new Date(arr[i].time * 1000)
              .toDateString()
              .slice(0, 11);
            // newArr.push(arr[i]);
            arrData.push(arr[i].close);
          }
          return arrData;
        }
        this.setState({
          data: newArray(res.data.Data)
        });
      });
  };

  componentDidMount() {
    this.getCurrencyInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chosenCurrency !== this.state.chosenCurrency) {
      this.getCurrencyInfo();
    }
  }

  render() {
    return (
      <View>
        <ChartLine data={this.state.data} />
        {/* <ChartBar dataBar={this.state.data} /> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCurrency: state.selectedCurrency
  };
};

export default connect(mapStateToProps)(ChartContainer);
