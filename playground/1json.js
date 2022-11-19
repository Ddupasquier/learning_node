import fs from 'fs';

const person = { name: 'Dylan', planet: 'Earth', age: 30 };

const personJSON = JSON.stringify(person);
fs.writeFileSync('1json.json', personJSON);

const dataBuffer = fs.readFileSync('1json.json', 'utf8');
const data = JSON.parse(dataBuffer);
console.log(data);
