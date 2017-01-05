import {EventEmitter} from 'fbemitter';
import tableData from '../assets/json/tableData.json';
import tableSchema from '../assets/json/tableSchema.json';

let data;
const emitter = new EventEmitter();

const PokeTableStore = {

  init() {
    const storage = 'localStorage' in window
      ? localStorage.getItem('tableData')
      : null;

    if (!storage) {
      data = tableData;
    } else {
      data = JSON.parse(storage);
    }
  },

  getData() {
    return data;
  },

  getSchema() {
    return tableSchema;
  },

  setData(newData, commit = true) {
    data = newData;
    if (commit && 'localStorage' in window) {
      localStorage.setItem('tableData', JSON.stringify(newData));
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
