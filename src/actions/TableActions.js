import TableStore from '../stores/TableStore';

const TableActions = {

  _sortCallback(a, b, descending) {
    const fieldA = a ? a.toString().toUpperCase() : '';
    const fieldB = b ? b.toString().toUpperCase() : '';
    if (fieldA < fieldB) {
      return descending ? 1 : -1;
    } else if (fieldA > fieldB) {
      return descending ? -1 : 1;
    } else {
      return 0;
    }
  },

  sort(key, descending) {
    TableStore.setData(TableStore.getData().sort(
      (a, b) => this._sortCallback(a[key], b[key], descending)
    ));
  }

};

export default TableActions
