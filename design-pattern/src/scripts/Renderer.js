import Data from './Data';

class Renderer {
  async render(data) {
    if (!(data instanceof Data)) throw 'invalid data type';

    this._info = await data.getData();
    this._render();
  }

  _render() {
    throw '_render must ovverrided';
  }
}

export default Renderer;
