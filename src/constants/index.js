import yaml from './yaml-parser';

const item = yaml[IDEA_TYPE];
const title = item.title;
const description = item.description;
const list = item.data;

export { title , description };
export const data = list;
