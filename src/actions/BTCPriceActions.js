const BTCPriceActions = {

  getPrice(sourceApi, sourceId) {
    return fetch(sourceApi).then(r => r.json())
      .then(
        data => {
          switch (sourceId) {
            case 'bitpay':
              return data['rate'];
            case 'blockchain':
              return data['USD']['buy'];
            case 'coinbase':
              return data['data']['amount'];
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
