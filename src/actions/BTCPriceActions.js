const BTCPriceActions = {

  getPrice(sourceApi, sourceId, currency) {
    return fetch(sourceApi).then(r => r.json())
      .then(
        data => {
          switch (sourceId) {
            case 'bitpay':
              return parseFloat(data['rate']);
            case 'blockchain':
              return parseFloat(data[currency]['buy']);
            case 'coinbase':
              return parseFloat(data['data']['amount']);
            case 'coindesk':
              return parseFloat(data['bpi'][currency]['rate']);
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
