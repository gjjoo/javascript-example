import Renderer from './Renderer';

class TableRenderer extends Renderer {
  constructor(parent) {
    if (typeof parent !== 'string' || !parent) throw new Error('invalid param');
    super();
    this._parent = parent;
  }

  _render() {
    const parent = document.querySelector(this._parent);
    if (!parent) throw new Error('invaild parent');
    parent.innerHTML = '';

    const [table, caption] = 'table,caption'.split(',').map(v => document.createElement(v));
    caption.innerHTML = this._info.title;
    table.appendChild(caption);
    table.appendChild(
      this._info.header.reduce(
        (thead, data) => (thead.appendChild(document.createElement('th')).innerHTML = data, thead),
        document.createElement('thead'))
    );
    parent.appendChild(
      this._info.items.reduce(
        (table, row) => (table.appendChild(
          row.reduce(
            (tr, data) => (tr.appendChild(document.createElement('td')).innerHTML = data, tr),
            document.createElement('tr'))
        ), table),
        table)
    );
  }
}

export default TableRenderer;
