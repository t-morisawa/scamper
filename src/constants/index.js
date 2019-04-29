import yaml from './yaml-parser';

const item = yaml.swot; // ここを環境変数で指定できるようにしたい
const title = item.title;
const description = item.description;
const list = item.data;

export { title , description };
export const data = list;
