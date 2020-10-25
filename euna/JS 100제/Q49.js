const str = '10 9 8 7 6 5 4 3 2 1';
const arr = str.split(' ');
console.log(Math.max.apply(null, arr)); // 최대값