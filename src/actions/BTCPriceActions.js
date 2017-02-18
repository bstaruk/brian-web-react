const BTCPriceActions = {

  getPrice(sourceApi, sourceId, currency) {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(
          fetch(sourceApi).then(r => r.json())
            .then(
              data => {
                switch (sourceId) {
                  case 'bitpay':
                    return parseFloat(data['rate']);
                  case 'blockchain':
                    return parseFloat(data[currency]['buy']);
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
            )
        );
      }, 500);
    });
  }

};

export default BTCPriceActions
