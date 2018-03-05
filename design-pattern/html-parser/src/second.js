import JsonData from './scripts/JsonData';
import Renderer from './scripts/Renderer';
import TableRenderer from './scripts/TableRenderer';

/**
 * 디자인패턴 두번째 방법 개선
 */
const data = new JsonData('https://gist.githubusercontent.com/gjjoo/4c5d43ecc74f4042685a73057b56c22c/raw/b4271cd20589e321675065da7429e5bb58306d08/data1.json');
const tableRenderer = new TableRenderer('#data');
tableRenderer.render(data);
