import {EventEmitter} from 'fbemitter';
import pokeTableData from '../assets/json/pokeTableData.json';
import pokeTableSchema from '../assets/json/pokeTableSchema.json';

let data;
const emitter = new EventEmitter();

const PokeTableStore = {

  init() {
    const storage = 'localStorage' in window
      ? localStorage.getItem('pokeTableData')
      : null;

    if (!storage) {
      data = pokeTableData;
    } else {
      data = JSON.parse(storage);
    }
  },

  getData() {
    return data;
  },

  getSchema() {
    return pokeTableSchema;
  },

  setData(newData, commit = true) {
    data = newData;
    if (commit && 'localStorage' in window) {
      localStorage.setItem('pokeTableData', JSON.stringify(newData));
    }
    emitter.emit('change');
  },

  addListener(eventType, fn) {
    emitter.addListener(eventType, fn);
  },

  getCount() {
    return data.length;
  },

  getRecord(recordId, itemId) {
    return data.find(function (data) {
      return data[recordId] == itemId;
    });
  }

};

export default PokeTableStore
