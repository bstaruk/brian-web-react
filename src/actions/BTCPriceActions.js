const BTCPriceActions = {

  getPrice(sourceApi, sourceId) {
    return fetch(sourceApi).then(r => r.json())
      .then(
        data => {
          switch (sourceId) {
            case 'bitpay':
              return parseFloat(data['rate']);
            case 'blockchain':
              return parseFloat(data['USD']['buy']);
            case 'coinbase':
              return parseFloat(data['data']['amount']);
            default:
              return 0;
          }
        }
      )
      .catch(
        () => {
          return 0;
        }
      );
  }

};

export default BTCPriceActions
