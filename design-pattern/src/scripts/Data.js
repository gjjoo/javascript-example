import Info from './Info';

class Data {
  async getData() {
    const json = await this._getData();
    return new Info(json);
  }
  async _getData() {
    throw 'getData must override';
  }
}

export default Data;
