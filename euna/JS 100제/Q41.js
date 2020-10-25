const num = prompt();
let prime=true;
for (var i=2;i<num;i++){
    if (num % i == 0){
        prime=false;
    }
}
if (num==1){
    console.log("NO");
}
else if (prime==true) {
    console.log("YES");
}
else{
    console.log("NO");
}