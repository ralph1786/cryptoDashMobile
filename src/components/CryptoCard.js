import React from "react";
import { Card, CardItem, Icon, Text, Right } from "native-base";
import { Image } from "react-native";
import currencyImage from "./currencyImage";

const CryptoCard = props => {
  return (
    <Card>
      <CardItem>
        <Image source={currencyImage(props.currency.symbol)} />
        <Text>{props.currency}</Text>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </CardItem>
    </Card>
  );
};

export default CryptoCard;
