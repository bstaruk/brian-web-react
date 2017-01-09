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
  }

};

export default BTCPriceStore
