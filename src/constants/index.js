import yaml from './data.yml';

const item = yaml[IDEA_TYPE];
const title = item.title;
const description = item.description;
const data = item.data;

export { title, description, data };
