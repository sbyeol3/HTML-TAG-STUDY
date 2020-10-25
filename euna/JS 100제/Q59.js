const str = prompt('');

const n=25+str.length/2;
const a = str.padStart(n,'=');
console.log(a.padEnd(50,'='));