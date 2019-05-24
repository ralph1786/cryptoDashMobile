import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content
} from "native-base";
import CurrenciesContainer from "../container/CurrenciesContainer";
import { connect } from "react-redux";
import { fetchCurrencies } from "../store/actions";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <CurrenciesContainer />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrencies: () => dispatch(fetchCurrencies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
