let arr = prompt('').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  arr = arr.sort();
  
  let check = 'YES';
  for ( let i=0; i<arr.length-1; i++){
    if (arr[i+1] != arr[i]+1){
      check='NO';
    }
  }
  console.log(check);