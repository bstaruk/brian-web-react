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

  getPrice(data, source) {
    switch (source) {
      case 'blockchain':
        return data['USD']['buy'];
      case 'coinbase':
        return data['data']['amount'];
      default:
        return 0;
    }
  }

};

export default BTCPriceStore
