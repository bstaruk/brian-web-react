import TableStore from '../stores/TableStore';

const TableActions = {

  _sortCallback(a, b, descending) {
    let res = 0;
    if (typeof a === 'number' && typeof b === 'number') {
      res = a - b;
    } else {
      res = String(a).localeCompare(String(b));
    }
    return descending ? -1 * res : res;
  },

  sort(key, descending) {
    TableStore.setData(TableStore.getData().sort(
      (a, b) => this._sortCallback(a[key], b[key], descending)
    ));
  }

};

export default TableActions