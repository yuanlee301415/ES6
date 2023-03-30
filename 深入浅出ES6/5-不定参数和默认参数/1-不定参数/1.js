function sum(...ns){
var sum=0;
for(var n of ns){
sum+=n;
}
return sum;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6));