import React, { Component } from "react";
import { Animated } from "react-native";

class FadeInAnimation extends Component {
  state = {
    fadeAnimation: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true
    }).start();
  }

  render() {
    let { fadeAnimation } = this.state;
    return (
      <Animated.View style={{ ...this.props.style, opacity: fadeAnimation }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeInAnimation;
