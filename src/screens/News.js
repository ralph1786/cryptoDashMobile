import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content
} from "native-base";
import NewsContainer from "../container/NewsContainer";

class NewsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={{ color: "blue" }}>News</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <NewsContainer />
        </Content>
      </Container>
    );
  }
}

export default NewsScreen;
