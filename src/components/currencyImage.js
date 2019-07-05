const currencyImage = symbol => {
  switch (symbol) {
    case "BTC":
      return "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png";
    case "ETH":
      return "https://d172h4vc197skd.cloudfront.net/images/89/23/89231ba1d7cd720fb5d00106b33bf9db_4031156383d_t.png";
    case "XRP":
      return "https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1016387854,width=178,height=178,version=1523654712/ripple-xrp-new-logo-crypto-currency-bitcoin-hodl.png";
    case "BCH":
      return "https://s.yimg.com/ny/api/res/1.2/G9jAmuZRb34GvCCi4Oisgw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/coin_rivet_596/62ba09746ed3275948a453948f052c71";
    case "LTC":
      return "https://static1.squarespace.com/static/5a78883ba803bb706feafd92/t/5a82200008522962b660c976/1518474968211/?format=1500w";
    case "EOS":
      return "https://seeklogo.com/images/E/eos-logo-ECF31E0936-seeklogo.com.png";
    case "BNB":
      return "https://cdn-images-1.medium.com/max/1600/1*HS1k7-dZFTv7I-Gau7Hlvw.png";
    case "USDT":
      return "https://image.flaticon.com/icons/png/512/825/825508.png";
    case "BSV":
      return "https://pbs.twimg.com/profile_images/1051964386699563011/wUjCaoil_400x400.jpg";
    case "ADA":
      return "https://qolczpnfu7-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/cardano_cryptocurrency_800x480.jpg";
    default:
      break;
  }
};

export default currencyImage;
