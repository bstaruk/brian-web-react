import {EventEmitter} from 'fbemitter';
import tableData from '../assets/json/tableData.json';

let data;
const emitter = new EventEmitter();

const TableStore = {

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

  getRecord(recordId) {
    return recordId in data ? data[recordId] : null;
  }

};

export default TableStore
