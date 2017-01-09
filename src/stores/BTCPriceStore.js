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
    if (source === 'blockchain') {
      return data['USD']['buy'];
    } else if (source === 'coinbase') {
      return data['data']['amount'];
    }
  }

};

export default BTCPriceStore
