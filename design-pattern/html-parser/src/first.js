/**
 * 디자인 패턴 첫번째 방법
 */
const Table = (() => {
  const Private = Symbol();

  return class {
    constructor(parent) {
      if (typeof parent !== 'string' || !parent) throw 'invalid param';
      this[Private] = { parent };
    }

    // ES2017 async + await
    async load(url) {
      const response = await fetch(url);
      if (!response.ok) throw 'invalid response';

      const json = await response.json();
      const { title, header, items } = json;
      if (!items.length) throw 'no items';

      Object.assign(this[Private], { title, header, items });
      this._render();
    }

    _render() {
      const fields = this[Private];
      const parent = document.querySelector(fields.parent);
      if (!parent) throw 'invaild parent';
      if (!fields.items || !fields.items.length) {
        parent.innerHTML = 'no data';
        return;
      } else {
        parent.innerHTML = '';
      }

      const table = document.createElement('table');
      const caption = document.createElement('caption');
      caption.innerHTML = fields.title;
      table.appendChild(caption);
      table.appendChild(
        fields.header.reduce((thead, data) => {
          const th = document.createElement('th');
          th.innerHTML = data;
          thead.appendChild(th);
          return thead;
        }, document.createElement('thead'))
      );
      parent.appendChild(
        fields.items.reduce((table, row) => {
          table.appendChild(
            row.reduce((tr, data) => {
              const td = document.createElement('td');
              td.innerHTML = data;
              tr.appendChild(td);
              return tr;
            }, document.createElement('tr'))
          );
          return table;
        }, table)
      );
    }
  };
})();

const table = new Table('#data');
table.load('https://gist.githubusercontent.com/gjjoo/4c5d43ecc74f4042685a73057b56c22c/raw/42096a87933c0a3ab02f9964f02ecd720cedea96/data1.json');
