import PokeTableStore from '../stores/PokeTableStore';

const PokeTableActions = {

  _sortCallback(a, b, descending) {
    let fieldA;
    let fieldB;

    if (typeof a === 'number' && typeof b === 'number') {
      fieldA = a ? a : '';
      fieldB = b ? b : '';
    } else {
      fieldA = a ? a.toString().toUpperCase() : '';
      fieldB = b ? b.toString().toUpperCase() : '';
    }

    if (fieldA < fieldB) {
      return descending ? 1 : -1;
    } else if (fieldA > fieldB) {
      return descending ? -1 : 1;
    } else {
      return 0;
    }
  },

  sort(key, descending) {
    PokeTableStore.setData(PokeTableStore.getData().sort(
      (a, b) => this._sortCallback(a[key], b[key], descending)
    ));
  }

};

export default PokeTableActions
