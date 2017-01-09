import btcPriceSources from '../assets/json/btcPriceSources.json';

let sourceData;

const BTCPriceStore = {

  init() {
    sourceData = btcPriceSources;
  },

  getSourceData() {
    return sourceData;
  },

  getSourceRecord(recordId, itemId) {
    return sourceData.find(function (data) {
      return data[recordId] == itemId;
    });
  },

  getPrice(source) {
    return fetch(source.api).then(r => r.json())
      .then(
        data => {
          switch (source.id) {
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

export default BTCPriceStore
