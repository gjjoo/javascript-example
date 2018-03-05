import Data from './Data';
import Info from './Info';

class JsonData extends Data {
  constructor(data) {
    super();
    this._data = data;
  }

  async _getData() {
    if (typeof this._data === 'string') {
      const response = await fetch(this._data);
      return await response.json();
    } else {
      return this._data;
    }
  }
}

export default JsonData;
