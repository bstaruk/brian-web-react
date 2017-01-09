import btcPriceSources from '../assets/json/btcPriceSources.json';

let sourceData;
const currencies = [
  {
    'id': 'USD',
    'symbol': '$'
  },
  {
    'id': 'EUR',
    'symbol': '€'
  }
];

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

  getCurrencies() {
    return currencies;
  },

  getCurrencyRecord(recordId, itemId) {
    return currencies.find(function (data) {
      return data[recordId] == itemId;
    });
  }

};

export default BTCPriceStore
